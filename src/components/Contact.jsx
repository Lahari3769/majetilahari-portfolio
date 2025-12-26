/*export default function Contact() {
        return (
                <section
                        id="Contact"
                        className="section pt-5 bg-dark text-light"
                        data-aos="fade-up"
                        style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                minHeight: '100vh',
                        }}
                >
                       
                        <div        >
                        <h2
                                style={{
                                        color: '0 0 12px rgba(0, 255, 255, 0.3)',
                                        fontWeight: 'bold',
                                        marginBottom: '0rem',
                                       
                                        textAlign: 'center',
                                }}
                        >
                                <i className="bi bi-person-lines-fill me-2 text-info"></i>Contact Me
                        </h2>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <hr
                style={{
                        border: 'none',
                        height: '3px',
                        backgroundColor: '#00ffff',
                        width: '100px', // adjust width to center nicely
                        boxShadow: '0 0 10px #00ffff',
                        marginBottom: '40px',
                }}
        />
</div>
       
                       
                        </div>
                       
       
                       
                        <div
                                style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        gap: '2rem',
                                        maxWidth: '900px',
                                        width: '100%',
                                        marginBottom: '3rem',
                                        textAlign: 'center',
                                       
                                       
                                }}
                        >
                               
                                <div
       
                                className="contact-card "
                                data-aos="flip-left"
                                data-aos-delay="100"
               
                                                style={{
                                                                padding: '1rem',
                                                                borderRadius: '50px',
                                                                border:"0px solid #ffffff",
                                                                boxShadow:"0 2px 4px #00ffff",
                                                                backgroundColor: 'transparent',
                                                }}
                                               
                                                >
                                                <p className="fs-5 text-white-50 mb-2">📧 <strong>Email:</strong></p>
                                                <a
                                                                href="mailto:jhkhithu666@gmail.com"
                                                                className="text-info        fw-bold text-decoration-none "
                                                >
                                                                jhkhithu666@gmail.com
                                                </a>
                                                </div>
       
                                <div
                                        style={{
                                                padding: '1rem',
                                                borderRadius: '50px',
                                                border:"0px solid #ffffff",
                                                boxShadow:"0 2px 4px #00ffff",
                                                backgroundColor: 'transparent',
                                        }}
                                        className="contact-card"
        data-aos="flip-left"
        data-aos-delay="100"
                                >
                                        <p className="fs-5 text-white-50 mb-2">🔗 <strong>LinkedIn:</strong></p>
                                        <a
                                                href="https://linkedin.com/in/yourprofile"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-info fw-bold text-decoration-none "
                                        >
                                                linkedin.com/in/yourprofile
                                        </a>
                                </div>
       
                               
                                <div
                                        style={{
                                                padding: '1rem',
                                                borderRadius: '70px',
                                                boxShadow:"0 2px 4px #00ffff",
                                                border:"0px solid #000000",
                                                backgroundColor: 'transparent',
                                        }}
                                        className="contact-card "
        data-aos="flip-left"
        data-aos-delay="100"
                                       
                                >
                                        <p className="fs-5 text-white-50 mb-2">💻 <strong>GitHub:</strong></p>
                                        <a
                                                href="https://github.com/yourprofile"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-info fw-bold text-decoration-none "
                                        >
                                                github.com/yourprofile
                                        </a>
                                </div>
                        </div>
       
                       
                        <div className="mt-4 text-center">
                                <a
                                        href="/myresume.pdf"
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
        */



export default function Contact() {
  return (
    <section
      id="Contact"
      className="section pt-5 bg-dark text-light"
      data-aos="fade-up"
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
      <div
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
          href="/myresume.pdf"
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

      {/* Extra Responsive Styling 


<style jsx>{`
        @media (max-width: 768px) {
          .section {
            padding: 40px 15px;
          }
          .contact-card {
            border-radius: 30px;
          }
          h2 {
            font-size: 1.5rem;
          }
          .fs-5 {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.3rem;
          }
          .contact-card {
            padding: 0.8rem;
          }
          .btn {
            width: 100%;
            border-radius: 15px;
          }
        }
      `}</style>*/}

      
    </section>
  );
}
