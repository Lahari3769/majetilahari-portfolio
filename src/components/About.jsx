import profilePic from '../assets/devimg3.png';

export default function About() {
  return (
    <section
      id="AboutMe"
      className="section"
      data-aos="fade-up"
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
          <div className="col-md-8">
            <h2>
              About <span style={{ color: '#0BC1C4' }}>Me</span>
            </h2>

            <br />

            <h4 className="text-light">
              Software Engineer with a Generative AI & Systems focus
            </h4>

            <br />

            <p className="fs-5 text-white-50">
              I’m a software engineer with hands-on experience building
              <strong> backend-heavy, production-ready Generative AI systems </strong>
               in enterprise environments.
            </p>

            <p className="fs-5 text-white-50">
              My work spans <strong>RAG architectures, LLM orchestration, Agentic AI Systems, Vector databases,
              CI/CD pipelines, and containerized deployments</strong> on cloud platforms.
              I enjoy solving problems that sit at the intersection of
              system design, developer productivity, and applied AI.
            </p>

            <p className="fs-5 text-white-50 mb-0">
              I’m particularly interested in roles where I can build scalable systems,
              work close to infrastructure, and apply Generative AI in ways that are
              reliable, measurable, and impactful in the real world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
