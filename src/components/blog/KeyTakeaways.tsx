interface KeyTakeawaysProps {
  takeaways: string[]
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  return (
    <aside style={{
      backgroundColor: '#000000',
      border: '1px solid rgba(203,178,106,0.3)',
      padding: '1.75rem 2rem',
      marginBottom: '2.5rem',
    }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: 300,
        fontSize: '1.4rem',
        color: '#cbb26a',
        marginBottom: '1rem',
        letterSpacing: '0.03em',
      }}>
        Key Takeaways
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {takeaways.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#cbb26a', flexShrink: 0, marginTop: '2px' }}>·</span>
            <span style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.7 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
