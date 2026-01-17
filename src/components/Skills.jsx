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
      title: 'Generative AI & LLMs',
      skills: [
        'Large Language Models (Watsonx.ai, Hugging Face, OpenAI, Google Gemini)',
        'Prompt Engineering & Response Grounding',
        'Retrieval-Augmented Generation (RAG)',
        'Agentic AI Systems', 
        'LangChain', 
        'Multi-Agent Orchestration',
        'Virtual Agents, Chatbots, Q&A Systems',
        'Embeddings, Chunking & Metadata Design'
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
      title: 'Languages & Data Engineering',
      skills: [
        'Python',
        'HTML',
        'CSS',
        'Typescript',
        'PHP (Laravel)',
        'Shell Scripting',
        'SQL - IBM Db2',
        'Structured & Unstructured Data Processing'
      ]
    },
    {
      title: 'Cloud, DevOps & AI Infrastructure',
      skills: [
        'IBM Cloud',
        'Cloud Object Storage',
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
        'Flask',
        'Streamlit',
        'Angular',
        'Git & GitHub',
        'Docker',
        'Postman',
        'VS Code',
        'Jupyter Notebooks',
        'Linux'
      ]
    },
    {
      title: 'Professional Skills',
      skills: [
        'Agile Delivery',
        'Technical Leadership', 
        'Mentorship',
        'Cross-functional Collaboration',
        'Executive Communication',
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
