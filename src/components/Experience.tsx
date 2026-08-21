export default function Experience() {
  const experiences = [
    {
      role: 'Junior Full Stack Developer Intern',
      org: 'YuvaIntern',
      type: 'Internship',
      location: 'Remote',
      date: 'Jul 2026 – Aug 2026',
      duration: '6 weeks',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      bullets: [
        'Assisted in the design, development, and maintenance of responsive full stack web applications using front-end and back-end frameworks.',
        'Collaborated with cross-functional team members to implement clean user interfaces and deliver high-quality programmatic solutions.',
        'Participated in hands-on task management, code debugging, and developer workshops to solve real-world coding problems.',
      ],
    },
    {
      role: 'Java Programming Intern',
      org: 'Anudip Foundation',
      type: 'Internship',
      location: 'Pune District, Maharashtra, India (Hybrid)',
      date: 'Feb 2026 – May 2026',
      duration: '4 mos',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      bullets: [
        'Mastered Advanced Java concepts including OOP, exception handling, collections, multithreading, JDBC, and database connectivity across a structured 4-month program.',
        'Developed console-based and application-oriented programs, improving problem-solving, debugging, and backend development skills.',
        'Applied Java fundamentals to build structured, maintainable code aligned with industry practices and modern backend workflows.',
      ],
    },
    {
      role: 'Introduction to Programming',
      org: 'Anudip Foundation',
      type: 'Internship',
      location: 'Pune District, Maharashtra, India (On-site)',
      date: 'Mar 2025 – May 2025',
      duration: '3 mos',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      bullets: [
        'Completed a 132-hour course with an A1 grade covering programming fundamentals, logic building, and core software development concepts in Java.',
        'Gained hands-on understanding of variables, loops, conditional statements, functions, and basic OOP concepts through structured coding exercises.',
      ],
    },
    {
      role: 'Web Development Trainee',
      org: 'Sumago Infotech Pvt. Ltd.',
      type: 'Full-time',
      location: 'Nashik, Maharashtra, India (On-site)',
      date: 'Jul 2022 – Aug 2022',
      duration: '2 mos',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      bullets: [
        'Completed industrial training in frontend web development, mastering HTML, CSS, and Bootstrap to construct fully responsive and user-friendly web layouts.',
        'Gained practical experience creating static landing pages with structured grids, cross-browser compatibility, and mobile-responsive viewport setups.',
      ],
    },
  ];

  return (
    <section id="experience" className="section" style={{ background: '#050914' }}>
      <div className="bg-glow-orange" style={{ top: '25%', left: '-200px' }} />
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-bullet">
                {exp.icon}
              </div>
              <div className="glass-panel exp-card">
                <div className="exp-header">
                  <div className="exp-title-org">
                    <h3>{exp.role}</h3>
                    <div className="exp-org-meta">
                      <span>{exp.org}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-date-duration">
                    <span className="exp-date">{exp.date}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
