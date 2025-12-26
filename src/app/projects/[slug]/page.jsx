'use client';

import { useParams } from 'next/navigation';
import { projectsData } from '@/data/projectsData';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return <div className="section">Project not found</div>;
  }

  return (
    <section className="section">
      <div className="container">

        <h2 className="mb-4">{project.title}</h2>

        <Section title="Problem Statement">
          {project.problem}
        </Section>

        <Section title="Solution Overview">
          {project.solution}
        </Section>

        <Section title="Why Generative AI">
          {project.whyGenAI}
        </Section>

        <Section title="Architecture Overview">
          <ul>
            {project.architecture.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Key Engineering Highlights">
          <ul>
            {project.highlights.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Tech Stack">
          <p>{project.techStack.join(', ')}</p>
        </Section>

        <Section title="Impact & Learnings">
          <p>{project.impact}</p>
          <ul>
            {project.learnings.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Planned Enhancements">
          <ul>
            {project.enhancements.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Why This Is a Great Project">
          {project.whyGreatFirstProject}
        </Section>

      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5">
      <h4 className="text-info mb-2">{title}</h4>
      <div className="text-white-50">{children}</div>
    </div>
  );
}
