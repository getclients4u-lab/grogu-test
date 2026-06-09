export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌱</div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Grogu Test</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Successfully deployed from GitHub to Vercel!</p>
        <div style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          ✅ Connected & Live
        </div>
      </div>
    </main>
  );
}
