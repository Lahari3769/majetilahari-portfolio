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
      title: 'Backend & Frameworks',
      skills: [
        'Python',
        'Flask',
        'LangChain',
        'FastAPI',
        'PHP (Laravel)',
        'RESTful APIs'
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'IBM Cloud',
        'OpenShift',
        'Docker',
        'Version Control (Git)',
        'Secrets Manager',
        'CI/CD Pipelines (Jenkins, Tekton, Cirrus)',
        'Cloud Object Storage',
        'Shell Scripting'
      ]
    },
    {
      title: 'Databases & Vector Stores',
      skills: [
        'IBM Db2',
        'Milvus',
        'ChromaDB',
        'SQL'
      ]
    },
    {
      title: 'Testing',
      skills: [
        'Unit Testing',
        'Integration Testing',
        'Test Automation'
      ]
    },
    {
      title: 'Core CS',
      skills: [
        'Object-Oriented Programming',
        'Data Structures & Algorithms'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'HTML5',
        'CSS3',
        'Angular',
        'React',
        'TypeScript',
        'Streamlit',
        'Responsive UI Design'
      ]
    },
    {
      title: 'AI/ML Integration',
      skills: [
        'Large Language Models (Watsonx.ai, Hugging Face, OpenAI, Google Gemini)',
        'Retrieval-Augmented Generation (RAG)',
        'Agentic AI',         
        'Multi-Agent Orchestration',
        'Virtual Agents, Chatbots, Q&A Systems',
        'Prompt Engineering',
        'LangChain', 
        'Embeddings, Chunking & Metadata Design',
        'Natural Language Processing (NLP)', 
        'Machine Learning',
        'Deep Learning',
        ]
    },
    {
      title: 'Security & Quality',
      skills: [
        'Mend',
        'Twistlock',
        'ITSS-compliant Pipelines',
        'Security Scanning',
        'Performance Optimization'
      ]
    },
    {
      title: 'Professional Skills',
      skills: [
        'Agile Delivery',
        'Technical Leadership', 
        'Mentorship',
        'Application Monitoring and Production Support', 
        'Root Cause Analysis', 
        'Incident Resolution', 
        'Debugging', 
        'Requirement Analysis', 
        'POC Development',
        'Cross-functional Collaboration',
        'Executive Communication'
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
