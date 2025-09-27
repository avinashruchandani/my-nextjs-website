'use client'

export default function Home() {
  const linkStyle = {
    display: 'block',
    width: '100%',
    maxWidth: '400px',
    padding: '16px 24px',
    marginBottom: '12px',
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    border: '2px solid transparent',
    textAlign: 'center' as const,
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Profile Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#ffffff'
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          border: '4px solid rgba(255,255,255,0.3)'
        }}>
          🚀
        </div>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          margin: '0 0 8px 0',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Alex Chen
        </h1>
        <p style={{
          fontSize: '16px',
          opacity: 0.9,
          margin: '0 0 8px 0',
          fontWeight: '400'
        }}>
          Product Management & Business Consultant
        </p>
        <p style={{
          fontSize: '14px',
          opacity: 0.8,
          margin: '0',
          fontWeight: '300'
        }}>
          AI Startup Ecosystem | Building the Future
        </p>
      </div>

      {/* Links Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px'
      }}>
        
        {/* Business & Consulting Links */}
        <a 
          href="https://calendly.com/alexchen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          📅 Book a Consultation
        </a>

        <a 
          href="https://linkedin.com/in/alexchen-pm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          💼 LinkedIn Profile
        </a>

        <a 
          href="https://alexchen.com/portfolio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          🎯 Product Portfolio
        </a>

        <a 
          href="https://medium.com/@alexchen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          ✍️ AI Strategy Blog
        </a>

        <a 
          href="https://twitter.com/alexchen_ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          🐦 Twitter / X
        </a>

        <a 
          href="https://github.com/alexchen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          💻 GitHub Projects
        </a>

        <a 
          href="https://alexchen.com/ai-startup-toolkit" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          🛠️ Free AI Startup Toolkit
        </a>

        <a 
          href="https://alexchen.com/newsletter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          📧 Weekly AI Newsletter
        </a>

        <a 
          href="https://podcast.alexchen.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-button"
        >
          🎙️ AI Founders Podcast
        </a>

        <a 
          href="mailto:alex@alexchen.com" 
          className="link-button"
        >
          ✉️ Email Me
        </a>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '14px'
      }}>
        <p>© 2024 Alex Chen | Building AI-Powered Futures</p>
      </div>
    </main>
  )
}
