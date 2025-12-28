export default function Contact() {
  return (
    <section
      id="Contact"
      className="section pt-5 bg-dark text-light"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Heading */}
      <div className="text-center">
        <h2
          style={{
            color: '#ffffff',
            fontWeight: 'bold',
            marginBottom: '0rem',
            textAlign: 'center',
          }}
        >
          <i className="bi bi-person-lines-fill me-2 text-info"></i>
          Contact Me
        </h2>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <hr
            style={{
              border: 'none',
              height: '3px',
              backgroundColor: '#ffffff',
              width: '100px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
      </div>

      {/* Contact Cards */}
      <div data-aos="fade-up"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          width: '100%',
          marginBottom: '3rem',
          textAlign: 'center',
        }}
      >
        {/* Email */}
        <div
          className="contact-card"
          data-aos="flip-left"
          data-aos-delay="50"
          style={{
            padding: '1rem',
            borderRadius: '50px',
            boxShadow: '0 2px 5px #00ffff',
            backgroundColor: 'transparent',
          }}
        >
          <p className="fs-5 text-white-50 mb-2">
            📧 <strong>Email:</strong>
          </p>
          <a
            href="mailto:majetilahari@gmail.com"
            className="text-info fw-bold text-decoration-none"
          >
            majetilahari@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div
          className="contact-card"
          data-aos="flip-left"
          data-aos-delay="50"
          style={{
            padding: '1rem',
            borderRadius: '50px',
            boxShadow: '0 2px 5px #00ffff',
            backgroundColor: 'transparent',
          }}
        >
          <p className="fs-5 text-white-50 mb-2">
            🔗 <strong>LinkedIn:</strong>
          </p>
          <a
            href="https://www.linkedin.com/in/majetilahari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info fw-bold text-decoration-none"
          >
            linkedin.com/in/majetilahari
          </a>
        </div>

        {/* GitHub */}
        <div 
          className="contact-card"
          data-aos="flip-left"
          data-aos-delay="50"
          style={{
            padding: '1rem',
            borderRadius: '50px',
            boxShadow: '0 2px 5px #00ffff',
            backgroundColor: 'transparent',
          }}
        >
          <p className="fs-5 text-white-50 mb-2">
            💻 <strong>GitHub:</strong>
          </p>
          <a
            href="http://github.com/Lahari3769/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info fw-bold text-decoration-none"
          >
            github.com/majetilahari
          </a>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-4  text-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-info px-4 py-2 zoom-click"
          style={{
            fontWeight: 'bold',
            color: '#ffffff',
            borderRadius: '20px',
          }}
        >
          Download Resume
        </a>
      </div>

    </section>
  );
}
