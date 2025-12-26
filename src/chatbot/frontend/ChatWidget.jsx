import { useState, useRef } from "react";
import "./chat.css";
import chatIcon from "../../assets/chat-icon.png";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const isLoadingRef = useRef(false);
  const imgErrorRef = useRef(false);

  const toggleChat = () => {
    setShowPopup(false);
    setOpen((prev) => {
      const next = !prev;

      if (next && !hasWelcomed) {
        setMessages([
          {
            role: "assistant",
            text:
              "Hey! I'm Lahari's AI assistant. I can help you explore her projects, skills, and experience. What would you like to know?"
          }
        ]);
        setHasWelcomed(true);
      }

      return next;
    });
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoadingRef.current) return;

    isLoadingRef.current = true;
    const question = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "assistant", text: "Typing…" }
    ]);

    try {
      const API_BASE = import.meta.env.VITE_CHATBOT_URL;

      const res = await fetch(`${API_BASE}/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          text:
            data.answer ||
            "This information is not available in the portfolio."
        };
        return updated;
      });
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          text: "Something went wrong. Please try again."
        };
        return updated;
      });
    } finally {
      isLoadingRef.current = false;
    }
  };

  return (
    <>
      {showPopup && (
        <div className="chat-popup">
          Explore Lahari's work with me
        </div>
      )}

      <div className="chat-button" onClick={toggleChat}>
        {!imgErrorRef.current ? (
          <img
            src={chatIcon}
            alt="Chat"
            onError={() => (imgErrorRef.current = true)}
          />
        ) : (
          <span>AI</span>
        )}
      </div>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            Lahari's AI Assistant
            <span onClick={toggleChat}>✕</span>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, experience…"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
