import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'LLM-Powered Multimodal Quiz & Assessment Generator',
    tech: 'Python, Mistral LLM, Prompt Engineering, OCR, Whisper (Audio-to-Text), MoviePy (Video-to-Text), BeautifulSoup, PyMuPDF, python-docx, Streamlit, Modular Pipeline Architecture, GitHub',
    desc:
      'An end-to-end multimodal GenAI application that generates and evaluates quizzes from text, documents, images, audio, video and web URLs using a unified LLM-driven pipeline.',
    deepDive: true,
    route: '/case-studies/mcq-generator'
  },
  {
    title: "Developer’s Genie – Agentic AI Assistant for Version-Aware Technical Understanding",
    tech: 'Python, LangChain (Agents), Watsonx.ai (LLMs), Multi-Agent Architecture, SQLite, React',
    desc:
      'An agentic Generative AI system that enables conversational understanding, summarization, and comparison of evolving technical specifications and codebases across multiple versions.',
    deepDive: true,
    route: '/case-studies/developers-genie'
  },
  {
    title: 'Project Modules Q&A Chatbot (RAG)',
    tech: 'Python (Flask), Watsonx.ai (LLMs), Milvus (Vector Database), BeautifulSoup + Selenium, Docker, Jenkins CI/CD, IBM Cloud Container Registry, IBM Cloud Object Storage, GitHub',
    desc:
      'A production-deployed RAG-based chatbot that enables developers and SREs to query GitHub-hosted project documentation using natural language, backed by vector search, CI/CD, and cloud deployment.',
    deepDive: true,
    route: '/case-studies/project-modules-bot'
  },
  {
    title: "My Portfolio Assistant",
    tech: 'React, Flask, LangChain, Llama 3.1, ChromaDB, Sentence Transformers, RAG',
    desc: 'My digital companion, an AI-powered chatbot integrated into my portfolio that provides instant answers about my projects, skills, and professional experience using retrieval-augmented generation (RAG) and local LLM inference.',
    deepDive: true,
    route: '/case-studies/my-portfolio-assistant'
  },
  {
    title: 'Supporting Enterprise AI Utilities',
    tech: 'Watsonx.ai, IBM Db2, Prompt Engineering',
    desc:
      'Internal AI tools including a Run Status Bot with Dynamic Db2 Integration, LLM-Based Test Case Generation Bot, Incident Management & Resolution Intelligence System reinforce my experience in building enterprise GenAI systems that integrate LLMs with structured data, operational workflows, and real-world engineering constraints.',
    deepDive: true,
    route: '/case-studies/supporting-genai-projects'
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="Projects" className="section bg-dark text-light">
      <div className="container">

        <h2 className="text-center mb-5">Projects</h2>

        <div className="row gy-4">
          {projects.map((p, index) => (
            <div key={p.title} className="col-md-6" data-aos="zoom-in-up">
              <div className="project-card p-4 h-100">

                <h4 className="project-title">{p.title}</h4>
                <p><strong>Tech Stack:</strong> {p.tech}</p>
                <p className="text-white-50">{p.desc}</p>

                {p.deepDive ? (
                  <button
                    className="btn project-btn btn-outline-info mt-2"
                    onClick={() => navigate(p.route)}
                  >
                    View Project Details →
                  </button>
                ) : (
                  <button
                    className="btn project-btn btn-outline-secondary mt-2"
                    disabled
                  >
                    Details Available on Request
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
