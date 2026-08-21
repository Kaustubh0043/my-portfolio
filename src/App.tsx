import { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications, { Certification } from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Simple scroll tracker to highlight navbar links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 160; // Offset for better transition timing

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Dynamic Network Canvas Background */}
      <CanvasBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Content Sections */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications onSelectCert={setActiveCert} />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-content">
            <span className="footer-text">
              © {new Date().getFullYear()} Kaustubh Jadhav. All rights reserved.
            </span>
            <button 
              className="back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to Top"
              id="back-to-top-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </footer>
      </div>

      {/* Lightbox Modal (rendered at root to prevent stacking context limitations from .section) */}
      {activeCert && (
        <div className="lightbox" onClick={() => setActiveCert(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <span className="lightbox-title">{activeCert.title}</span>
              <button 
                className="lightbox-close" 
                onClick={() => setActiveCert(null)}
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="lightbox-body">
              {activeCert.type === 'pdf' ? (
                <iframe 
                  src={activeCert.file} 
                  className="lightbox-iframe" 
                  title={activeCert.title}
                />
              ) : (
                <img 
                  src={activeCert.file} 
                  alt={activeCert.title} 
                  className="lightbox-img" 
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
