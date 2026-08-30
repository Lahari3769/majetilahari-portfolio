'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/mainimg.jpg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Home" className="section" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">

          {/* Text Content */}
          <div
            className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0"
            data-aos="zoom-in"
          >
            <h5 className="text-light">Hi, I’m</h5>

            <h2 className="fw-bold text-light">
              Majeti Lahari
            </h2>

            <h5 className="text-light mt-2">
              GenAI & Full Stack Software Developer
              <span style={{ color: '#0BC1C4' }}> • Cloud Systems</span>
            </h5>

            <p className="text-white mt-4 fs-5">
              I build and deploy <strong>production-grade GenAI, RAG, Agentic AI and full stack applications</strong> — from
              LLM-powered pipelines and Agentic workflows to cloud deployments with CI/CD automation. My focus is on reliable, scalable,
              and impactful AI solutions that improve operational efficiency and developer productivity in enterprise environments.
            </p>

            {/* Social Icons */}
            <div className="social-icons mt-3 d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://www.linkedin.com/in/majetilahari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Lahari3769"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Buttons (Desktop) */}
            <div className="mt-4 d-none d-md-flex gap-3 flex-wrap">
              <button
                onClick={() =>
                  document.getElementById('AboutMe')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn rounded-pill px-4 py-2 glow-button"
                style={{ fontWeight: 'bold' }}
              >
                About Me
              </button>

              <a
                href="/Resume-Lahari.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 border border-info text-info zoom-click"
                style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="col-12 col-md-6 text-center" data-aos="zoom-in">
            <img
              src={profilePic}
              alt="Majeti Lahari"
              className="img-fluid hero-img glow-aqua1"
              width="300"
              height="300"
              style={{ border: '1px solid #000000' }}
            />

            {/* Buttons (Mobile) */}
            <div className="mt-4 d-flex d-md-none gap-3 flex-wrap justify-content-center">
              <button
                onClick={() =>
                  document.getElementById('AboutMe')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn rounded-pill px-4 py-2 glow-button"
                style={{ fontWeight: 'bold' }}
              >
                About Me
              </button>

              <a
                href="/Resume-Lahari.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 border border-info text-info zoom-click"
                style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
              >
                View Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
