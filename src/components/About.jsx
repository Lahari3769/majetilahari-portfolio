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
               Software Developer with 3+ years of experience at IBM, building and deploying production-grade end-to-end
               web applications, GenAI, RAG, and AI-driven systems on cloud infrastructure.
            </p>

            <p className="fs-5 text-white-50">
              Proven ability to automate large-
              scale workflows, debug complex production issues, perform incident resolution and root cause analysis, develop
              proof-of-concept (POC) solutions, improve system reliability, and deliver measurable business impact.
            </p>

            <p className="fs-5 text-white-50 mb-0">
              Experienced in leading teams, mentoring engineers, and collaborating across product, design and infrastructure functions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
