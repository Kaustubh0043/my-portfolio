export interface Certification {
  title: string;
  org: string;
  date?: string;
  file: string;
  type: 'image' | 'pdf';
}

interface CertificationsProps {
  onSelectCert: (cert: Certification) => void;
}

export default function Certifications({ onSelectCert }: CertificationsProps) {
  const certifications: Certification[] = [
    {
      title: 'ServiceNow Administration Fundamentals (CSA Prep)',
      org: 'ServiceNow University & SmartBridge',
      date: 'Jul 2026',
      file: '/certifications/Service Now.pdf',
      type: 'pdf',
    },
    {
      title: 'Computer Vision with Azure',
      org: 'Microsoft',
      date: 'May 2026',
      file: '/certifications/azure.jpg',
      type: 'image',
    },
    {
      title: 'Java Programming Fundamentals',
      org: 'Infosys Springboard',
      date: 'May 2026',
      file: '/certifications/cert1.jpg',
      type: 'image',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      org: 'IBM',
      date: 'Apr 2026',
      file: '/certifications/cert2.jpg',
      type: 'image',
    },
    {
      title: 'Software Engineering Job Simulation',
      org: 'JPMorgan Chase',
      date: 'Mar 2026',
      file: '/certifications/cert3.jpg',
      type: 'image',
    },
    {
      title: 'Getting Started with AI',
      org: 'NVIDIA',
      date: 'Feb 2026',
      file: '/certifications/cert4.jpg',
      type: 'image',
    },
    {
      title: 'Python for Data Science',
      org: 'IBM Developer',
      date: 'Jan 2026',
      file: '/certifications/cert5.jpg',
      type: 'image',
    },
    {
      title: 'Cloud Core Services & Architectures',
      org: 'Azure Fundamentals',
      date: 'Dec 2025',
      file: '/certifications/cert6.jpg',
      type: 'image',
    },
    {
      title: 'Object Oriented Programming in Java',
      org: 'Anudip Foundation',
      date: 'Oct 2025',
      file: '/certifications/cert7.jpg',
      type: 'image',
    },
    {
      title: 'Web Design Specialization',
      org: 'Sumago Infotech',
      date: 'Aug 2022',
      file: '/certifications/cert8.jpg',
      type: 'image',
    },
  ];

  return (
    <section id="certifications" className="section" style={{ background: '#050914' }}>
      <div className="bg-glow-orange" style={{ bottom: '20%', left: '-100px' }} />
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="glass-panel cert-card"
              onClick={() => onSelectCert(cert)}
              id={`cert-card-${idx}`}
            >
              <div className="cert-thumb">
                {cert.type === 'pdf' ? (
                  <div className="pdf-thumbnail-placeholder">
                    <div className="pdf-badge">ServiceNow</div>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--color-primary)' }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span className="pdf-text">ADMINISTRATOR</span>
                    <span className="pdf-subtext">Click to view document</span>
                  </div>
                ) : (
                  <img src={cert.file} alt={cert.title} loading="lazy" />
                )}
                <div className="cert-overlay">
                  <span className="cert-overlay-btn">View Credential</span>
                </div>
              </div>

              <div className="cert-details">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-org">{cert.org}</div>
                {cert.date && <div className="cert-date">{cert.date}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
