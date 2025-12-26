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
        'Large Language Models (Watsonx.ai, Mistral, Ollama, OpenAI, Google Gemini))',
        'Prompt Engineering & Prompt Templates',
        'Retrieval Augmented Generation (RAG)',
        'Agentic AI Systems',
        'LangChain',
        'Vector Databases',
        'Embeddings, Chunking & Metadata Design'
      ]
    },
    {
      title: 'AI & ML Foundations',
      skills: [
        'Machine Learning (Fundamentals)',
        'Natural Language Processing (NLP)',
        'Deep Learning (Fundamentals)',
        'AI Engineering (LLMs in production systems)'
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
      title: 'Cloud, DevOps & MLOps',
      skills: [
        'IBM Cloud',
        'Docker',
        'CI/CD (Jenkins, Tekton)',
        'OpenShift',
        'Automation & Monitoring (Shell Scripting)'
      ]
    },
    {
      title: 'Security & Reliability',
      skills: [
        'Secrets Management',
        'Security Scanning (Twistlock, Mend)',
        'GitHub Access Management & Branch Protection',
        'Production-grade AI System Practices'
      ]
    },
    {
      title: 'Tools & Developer Workflow',
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
        'AI Project Leadership & Ownership'
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
