'use client';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

const CATEGORIES = ['All', 'Full Remodel', 'Kitchen & Bath', 'ADU', 'Outdoor'];

interface FilterBarProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="w-full overflow-x-auto mb-16" style={{ scrollbarWidth: 'none' }}>
      <div className="flex gap-8 md:gap-12 justify-start md:justify-center px-4 md:px-0 border-b border-white/10 pb-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`${montserrat.className} relative pb-4 whitespace-nowrap transition-colors duration-300`}
            style={{
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: active === cat ? '#cbb26a' : 'rgba(255,255,255,0.45)',
            }}
          >
            {cat}
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '1px',
              backgroundColor: '#cbb26a',
              transform: active === cat ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'left',
            }} />
          </button>
        ))}
      </div>
    </div>
  );
}
