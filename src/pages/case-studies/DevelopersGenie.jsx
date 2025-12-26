// src/pages/case-studies/DevelopersGenie.jsx

import architectureImg from '../../assets/architectures/developers-genie-architecture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DevelopersGenie() {
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
            Developer’s Genie – Agentic AI Assistant for Version-Aware Technical Understanding
          </h2>
          <p className="text-white-50 mt-2">
            🏆 Judges’ Award Winner – IBM Developers Jumpstart
          </p>
          <p className="text-white-50 mt-2">
            An agentic Generative AI System that enables conversational understanding, summarization, and comparison of evolving technical specifications and codebases across multiple versions.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="mb-3">Problem Statement</h4>
          <p className="text-white-50">
            Modern product development relies heavily on evolving technical specifications and code versions. However, teams face significant challenges when reviewing changes across document or code revisions:
            <ul>
              <li>Manual comparison of versions is time-consuming and error-prone</li>
              <li>Limited subject-matter expertise makes deep analysis difficult at scale</li>
              <li>Subtle yet critical changes in technical language are easily missed</li>
              <li>Poor change visibility leads to miscommunication, missed defects, and delayed approvals</li>
            </ul>
            As document and code complexity increases, traditional review processes fail to scale.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="mb-3">Solution</h4>
          <p className="text-white-50">
            Designed Developer’s Genie, an LLM-powered, multi-agent assistant that enables users to:
            <ul>
              <li>Converse with multiple versions of technical documents or code</li>
              <li>Automatically summarize changes and enhancements</li>
              <li>Compare revisions to identify functional differences and improvements</li>
              <li>Use the system as a knowledge transfer (KT) and onboarding tool</li>
            </ul>
            The system abstracts complex version analysis into simple natural-language queries.
          </p>
        </div>

        {/* Why GenAI */}
        <div className="mb-5">
          <h4 className="mb-3">Why Generative AI</h4>
          <p className="text-white-50">
            Rule-based diff tools can identify syntactic changes but fail to explain semantic meaning, intent, 
            or impact. Generative AI enables contextual reasoning, summarization, and explanation across evolving technical 
            artifacts.
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-5">
          <h4 className="mb-3">Architecture Overview</h4>
          <p className="text-white-50 mb-4">
            The system follows an <strong>Agentic Retrieval-Augmented Generation (RAG)</strong>{' '}
            architecture. LangChain agents orchestrate multi-step reasoning while
            enterprise LLMs generate grounded, context-aware responses.
          </p>

          {/* Architecture Image */}
          <div className="text-center">
            <img
              src={architectureImg}
              alt="Developer’s Genie Architecture Diagram"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%', border: '1px solid #333' }}
            />
            <p className="text-white-50 mt-2 small">
              High-level system architecture showing ingestion, retrieval,
              agent orchestration, and response generation.
            </p>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-5">
          <h4 className="mb-3">Key Engineering Highlights</h4>
          <ul className="text-white-50">
            <li>Designed a multi-agent system where each agent encapsulates a specific document or code version, enabling precise and context-aware comparisons.</li>
            <li>Built an agent orchestration layer that dynamically selects relevant agents based on user queries.</li>
            <li>Enabled conversational querying over document and code versions for summarization, comparison, debugging, and explanation.</li>
            <li>Implemented end-to-end project management workflows, including:</li>
            <ul>
              <li>User registration and authentication</li>
              <li>Project creation and version tracking</li>
              <li>Incremental document/code uploads</li>
            </ul>
            <li>Persisted metadata and analysis results using SQLite databases for users, projects, versions, and explanations.</li>
            <li>Developed a React-based UI to support seamless navigation across projects and versions.</li>
            <li>Applied LangChain agents integrated with Watsonx.ai to handle reasoning and orchestration.</li>
            <li>Designed the system to function as:</li>
            <ul>
              <li>A technical review accelerator</li>
              <li>A debugging assistant</li>
              <li>A knowledge transfer tool for new team members</li>
            </ul>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-3">Tech Stack</h4>
          <ul className="text-white-50">
            <li><strong>AI / NLP:</strong> Watsonx.ai (LLMs), LangChain Agents, Multi-Agent Architecture</li>
            <li><strong>Backend:</strong> Python, Flask, SQLite</li>
            <li><strong>Vector Database:</strong> Milvus</li>
            <li><strong>DevOps:</strong> Docker, Jenkins, IBM Cloud, COS</li>
            <li><strong>Frontend:</strong> React</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <h4 className="mb-3">Impact & Recognition</h4>
          <ul className="text-white-50">
            <li>Reduced manual effort involved in understanding technical changes across document/code versions.</li>
            <li>Improved visibility into enhancements and regressions, lowering the risk of missed defects.</li>
            <li>Accelerated review and approval cycles by enabling conversational change analysis.</li>
            <li>Recognized with a <strong>Judges’ Award at IBM Developers Jumpstart</strong> for innovation, usability, and real-world impact</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
