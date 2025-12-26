import architectureImg from '../../assets/architectures/project-modules-chatbot-architecture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SupportingGenAIProjects() {
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

        {/* Supporting Generative AI Projects */}
        <div className="mb-5">
        <h3 className="mb-3">Supporting Generative AI Projects</h3>
        <p className="text-white-50 mb-4">
            These projects reinforce my experience in building enterprise-grade Generative AI
            systems that integrate LLMs with structured data, operational workflows, and
            real-world engineering constraints.
        </p>

        <div className="row gy-4">

            {/* Run Status Bot */}
            <div className="col-md-12">
            <div className="p-4 rounded border border-secondary">
                <h5>🔹 Run Status Bot with Dynamic Db2 Integration</h5>
                <p className="text-white-50 fst-italic mb-2">
                Generative AI | Structured + Unstructured Reasoning
                </p>

                <p className="text-white-50">
                Built a natural-language chatbot that dynamically queries IBM Db2 to retrieve
                structured run-status data and uses LLMs to generate human-readable system
                health summaries for operational teams.
                </p>

                <ul className="text-white-50">
                <li>Translated natural-language queries into structured database lookups</li>
                <li>Combined deterministic Db2 queries with LLM-based summarization</li>
                <li>Enabled real-time system introspection via conversational AI</li>
                </ul>
            </div>
            </div>

            {/* Test Case Generation Bot */}
            <div className="col-md-12">
            <div className="p-4 rounded border border-secondary">
                <h5>🔹 LLM-Based Test Case Generation Bot</h5>
                <p className="text-white-50 fst-italic mb-2">
                Generative AI | Developer Productivity
                </p>

                <p className="text-white-50">
                Designed a prompt-engineered GenAI system that generates unit and integration
                test cases directly from feature specifications and code logic.
                </p>

                <ul className="text-white-50">
                <li>Built using Watsonx.ai with carefully designed prompt templates</li>
                <li>Generated structured test cases aligned with functional requirements</li>
                <li>Improved test coverage while reducing manual QA effort</li>
                </ul>
            </div>
            </div>

            {/* Incident Management System */}
            <div className="col-md-12">
            <div className="p-4 rounded border border-secondary">
                <h5>🔹 Incident Management & Resolution Intelligence System</h5>
                <p className="text-white-50 fst-italic mb-2">
                Applied AI | Knowledge-Driven Automation
                </p>

                <p className="text-white-50">
                Built an AI-assisted system that leverages historical incident and resolution
                data to provide probable root-cause hints and resolution suggestions during
                live operational incidents.
                </p>

                <ul className="text-white-50">
                <li>Maintained structured incident and resolution datasets</li>
                <li>Enabled AI-assisted resolution hints for recurring incidents</li>
                <li>Improved response efficiency during high-pressure scenarios</li>
                </ul>
            </div>
            </div>

        </div>
        </div>

    </div>
    </section>
  );
}