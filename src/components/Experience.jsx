import React from 'react';
import { FaBriefcase, FaRobot, FaCode, FaServer } from 'react-icons/fa';

const Experience = () => {
  const certificates = [
    { title: '1st Place & Judges’ Award - IBM Developers Jumpstart (Multi-Agent LLM System)'},
    { title: '2nd Place - 1Q25 Client Advocacy Awards (Sales Plan Automation)'},
    { title: 'Certified Machine Learning Intern | Pantechelearning'},
    { title: 'Machine Learning-Based Housing Price Prediction System'},
    { title: 'Named Entity Recognition using Bidirectional LSTM'},
  ];

  return (
    <section id="Experience" className="section bg-dark text-light">
      <div className="container">
        
        <h2 className="text-center mb-5">Experience - IBM </h2>

        <div className="text-center mb-4">
          <p className="text-white-50">Building production systems and AI solutions at scale</p>
          <p className="text-white-50">January 2023 - Present | 3+ Years</p>
        </div>

        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-md-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 p-4 rounded" 
                 style={{ 
                   background: 'rgba(11, 193, 196, 0.05)', 
                   border: '1px solid rgba(11, 193, 196, 0.3)' 
                 }}>
              <div className="text-center">
                <FaCode className="mb-2" style={{ fontSize: '2rem', color: '#0BC1C4' }} />
                <div className="fw-bold text-white">Software Developer</div>
                <small className="text-white-50">Jan 2023 - Apr 2025</small>
              </div>
              <div className="text-white-50 d-none d-md-block" style={{ fontSize: '1.5rem' }}>→</div>
              <div className="text-center">
                <FaServer className="mb-2" style={{ fontSize: '2rem', color: '#0BC1C4' }} />
                <div className="fw-bold text-white">Software Developer (DevOps)</div>
                <small className="text-white-50">Apr 2025 - Present</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-md-10">
            <div className="p-4 rounded" 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(15, 103, 110, 0.15), rgba(11, 193, 196, 0.15))',
                   border: '2px solid #0BC1C4',
                   boxShadow: '0 0 20px rgba(11, 193, 196, 0.3)'
                 }}>
              <div className="d-flex align-items-center mb-3">
                <FaRobot style={{ fontSize: '2rem', color: '#0BC1C4', marginRight: '15px' }} />
                <div>
                  <h4 className="fw-bold text-white mb-1">Generative AI Engineering</h4>
                  <p className="text-white-50 mb-0 small">Continuous parallel track throughout tenure (2023-Present)</p>
                </div>
              </div>
              <p className="text-white mb-3">
                Built and deployed 5+ production-grade GenAI systems integrating LLMs, RAG, Vector databases, and Agentic workflows into Enterprise Infrastructure — serving internal teams and supporting operational workflows.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Watsonx.ai LLMs
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Prompt Engineering
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  RAG Pipelines
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Agentic AI Systems
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Vector Databases
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Langchain
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Flask APIs
                </span>
                <span className="badge" style={{ background: 'rgba(11, 193, 196, 0.2)', color: '#0BC1C4', border: '1px solid #0BC1C4' }}>
                  Production Deployment
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4" data-aos="fade-up">
          <div className="col-lg-4">
            <div className="h-100 p-4 rounded transition" 
                 style={{ 
                   background: 'rgba(255, 255, 255, 0.03)',
                   border: '1px solid rgba(11, 193, 196, 0.2)',
                   boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.1), 3px 3px 6px rgba(11, 193, 196, 0.2)'
                 }}>
              <div className="d-flex align-items-center mb-3">
                <FaRobot className="me-2" style={{ fontSize: '1.5rem', color: '#0BC1C4' }} />
                <h5 className="fw-bold text-white mb-0">AI Development</h5>
              </div>
              <ul className="text-white-50 small" style={{ lineHeight: '1.8' }}>
                <li>Built <strong className="text-white">Project Modules Q&A Chatbot</strong> that enables developers and SREs to query GitHub-hosted project documentation using natural language, backed by vector search, CI/CD, and cloud deployment.</li>
                <li>Developed <strong className="text-white">Developer’s Genie,</strong> an agentic Generative AI system that enables conversational understanding, summarization, and comparison of evolving technical specifications and codebases across multiple versions.</li>
                <li>Created <strong className="text-white">Run Status Bot,</strong> a natural-language chatbot that dynamically queries IBM Db2 to retrieve structured run-status data and uses LLMs to generate human-readable system health summaries for operational teams.</li>
                <li>Built <strong className="text-white">SRE Support Bot</strong>, a semantic-search-enabled chatbot that ingests runbooks and operational procedures, enabling SREs to query troubleshooting knowledge conversationally and accelerate incident triage.</li>
                <li>Implemented <strong className="text-white">LLM-Based Test Case Generator,</strong> a prompt-engineered GenAI system that generates unit and integration test cases directly from feature specifications and code logic.</li>
                <li>Developed <strong className="text-white">Incident Management & Resolution Intelligence System,</strong> an AI-assisted system that leverages historical incident and resolution data to provide probable root-cause hints and resolution suggestions during live operational incidents.</li>

              </ul>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up">
            <div className="h-100 p-4 rounded transition" 
                 style={{ 
                   background: 'rgba(255, 255, 255, 0.03)',
                   border: '1px solid rgba(11, 193, 196, 0.2)',
                   boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.1), 3px 3px 6px rgba(11, 193, 196, 0.2)'
                 }}>
              <div className="d-flex align-items-center mb-3">
                <FaServer className="me-2" style={{ fontSize: '1.5rem', color: '#0BC1C4' }} />
                <h5 className="fw-bold text-white mb-0">Cloud, DevOps & AI Infrastructure</h5>
              </div>
              <ul className="text-white-50 small" style={{ lineHeight: '1.8' }}>
                <li>Maintained <strong className="text-white">CI/CD pipelines</strong> using Jenkins and Tekton for automated build, test, and deployment</li>
                <li>Integrated <strong className="text-white">security scanning</strong> (Twistlock, Mend) into pipelines to enforce container and dependency compliance</li>
                <li>Managed <strong className="text-white">GitHub admin tasks</strong>: access controls, branch protection, secrets management, vulnerability workflows</li>
                <li>Automated workflows via <strong className="text-white">shell scripting</strong>: file operations, DB backups, monitoring alerts, cron scheduling</li>
                <li>Deployed apps on <strong className="text-white">IBM Cloud</strong>: IAM policies, Object Storage, OpenShift, Secrets Manager, LogDNA integration</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up">
            <div className="h-100 p-4 rounded transition" 
                 style={{ 
                   background: 'rgba(255, 255, 255, 0.03)',
                   border: '1px solid rgba(11, 193, 196, 0.2)',
                   boxShadow: 'inset 1px 1px 0 rgba(255, 255, 255, 0.1), 3px 3px 6px rgba(11, 193, 196, 0.2)'
                 }}>
              <div className="d-flex align-items-center mb-3">
                <FaCode className="me-2" style={{ fontSize: '1.5rem', color: '#0BC1C4' }} />
                <h5 className="fw-bold text-white mb-0">Software Development</h5>
              </div>
              <ul className="text-white-50 small" style={{ lineHeight: '1.8' }}>
                <li>Developed <strong className="text-white">Full-Stack Web Applications</strong> with dynamic UIs (Angular) and backend APIs (PHP Laravel).</li>
                <li>Implemented <strong className="text-white">Database Operations and Schema Management </strong> (IBM Db2) with optimized SQL queries.</li>
                <li>Ensured <strong className="text-white">Data Consistency and Integrity</strong> across distributed systems.</li>
                <li>Automated <strong className="text-white">UI Testing and Quality Assurance </strong>, integrated in CI for regression coverage across releases.</li>
                <li>Collaborated in <strong className="text-white">Agile workflows</strong> with cross-functional teams through sprint planning, stand-ups, and code reviews.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5" data-aos="fade-up">
          <div className="col-md-10">
            <div className="text-center p-4 rounded" 
                 style={{ 
                   background: 'rgba(11, 193, 196, 0.05)',
                   border: '1px solid rgba(11, 193, 196, 0.2)'
                 }}>
              <p className="text-white mb-0">
                <strong style={{ color: '#0BC1C4' }}>Key Achievement:</strong> Successfully led & integrated Generative AI capabilities into enterprise infrastructure while maintaining core engineering responsibilities — demonstrating ability to innovate within production constraints and deliver AI solutions that solve real operational problems.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <h2 className="text-center mb-4">Awards, Certification & Early Work</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3" data-aos="fade-up">
            {certificates.map((cert, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none"
              >
                <div className="p-3 border border-info rounded">
                  {cert.title}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;