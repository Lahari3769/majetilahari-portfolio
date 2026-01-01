'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const skillSections = [
    {
      title: 'Conversational AI & Generative AI',
      skills: [
        'Large Language Models (Watsonx.ai, Mistral, Llama, Ollama, Google Gemini)',
        'Prompt Engineering & Response Grounding',
        'Retrieval-Augmented Generation (RAG)',
        'Agentic AI Systems', 
        'LangChain', 
        'Multi-Agent Orchestration',
        'Virtual Agents, Chatbots, Q&A Systems'
      ]
    },
    {
      title: 'AI & ML Foundations',
      skills: [
        'Natural Language Processing (NLP)', 
        'Machine Learning',
        'Deep Learning',
        'LLMs in Production Systems', 
        'RAG Pipelines', 
        'Semantic Retrieval'
      ]
    },
    {
      title: 'Backend & Data Engineering',
      skills: [
        'Python',
        'Flask',
        'IBM Db2',
        'Structured & Unstructured Data Processing'
      ]
    },
    {
      title: 'Cloud, DevOps & AI Infrastructure',
      skills: [
        'IBM Cloud',
        'Docker',
        'CI/CD Pipelines (Jenkins, Tekton)',
        'Secrets Management',
        'OpenShift',
        'Security Scanning (Twistlock, Mend)',
        'Automation & Monitoring (Shell Scripting)',
        'Production-grade AI System Practices'
      ]
    },
    {
      title: 'Developer Tools & Workflow',
      skills: [
        'Git & GitHub',
        'Postman',
        'VS Code',
        'Jupyter Notebooks',
        'Linux'
      ]
    },
    {
      title: 'Ways of Working',
      skills: [
        'Agile Development',
        'Project Leadership', 
        'AI Solution Ownership'
      ]
    }
  ];

  return (
    <section
      id="Skills&Cert"
      className="section bg-dark text-light"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>

        <div className="row gy-4">
          {skillSections.map((section, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={section.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-card h-100">
                <h5 className="mb-3 text-info">{section.title}</h5>
                <ul className="skill-list">
                  {section.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
