import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ShiftHandoverAgent() {
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
            AI-Driven DevOps Shift Handover Automation Agent
          </h2>
          <p className="text-white-50 mt-2">
            Agentic AI · IBM Watsonx Orchestrate · Enterprise DevOps Automation
          </p>
          <p className="text-white-50 mt-2">
            An Agentic AI system that automates end-to-end DevOps shift handovers by integrating
            incident triage, cloud payment status aggregation, operational reports, and automated
            email generation into a single unified workflow — cutting handover preparation from
            15–30 minutes to under 1 minute and saving 250+ hours annually.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="mb-3">Problem Statement</h4>
          <p className="text-white-50">
            DevOps teams operating across global time zones rely on structured shift handovers to
            maintain continuity and visibility. However, the manual process was slow and error-prone:
          </p>
          <ul className="text-white-50">
            <li>Engineers spent 15–30 minutes per shift manually compiling incident reports, cloud payment statuses, and operational summaries.</li>
            <li>Information was scattered across ServiceNow, Box, cloud dashboards, and email threads.</li>
            <li>Handover reports were inconsistent in format and depth, leading to missed context and delayed responses.</li>
            <li>Cross-timezone handovers amplified the risk of information loss and miscommunication.</li>
            <li>Valuable engineering time was consumed by repetitive data aggregation rather than high-value problem-solving.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h4 className="mb-3">Solution</h4>
          <p className="text-white-50">
            Led a 6-member team to architect and deliver an Agentic AI system that fully automates
            the shift handover process. The agent orchestrates multiple data sources and tools to
            produce a structured, ready-to-send handover report with zero manual effort:
          </p>
          <ul className="text-white-50">
            <li>Pulls open and in-progress incidents from <strong className="text-white">ServiceNow</strong> and triages them by severity.</li>
            <li>Aggregates cloud payment run statuses from <strong className="text-white">Box</strong> via OAuth2-authenticated API calls.</li>
            <li>Retrieves and consolidates operational reports from designated <strong className="text-white">Box folders</strong>.</li>
            <li>Uses an <strong className="text-white">LLM</strong> to synthesize all gathered context into a coherent, human-readable handover summary.</li>
            <li>Automatically drafts and sends the handover email via <strong className="text-white">Outlook</strong> to the incoming shift team.</li>
          </ul>
        </div>

        {/* Why Agentic AI */}
        <div className="mb-5">
          <h4 className="mb-3">Why Agentic AI</h4>
          <p className="text-white-50">
            Traditional automation scripts handle predefined, linear workflows but fail when data
            sources are heterogeneous, APIs require dynamic authentication, or the output requires
            contextual reasoning. Agentic AI was the right fit here because:
          </p>
          <ul className="text-white-50">
            <li>The agent needs to decide which tools to invoke, in what order, and how to handle partial failures gracefully.</li>
            <li>Synthesising incident data, payment statuses, and operational reports into a coherent narrative requires LLM-level understanding — not template filling.</li>
            <li>IBM Watsonx Orchestrate provided a robust orchestration layer for managing tool invocations, state, and multi-step reasoning within enterprise security boundaries.</li>
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-5">
          <h4 className="mb-3">Architecture Overview</h4>
          <p className="text-white-50 mb-3">
            The system follows an <strong className="text-white">Agentic Tool-Use</strong> architecture orchestrated by
            IBM Watsonx Orchestrate. Each external system is exposed as a callable tool (FastAPI endpoint),
            and the orchestrator agent decides autonomously which tools to invoke based on the handover workflow.
          </p>
          <div className="row g-3">
            {[
              { step: '1', label: 'Trigger', desc: 'Shift handover request received by the Watsonx Orchestrate agent.' },
              { step: '2', label: 'Incident Triage', desc: 'Agent calls ServiceNow API tool to fetch open incidents, categorised by priority and status.' },
              { step: '3', label: 'Payment Status', desc: 'Agent calls Box OAuth2 tool to retrieve cloud payment run statuses from designated files.' },
              { step: '4', label: 'Operational Reports', desc: 'Agent fetches latest operational reports from Box folder via authenticated API tool.' },
              { step: '5', label: 'LLM Synthesis', desc: 'Watsonx LLM synthesises all retrieved data into a structured, human-readable handover summary.' },
              { step: '6', label: 'Email Dispatch', desc: 'Agent calls Outlook tool to draft and send the finalised handover email to the incoming shift team.' },
            ].map(({ step, label, desc }) => (
              <div className="col-md-6 col-lg-4" key={step}>
                <div className="p-3 h-100 rounded" style={{ background: 'rgba(11,193,196,0.05)', border: '1px solid rgba(11,193,196,0.25)' }}>
                  <div className="d-flex align-items-center mb-2">
                    <span className="rounded-circle d-flex align-items-center justify-content-center me-2 fw-bold"
                      style={{ width: 28, height: 28, background: 'rgba(11,193,196,0.2)', color: '#0BC1C4', fontSize: '0.8rem', flexShrink: 0 }}>
                      {step}
                    </span>
                    <strong className="text-white">{label}</strong>
                  </div>
                  <p className="text-white-50 small mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-5">
          <h4 className="mb-3">Key Engineering Highlights</h4>

          <strong className="text-white-50">Agentic Orchestration</strong>
          <ul className="text-white-50">
            <li>Designed the agent's tool-use strategy in IBM Watsonx Orchestrate, defining tool schemas, invocation sequences, and fallback behaviour.</li>
            <li>Implemented dynamic context passing between tool calls so downstream tools receive enriched inputs from prior steps.</li>
          </ul>

          <strong className="text-white-50">Backend Tool APIs (Python / FastAPI)</strong>
          <ul className="text-white-50">
            <li>Built FastAPI microservices for each integration: ServiceNow incident retrieval, Box OAuth2 file access, and Outlook email dispatch.</li>
            <li>Implemented Box OAuth2 token management with automatic refresh to maintain persistent, secure access.</li>
            <li>Designed clean REST contracts so each tool is independently testable and reusable by other agents.</li>
          </ul>

          <strong className="text-white-50">LLM-Powered Report Generation</strong>
          <ul className="text-white-50">
            <li>Engineered prompt templates that structure all aggregated context (incidents, statuses, reports) for consistent, high-quality LLM output.</li>
            <li>Ensured the generated summary is factual and grounded — the LLM only synthesises what the tools returned, preventing hallucination.</li>
          </ul>

          <strong className="text-white-50">End-to-End Integration</strong>
          <ul className="text-white-50">
            <li>Integrated ServiceNow (incident management), Box (file storage), and Outlook (email) within a single agentic workflow — spanning three enterprise platforms with zero manual handoffs.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-3">Tech Stack</h4>
          <ul className="text-white-50">
            <li><strong>Agentic Orchestration:</strong> IBM Watsonx Orchestrate</li>
            <li><strong>LLMs:</strong> IBM Watsonx.ai</li>
            <li><strong>Backend / APIs:</strong> Python, FastAPI</li>
            <li><strong>Integrations:</strong> ServiceNow REST API, Box OAuth2 API, Microsoft Outlook</li>
            <li><strong>Auth:</strong> Box OAuth2 with token refresh</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <h4 className="mb-3">Impact</h4>
          <ul className="text-white-50">
            <li>Reduced shift handover preparation time from <strong className="text-white">15–30 minutes to under 1 minute</strong> — a 97%+ reduction.</li>
            <li>Saves <strong className="text-white">250+ engineering hours annually</strong> across global operations.</li>
            <li>Eliminated manual data aggregation across ServiceNow, Box, and email — removing a key source of human error.</li>
            <li>Improved reporting consistency and operational visibility for incoming shift teams.</li>
            <li>Demonstrated a reusable agentic pattern applicable to other enterprise automation workflows.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
