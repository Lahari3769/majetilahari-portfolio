// src/pages/case-studies/PortfolioAssistant.jsx

import architectureImg from '../../assets/architectures/portfolio-assistant-architecture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import demoVideo from '../../assets/demo-videos/portfolio-assistant-demo.mp4';


export default function MyPortfolioAssistant() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="section bg-dark text-light">
      <div className="container">

        {/* Back to Projects */}
        <div className="mb-4">
          <button
            className="btn btn-outline-info btn-sm"
            onClick={() => navigate('/#Projects')}
          >
            ← Back to Projects
          </button>
        </div>

        {/* Header */}
        <div className="mb-5">
          <h2 className="fw-bold">
            AI Portfolio Assistant – Intelligent Conversational Interface for Portfolio Exploration
          </h2>
          <p className="text-white-50 mt-2">
            An AI-powered chatbot that enables visitors to interactively explore my portfolio through natural language conversations, providing instant answers about projects, skills, and professional experience.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="mb-3">Problem Statement</h4>
          <p className="text-white-50">
            Traditional portfolio websites present static information that visitors must navigate manually. This creates several challenges:
            <ul>
              <li>Visitors spend time searching through multiple pages to find specific information</li>
              <li>Important details about projects or skills may be overlooked</li>
              <li>Recruiters and hiring managers have limited time to review portfolios thoroughly</li>
              <li>No interactive way to ask follow-up questions or dive deeper into specific areas of interest</li>
              <li>Difficult to showcase personality and communication style through static content alone</li>
            </ul>
            A more engaging, interactive approach was needed to help visitors efficiently discover relevant information.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="mb-3">Solution</h4>
          <p className="text-white-50">
            Built an intelligent AI assistant that transforms portfolio exploration into a conversational experience:
            <ul>
              <li>Enables natural language queries about projects, technologies, skills, and experience</li>
              <li>Provides instant, context-aware responses grounded in portfolio content</li>
              <li>Uses retrieval-augmented generation (RAG) to ensure accurate, relevant answers</li>
              <li>Offers a friendly, professional interface that reflects my communication style</li>
              <li>Available 24/7 as an always-on digital representative</li>
            </ul>
            The assistant serves as an interactive guide, helping visitors quickly find information that matters to them.
          </p>
        </div>

        {/* Why GenAI */}
        <div className="mb-5">
          <h4 className="mb-3">Why Generative AI</h4>
          <p className="text-white-50">
            Traditional search or FAQ systems require exact keyword matches and predefined questions. Generative AI enables:
            <ul>
              <li><strong>Natural conversation:</strong> Visitors can ask questions in their own words without rigid query formats</li>
              <li><strong>Context understanding:</strong> The AI comprehends intent behind questions and provides relevant answers</li>
              <li><strong>Grounded responses:</strong> RAG ensures answers are based on actual portfolio content, not hallucinated information</li>
              <li><strong>Personalized interaction:</strong> Responses reflect my professional voice and personality</li>
            </ul>
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-5">
          <h4 className="mb-3">Architecture Overview</h4>
          <p className="text-white-50 mb-4">
            The system implements a <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline 
            with local LLM inference, ensuring privacy and full control over responses.
          </p>

          {/* Architecture Image */}
          <div className="text-center">
            <img
              src={architectureImg}
              alt="Portfolio Assistant Architecture Diagram"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%', border: '1px solid #333' }}
            />
            <p className="text-white-50 mt-2 small">
              End-to-end architecture showing portfolio scraping, embedding generation, 
              vector storage, semantic retrieval, and LLM-based response generation.
            </p>
          </div>

          <div className="mt-4 text-white-50">
            <h5>Pipeline Flow:</h5>
            <ol>
              <li><strong>Content Ingestion:</strong> Playwright scrapes portfolio content including projects, skills, and experience</li>
              <li><strong>Embedding Generation:</strong> Sentence Transformers (all-MiniLM-L6-v2) converts text into semantic vectors</li>
              <li><strong>Vector Storage:</strong> ChromaDB stores embeddings for efficient similarity search</li>
              <li><strong>Query Processing:</strong> User questions are embedded and matched against stored content</li>
              <li><strong>Context Retrieval:</strong> Top-k most relevant documents are retrieved based on semantic similarity</li>
              <li><strong>Response Generation:</strong> Llama 3.1 (8B) generates natural language responses grounded in retrieved context</li>
            </ol>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-5">
          <h4 className="mb-3">Key Engineering Highlights</h4>
          <ul className="text-white-50">
            <li><strong>Automated Content Pipeline:</strong> Built web scraping system using Playwright to automatically extract and update portfolio content for the knowledge base.</li>
            <li><strong>Semantic Search Implementation:</strong> Integrated Sentence Transformers for generating high-quality embeddings and ChromaDB for efficient vector similarity search.</li>
            <li><strong>RAG Architecture:</strong> Designed retrieval-augmented generation pipeline to ensure responses are factually grounded in portfolio content, eliminating hallucinations.</li>
            <li><strong>Local LLM Deployment:</strong> Integrated Llama 3.1 (8B) via Ollama for fast, privacy-preserving inference without cloud API dependencies.</li>
            <li><strong>Prompt Engineering:</strong> Crafted detailed system prompts to maintain professional tone, accurate pronoun usage, and consistent formatting without markdown.</li>
            <li><strong>Flask Backend API:</strong> Built RESTful endpoints for handling chat requests, context retrieval, and health monitoring.</li>
            <li><strong>React Frontend Integration:</strong> Developed an intuitive chat widget with:
              <ul>
                <li>Floating chat button with animated popup notification</li>
                <li>Real-time message streaming</li>
                <li>Clean, professional UI matching portfolio design</li>
                <li>Smooth animations and responsive interactions</li>
              </ul>
            </li>
            <li><strong>Error Handling:</strong> Implemented comprehensive error handling for API failures, timeouts, and edge cases with user-friendly messages.</li>
            <li><strong>Performance Optimization:</strong> Configured retrieval parameters (k=6, temperature=0.3) for optimal balance between accuracy and response quality.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-3">Tech Stack</h4>
          <ul className="text-white-50">
            <li><strong>AI / NLP:</strong> Llama 3.1 (8B), Sentence Transformers (all-MiniLM-L6-v2), RAG Architecture</li>
            <li><strong>Backend:</strong> Python, Flask, Flask-CORS</li>
            <li><strong>Vector Database:</strong> ChromaDB</li>
            <li><strong>LLM Inference:</strong> Ollama (Local deployment)</li>
            <li><strong>Web Scraping:</strong> Playwright</li>
            <li><strong>Frontend:</strong> React, JavaScript, CSS3</li>
            <li><strong>Deployment:</strong> Vercel</li>
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-5">
          <h4 className="mb-3">Technical Challenges & Solutions</h4>
          <ul className="text-white-50">
            <li>
              <strong>Challenge:</strong> LLM responses contained markdown formatting (**, -, #) that broke UI styling.
              <br />
              <strong>Solution:</strong> Engineered strict formatting rules in system prompt to enforce plain text output with clear examples.
            </li>
            <li>
              <strong>Challenge:</strong> AI occasionally used incorrect pronouns or neutral references.
              <br />
              <strong>Solution:</strong> Added explicit identity rules in prompt with emphasis on consistent "she/her" pronoun usage.
            </li>
            <li>
              <strong>Challenge:</strong> Responses sometimes included information not present in portfolio (hallucinations).
              <br />
              <strong>Solution:</strong> Implemented RAG with strict grounding rules - responses must only use retrieved context or return "information not available" message.
            </li>
            <li>
              <strong>Challenge:</strong> Initial responses were too verbose and chatbot-like.
              <br />
              <strong>Solution:</strong> Refined prompt to encourage concise, direct answers with professional but conversational tone.
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="mb-5">
          <h4 className="mb-3">Key Use Cases</h4>
          <ul className="text-white-50">
            <li><strong>Recruiter Screening:</strong> Hiring managers can quickly ask about specific skills, technologies, or project experience</li>
            <li><strong>Project Discovery:</strong> Visitors can inquire about projects matching their interests (e.g., "What AI projects has she worked on?")</li>
            <li><strong>Technical Deep Dives:</strong> Users can ask follow-up questions to understand technical implementations and architectural decisions</li>
            <li><strong>Skills Verification:</strong> Easy validation of specific technical competencies and experience levels</li>
            <li><strong>Engagement Tracking:</strong> Understand what visitors are most interested in through conversation patterns</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <h4 className="mb-3">Impact & Results</h4>
          <ul className="text-white-50">
            <li>Transformed static portfolio into an interactive, engaging experience</li>
            <li>Reduced friction for visitors seeking specific information</li>
            <li>Demonstrated practical application of AI/ML skills through a real-world project</li>
            <li>Showcased full-stack development capabilities from scraping to deployment</li>
            <li>Created a unique differentiator that reflects technical expertise and innovation</li>
            <li>Enabled 24/7 portfolio exploration without requiring personal availability</li>
          </ul>
        </div>

        {/* Demo Video */}
        <div className="mb-5">
          <h4 className="mb-3">Demo Video</h4>
          <div className="text-center">
            <div className="ratio ratio-16x9" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <video
                controls
                className="rounded shadow"
                style={{ border: '1px solid #333' }}
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-white-50 mt-2 small">
              Watch the AI assistant in action - from architecture explanation to live Q&A demonstration
            </p>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="mb-5">
          <h4 className="mb-3">Future Enhancements</h4>
          <ul className="text-white-50">
            <li>Implement conversation memory to handle multi-turn contextual dialogues</li>
            <li>Add analytics dashboard to track popular questions and user interests</li>
            <li>Integrate feedback mechanism (thumbs up/down) to improve response quality</li>
            <li>Implement caching for frequently asked questions to reduce latency</li>
            <li>Add multilingual support for international visitors</li>
            <li>Deploy to cloud infrastructure for public accessibility</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}