import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

interface KeyTakeawaysProps {
  items: string[];
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div style={{
      borderLeft: '3px solid #cbb26a',
      background: '#0a0a0a',
      padding: '1.5rem',
      marginBottom: '2rem',
    }}>
      <p className={montserrat.className} style={{
        color: '#cbb26a',
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        fontWeight: '400',
      }}>
        Key Takeaways
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {items.map((item, i) => (
          <li key={i} className={montserrat.className} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ color: '#cbb26a', flexShrink: 0, marginTop: '1px' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: '300', lineHeight: 1.6 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
