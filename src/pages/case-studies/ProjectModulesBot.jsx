import architectureImg from '../../assets/architectures/project-modules-chatbot-architecture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import demoVideo from '../../assets/demo-videos/project-modules-bot-demo.mp4';

export default function ProjectModulesBot() {
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
            Project Modules Q&A Chatbot
          </h2>
          <p className="text-white-50 mt-2">
            End-to-End Retrieval-Augmented Generation (RAG) System
          </p>
          <p className="text-white-50 mt-2">
            A production-deployed RAG-based chatbot that enables developers and SREs to query GitHub-hosted 
            project documentation using natural language, backed by vector search, CI/CD, and cloud deployment.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="mb-3">Problem Statement</h4>
          <p className="text-white-50">
            Large enterprise projects often have extensive documentation spread across multiple GitHub repositories and module pages. 
            Manually navigating and understanding these documents is time-consuming, especially for:
            <ul>
              <li>Developers onboarding onto new modules</li>
              <li>Engineers trying to understand inter-module dependencies</li>
              <li>SREs searching support manuals during incidents</li>
            </ul>
            Traditional keyword search fails to capture semantic intent and contextual understanding.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="mb-3">Solution</h4>
          <p className="text-white-50">
            Designed and deployed a full-stack, cloud-native RAG chatbot that allows users to ask natural language 
            questions and receive context-aware answers, optionally enriched with relevant images.
          </p>
        </div>

        {/* Why GenAI */}
        <div className="mb-5">
          <h4 className="mb-3">Why Generative AI</h4>
          <p className="text-white-50">
            Keyword-based search cannot reason over unstructured documentation or generate synthesized explanations. 
            RAG enables grounded LLM responses, ensuring answers are accurate, explainable, and traceable to source documents.
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-5">
          <h4 className="mb-3">Architecture Overview</h4>

          {/* Architecture Image */}
          <div className="text-center">
            <img
              src={architectureImg}
              alt="Project Modules Q&A Bot's Architecture Diagram"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%', border: '1px solid #333' }}
            />
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-5">
          <h4 className="mb-3">Key Engineering Highlights</h4>
          <strong>RAG & Data Pipeline</strong>
          <ul className="text-white-50">
            <li>Scraped GitHub-hosted documentation pages using BeautifulSoup with Selenium automation to handle dynamic content.</li>
            <li>Chunked and embedded documentation, storing vectors in Milvus for high-performance semantic search.</li>
            <li>Implemented query embedding and top-K retrieval to provide grounded context for LLM responses.</li>
          </ul>
          <strong>LLM Integration</strong>
          <ul className="text-white-50">
            <li>Integrated Watsonx.ai LLMs to generate answers based strictly on retrieved documentation context.</li>
            <li>Designed prompt templates to combine user queries, retrieved chunks, and system instructions for reliable answer generation.</li>
          </ul>
          <strong>Multimodal Responses</strong>
          <ul className="text-white-50">
            <li>Stored documentation images in IBM Cloud Object Storage (COS).</li>
            <li>Enabled responses that return text + relevant images, enhancing explainability for architecture or module-related queries.</li>
          </ul>
          <strong>Application & Deployment</strong>
          <ul className="text-white-50">
            <li>Built a Flask-based web application to accept user queries and display AI-generated responses.</li>
            <li>Containerized the application using Docker and maintained source code in GitHub.</li>
            <li>Implemented a Jenkins CI/CD pipeline triggered by GitHub webhooks:</li>
            <ul>
              <li>Builds Docker images on code merge</li>
              <li>Pushes images to IBM Cloud Container Registry (ICCR)</li>
              <li>Deploys the application to IBM Cloud</li>
            </ul>
            <li>Configured cloud services, routes, and access policies to securely expose the application.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-3">Tech Stack</h4>
          <ul className="text-white-50">
            <li><strong>AI / NLP:</strong> Watsonx.ai (LLMs)</li>
            <li><strong>Backend:</strong> Python, Flask </li>
            <li><strong>Vector Database:</strong> Milvus </li>
            <li><strong>Web Scraping/Ingestion:</strong> BeautifulSoup, Selenium</li>
            <li><strong>DevOps:</strong> Docker, Jenkins CI/CD, IBM Cloud Container Registry, IBM Cloud Object Storage (COS)</li>
            <li><strong>Version Control:</strong> GitHub</li>

          </ul>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <h4 className="mb-3">Target Users & Impact</h4>
          <ul className="text-white-50">
            <li><strong>Developers:</strong> Faster understanding of module responsibilities and interdependencies</li>
            <li><strong>SREs</strong> Instant access to support manuals during incident triage</li>
            <li><strong>New Joiners:</strong> Reduced onboarding time via conversational documentation access</li>
            <li><strong>Impact:</strong></li>
            <ul>
              <li>Eliminated manual documentation browsing.</li>
              <li>Improved developer productivity and system understanding.</li>
              <li>Demonstrated a scalable blueprint for enterprise RAG deployments.</li>
            </ul>
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
              Watch the RAG-based chatbot in action - from architecture overview to live documentation queries and deployment details on IBM Cloud
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
