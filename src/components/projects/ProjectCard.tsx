'use client';
import Image from 'next/image';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { Project } from '@/types/project';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={() => onClick(project)}>
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#0a1628' }}>
        <Image
          src={project.heroImage}
          alt={`${project.clientName} — ${project.address}`}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
          width: '36px',
          height: '36px',
          border: '1px solid #cbb26a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cbb26a" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div style={{ marginTop: '20px', paddingLeft: '4px' }}>
        <h3 className={cormorant.className} style={{
          fontSize: '22px',
          fontWeight: 300,
          color: '#ffffff',
          lineHeight: 1.2,
          marginBottom: '10px',
        }}>
          {project.clientName}
        </h3>
        <div style={{ width: '24px', height: '1px', backgroundColor: '#cbb26a', opacity: 0.5, marginBottom: '10px' }} />
        <p className={montserrat.className} style={{
          fontSize: '10px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(203,178,106,0.7)',
          marginBottom: '4px',
        }}>
          {project.address}, {project.city}
        </p>
        <p className={montserrat.className} style={{
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
        }}>
          {project.type}{project.sqft ? ` — ${project.sqft.toLocaleString()} sq ft` : ''}
        </p>
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            onClick={(e) => e.stopPropagation()}
            className={`${montserrat.className} inline-block mt-5 hover:bg-[#cbb26a] hover:text-black transition-all duration-300`}
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              border: '1px solid #cbb26a',
              padding: '8px 18px',
              textDecoration: 'none',
            }}
          >
            View Case Study →
          </a>
        )}
      </div>
    </div>
  );
}
