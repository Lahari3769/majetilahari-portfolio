import profilePic from '../assets/devimg3.png';

export default function About() {
  return (
    <section
      id="AboutMe"
      className="section"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profilePic}
              alt="Majeti Lahari"
              className="profile-img img-fluid glow-aqua"
              style={{ border: '2px solid #0BC1C4' }}
              width="300"
              height="300"
            />
          </div>

          {/* Text */}
          <div className="col-md-8" data-aos="fade-up">
            <h2>
              About Me
            </h2>

            <p className="fs-5 text-white-50">
               I’m a software engineer with hands-on experience building
              <strong> backend-heavy, production-ready Generative AI systems </strong>
               in enterprise environments.
            </p>

            <p className="fs-5 text-white-50">
              My work spans:
              <ui>
                <li><strong>Conversational AI & Chatbots: </strong>Virtual agents, Q&A bots, multi-turn flows, Dialogflow-equivalent designs.</li>
                <li><strong>Generative AI & LLM Systems: </strong>LLM orchestration, Agentic AI, prompt engineering, grounded responses.</li>
                <li><strong>RAG & Knowledge Retrieval: </strong>Vector databases (Milvus, ChromaDB), embeddings, metadata design.</li>
                <li><strong>Cloud & DevOps: </strong>IBM Cloud, OpenShift, Docker, CI/CD pipelines, security and monitoring.</li>
                <li><strong>Applied AI in Operations: </strong>AI-assisted incident resolution, operational intelligence, developer support bots.</li>
              </ui> 
            </p>

            <p className="fs-5 text-white-50 mb-0">
              I enjoy solving problems at the <strong>intersection of AI, system design, and productivity</strong>, delivering solutions that
              are <strong>scalable, measurable, and production-ready.</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
