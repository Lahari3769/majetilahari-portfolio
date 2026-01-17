import { scroller } from 'react-scroll';
import '../GlobalStyles.css';

export default function Navbar() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section.replace(/\s/g, ''), {
      duration: 500,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">

        {/* Brand */}
        <button
          className="navbar-brand btn btn-link text-decoration-none text-start p-0"
          onClick={() => scrollToSection('Home')}
        >
          <div className="d-flex flex-column">
            <span className="fw-bold text-white">
              Majeti Lahari
            </span>
            <small
              style={{
                color: '#0BC1C4',
                fontSize: '0.8rem',
                lineHeight: '1.1'
              }}
            >
             Software Developer • Generative AI & Cloud Systems
            </small>
          </div>
        </button>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSections"
          aria-controls="navbarSections"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarSections">
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { label: 'Home', id: 'Home' },
              { label: 'About', id: 'AboutMe' },
              { label: 'Skills', id: 'Skills&Cert' },
              { label: 'Projects', id: 'Projects' },
              { label: 'Experience', id: 'Experience' },
              { label: 'Contact', id: 'Contact' },
            ].map(({ label, id }) => (
              <li className="nav-item" key={id}>
                <button
                  className="nav-button"
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}
