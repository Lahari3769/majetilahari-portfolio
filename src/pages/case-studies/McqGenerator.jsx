// src/pages/case-studies/DevelopersGenie.jsx

import architectureImg from '../../assets/architectures/mcq-generator-architecture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function McqGenerator() {
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
            LLM-Powered Multimodal Quiz & Assessment Generator
          </h2>
          <p>Personal Project | Generative AI</p>
          <p className="text-white-50 mt-2">
            An end-to-end multimodal GenAI application that generates and evaluates quizzes from text, 
            documents, images, audio, and video using a unified LLM-driven pipeline.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="mb-3">Problem Statement</h4>
          <p className="text-white-50">
            Creating educational quizzes from diverse content formats is time-consuming and inconsistent. 
            Existing tools are limited to text inputs and lack validation, quality control, and interactive assessment capabilities.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="mb-3">Solution</h4>
          <p className="text-white-50">
            Designed a multimodal quiz generation system that converts mixed input types into structured 
            educational assessments, enabling both quiz creation and quiz attempt workflows in a single application.
          </p>
        </div>

        {/* Why GenAI */}
        <div className="mb-5">
          <h4 className="mb-3">Why Generative AI</h4>
          <p className="text-white-50">
            Traditional rule-based approaches fail to extract semantic meaning from unstructured and multimodal 
            content. LLMs enable context-aware question generation, explanation synthesis, and adaptive content
            handling across diverse data sources.
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-5">
          <h4 className="mb-3">Architecture Overview</h4>
          <p className="text-white-50 mb-4">
            This design allows all input types to follow a single, consistent LLM pipeline, simplifying maintenance and extensibility.
          </p>

          {/* Architecture Image */}
          <div className="text-center">
            <img
              src={architectureImg}
              alt="LLM-Powered Multimodal Quiz & Assessment Generator's Architecture Diagram"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%', border: '1px solid #333' }}
            />
            <p className="text-white-50 mt-2 small">
              Unified Multimodal Pipeline
            </p>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-5">
          <h4 className="mb-3">Key Engineering Highlights</h4>
          <ul className="text-white-50">
            <li>Designed a modular, multimodal pipeline, converting text, images, audio, video, and documents into a unified text representation before LLM processing.</li>
            <li>Integrated OCR, Whisper, and MoviePy to enable robust text extraction across non-text inputs.</li>
            <li>Implemented educational content validation to filter non-relevant or low-information inputs before quiz generation.</li>
            <li>Dynamically adjusted the number of MCQs based on input length and semantic density, preventing low-quality question generation.</li>
            <li>Built a dual-mode interface:</li>
            <ul>
                <li><strong>Create Quiz:</strong> Generates MCQs with answers and explanations.</li>
                <li><strong>Attempt Quiz:</strong> Enables interactive quiz-taking and evaluation.</li>
            </ul>
            <li>Added graceful fallback handling for weak inputs (e.g., low-information images or noisy audio), providing meaningful feedback to users.</li>
            <li>Followed a clean, notebook-to-production workflow, prototyping logic in notebooks before refactoring into modular, production-ready Python code.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-3">Tech Stack</h4>
          <ul className="text-white-50">
            <li><strong>AI / NLP:</strong> Mistral LLM, Prompt Engineering, OCR, Whisper (Audio-to-Text), MoviePy (Video-to-Text), PyMuPDF, python-docx, BeautifulSoup</li>
            <li><strong>Backend:</strong> Python, Modular Pipeline Architecture</li>
            <li><strong>Frontend:</strong> Streamlit</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <h4 className="mb-3">Impact & Learning</h4>
          <ul className="text-white-50">
            <li>Demonstrates end-to-end GenAI system design, not just prompt usage.</li>
            <li>Showcases multimodal AI handling, a key area of interest in modern GenAI roles.</li>
            <li>Highlights strong engineering discipline through modular design and validation layers.</li>
            <li>Establishes a public, explainable GenAI project suitable for demos and interviews.</li>
          </ul>
        </div>

        {/* Planned Enhancements */}
        <div className="mb-5">
          <h4 className="mb-3">Planned Enhancements</h4>
          <ul className="text-white-50">
            <li>Difficulty-based quiz generation (Easy / Medium / Hard).</li>
            <li>RAG-based quiz generation from textbooks or curated sources.</li>
            <li>Answer quality evaluation and scoring analytics.</li>
            <li>Dockerized deployment for cloud portability.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
