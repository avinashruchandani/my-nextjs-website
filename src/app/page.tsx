import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          style={{ marginBottom: '2rem' }}
        />
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Welcome to Next.js 15!
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Yo! Get started by editing{' '}
          <code style={{ 
            background: '#f1f1f1', 
            padding: '0.2rem 0.4rem', 
            borderRadius: '0.25rem',
            fontFamily: 'monospace'
          }}>
            src/app/page.tsx
          </code>
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            padding: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'border-color 0.3s'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Docs →
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            padding: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'border-color 0.3s'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Learn →
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            padding: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'border-color 0.3s'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Templates →
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            padding: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'border-color 0.3s'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Deploy →
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
