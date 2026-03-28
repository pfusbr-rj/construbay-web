'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { Project } from '@/types/project';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const images = project.gallery.length > 0 ? project.gallery : [project.heroImage];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images.length, onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      backgroundColor: '#0a1628',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 40px',
        borderBottom: '1px solid rgba(203,178,106,0.15)',
        flexShrink: 0,
      }}>
        <div>
          <h2 className={cormorant.className} style={{ fontSize: '24px', fontWeight: 300, color: '#fff', marginBottom: '6px' }}>
            {project.clientName}
          </h2>
          <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>
            {project.address}, {project.city} &bull; {project.type}
          </p>
        </div>
        <button onClick={onClose} className={montserrat.className} style={{
          background: 'none', border: '1px solid rgba(203,178,106,0.3)',
          color: '#cbb26a', cursor: 'pointer',
          padding: '10px 20px',
          fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}>
          Close
        </button>
      </div>

      {/* Image */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <Image
          src={images[index]}
          alt={`${project.clientName} photo ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Footer Nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px',
        borderTop: '1px solid rgba(203,178,106,0.15)',
        flexShrink: 0,
      }}>
        <button
          onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
          className={montserrat.className}
          style={{ background: 'none', border: 'none', color: '#cbb26a', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          ← Prev
        </button>
        <span className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => setIndex(i => (i + 1) % images.length)}
          className={montserrat.className}
          style={{ background: 'none', border: 'none', color: '#cbb26a', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
