export default function About() {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
      title: 'Backend & APIs',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'REST APIs', 'JWT', 'BcryptJS'],
    },
    {
      title: 'Databases',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="5" ry="5" />
          <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
        </svg>
      ),
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      title: 'Programming Languages',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: ['Java', 'JavaScript', 'Python', 'SQL'],
    },
    {
      title: 'DevOps & Tools',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Firebase', 'Vercel', 'Netlify', 'Android Studio'],
    },
  ];

  const education = [
    {
      title: 'Bachelor of Technology — Computer Science & Engineering',
      org: 'Alard Group of Institutes (Alard University), Pune',
      date: 'Sep 2024 – 2027',
    },
    {
      title: 'Diploma in Computer Science & Engineering',
      org: 'Government Polytechnic Nandurbar, Maharashtra, India',
      date: '2021 – 2023',
    },
    {
      title: 'School (CBSE)',
      org: 'Podar International School, Nandurbar, India',
      date: 'Jun 2015 – Mar 2020',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="bg-glow-blue" />
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi there! I am a passionate final-year <strong>Computer Science and Engineering</strong> student who loves solving problems and coding robust web applications. I enjoy creating seamless interactions, secure backends, and modular architectures.
            </p>
            <p>
              I have worked with a variety of technologies ranging from React.js and Next.js in the frontend to Java Spring Boot, Node.js, and Python Django in the backend. I have a solid understanding of object-oriented design, database modelling, RESTful API structures, and multi-threaded programming.
            </p>
            
            <div className="education-timeline">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                Education Timeline
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-header">
                    <span className="edu-title">{edu.title}</span>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <div className="edu-org">{edu.org}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-wrapper">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Technical Expertise
            </h3>

            {skillCategories.map((category, idx) => (
              <div key={idx} className="glass-panel skills-category">
                <h3>
                  <span style={{ color: 'var(--color-primary)', display: 'flex' }}>{category.icon}</span>
                  {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
