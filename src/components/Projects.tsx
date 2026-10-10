export default function Projects() {
  const projects = [
    {
      title: 'PathPilot AI — AI Career Platform',
      desc: 'An all-in-one, microservice-ready AI Career Development Platform helping users optimize career readiness with LLMs and RAG.',
      tech: ['React', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Docker', 'Google Gemini API'],
      github: 'https://github.com/Kaustubh0043/vertexpath',
      demo: 'https://vertexpath.vercel.app/',
      bullets: [
        'Architected a microservice-ready career platform combining a Spring Boot + JWT core, a FastAPI/LangChain AI microservice, and a React/Vite frontend, orchestrated with Docker Compose.',
        'Built an ATS resume analyzer, job-description matching engine, and a RAG-based document Q&A system using ChromaDB and Google Gemini for context-grounded responses.',
        'Developed a gamified skill-tracking dashboard with streak tracking, AI-generated syllabus roadmaps, and a strict-grading interview simulator.',
      ],
    },
    {
      title: 'Lake N Trails — Exotic Glamping Portfolio',
      desc: 'An premium, interactive booking and media-rich glamping showcase website.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
      github: 'https://github.com/Kaustubh0043/lakentrails',
      demo: 'https://lakentrails.in/',
      bullets: [
        'Engineered an interactive booking wizard using client-side React hooks to dynamically calculate tariffs, weekday/weekend rates, child discounts, and add-ons.',
        'Implemented a dark/light dual-theme architecture with local storage persistence and server-side preloader classes to avoid hydration flashes.',
        'Curated and optimized 120+ media assets, including drone footage, and built a responsive fullscreen lightbox with z-index stacking.',
      ],
    },
    {
      title: 'College Discovery Platform',
      desc: 'A college search and comparison engine featuring JEE rank prediction and discussion forums.',
      tech: ['Next.js 14', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Tailwind CSS v4'],
      github: 'https://github.com/Kaustubh0043/college-platform',
      demo: 'https://college-discovery.netlify.app/',
      bullets: [
        'Architected a production-grade platform featuring 30+ elite Indian institutions with real-time search, filtering, and a side-by-side college comparison engine.',
        'Built a JWT-authenticated Q&A community forum and AI-backed college predictor matching student JEE ranks against cutoff data using serverless PostgreSQL.',
        'Deployed frontend on Vercel and backend on Render with secure BcryptJS encryption and environment-driven configurations.',
      ],
    },
    {
      title: 'MindEase — Student Wellness Ecosystem',
      desc: 'An institutional mental wellness platform featuring mood tracking, analytics, and breathing audio guides.',
      tech: ['React.js', 'Spring Boot', 'Web Audio API', 'Firebase'],
      github: 'https://github.com/Kaustubh0043/mindease-wellness',
      demo: 'https://mindease-wellness.vercel.app/login',
      bullets: [
        'Built a full stack wellness platform with role-based access for students and counselors, mood tracking, and campus-wide monitoring dashboards.',
        'Implemented OTP-based 6-digit authentication with decentralized encryption; integrated Web Audio API for real-time procedural audio breathing guidance.',
        'Designed a responsive, accessible UI with glassmorphism styling; prioritized component rendering speed and layout consistency.',
      ],
    },
    {
      title: 'Lumina Audit — Stop Overpaying for AI',
      desc: 'An automated cost optimization platform analyzing Cursor, Claude, and OpenAI expenditures for startups.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Kaustubh0043/lumina-audit',
      demo: 'https://lumina-audit.vercel.app/',
      bullets: [
        'Engineered an instant cost auditor scanning tool configurations to identify average savings of 30% on active seed-stage startup AI subscriptions.',
        'Created a dark-mode optimized landing dashboard with glassmorphism panels, interactive zap icon features, and custom scroll effects.',
        'Designed detailed system architecture specs and pricing mappings to enable high-spend developer optimizations.',
      ],
    },
    {
      title: 'Smart Appointment Booking System',
      desc: 'A complete scheduling system for managing users, service providers, and available booking slots.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      github: 'https://github.com/Kaustubh0043/Smart-Appointment-Booking-System',
      demo: '', // No demo yet
      bullets: [
        'Architected a scheduling system using the MERN stack with MongoDB collections managing users, service providers, and slots with booking validation.',
        'Implemented user authentication, session management, and server-side form validation ensuring tamper-proof reservation workflows.',
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="bg-glow-blue" style={{ bottom: '15%', right: '-150px' }} />
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel project-card">
              <div className="project-card-header">
                <div className="project-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-icon"
                    aria-label="GitHub Repository"
                    id={`project-github-${idx}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-icon"
                      aria-label="Live Demo"
                      id={`project-demo-${idx}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <ul className="project-bullets-list">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
