export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a1628',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '1rem' }}>404</h2>
      <p style={{ color: '#cbb26a', marginBottom: '2rem', letterSpacing: '0.2em' }}>PAGE NOT FOUND</p>
      <a href="/" style={{
        border: '1px solid #cbb26a',
        color: 'white',
        padding: '12px 48px',
        letterSpacing: '0.15em',
        fontSize: '12px',
        textTransform: 'uppercase'
      }}>Return Home</a>
    </main>
  );
}
