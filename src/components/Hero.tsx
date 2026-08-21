import { useEffect, useState } from 'react';

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'Java & MERN Stack Enthusiast',
    'B.Tech CSE Student',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timer: number;

    const tick = () => {
      if (!isDeleting) {
        setDisplayText((prev) => activeRole.substring(0, prev.length + 1));
        
        if (displayText === activeRole) {
          // Pause at the end of typing
          timer = window.setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText((prev) => activeRole.substring(0, prev.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      // Faster deleting than typing
      const delta = isDeleting ? 30 : 80;
      timer = window.setTimeout(tick, delta);
    };

    timer = window.setTimeout(tick, 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="bg-glow-orange" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          <span className="hero-subtitle">Hello World, my name is</span>
          <h1 className="hero-title">Kaustubh Jadhav</h1>
          <div className="hero-tagline">
            I am a <span className="gradient-text">{displayText}</span>
            <span style={{ animation: 'fadeIn 1s infinite', color: 'var(--color-primary)' }}>|</span>
          </div>
          <p className="hero-desc">
            Motivated B.Tech Computer Science student in my final year with hands-on experience building production-grade web applications. Deeply interested in scalable backends, microservices, and elegant responsive user interfaces.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'projects')}
              id="cta-explore-projects"
            >
              Explore Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <a 
              href="/Kaustubh_Jadhav_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="cta-view-resume"
            >
              See Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href="https://github.com/Kaustubh0043" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub Profile"
              id="hero-github-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/kaustubh-jadhav-6a2216248/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn Profile"
              id="hero-linkedin-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:kaustubhjadhav0043@gmail.com" 
              className="social-icon"
              aria-label="Email Address"
              id="hero-email-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
