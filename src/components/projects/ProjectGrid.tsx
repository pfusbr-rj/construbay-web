'use client';
import { useState, useMemo } from 'react';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { Project } from '@/types/project';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

interface ProjectGridProps {
  projects: Project[];
  mode: 'featured' | 'archive';
}

export default function ProjectGrid({ projects, mode }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const displayed = useMemo(() => {
    let result = mode === 'featured' ? projects.filter(p => p.featured).slice(0, 6) : projects;
    if (mode === 'archive' && activeFilter !== 'All') {
      result = result.filter(p => p.type === activeFilter);
    }
    return result;
  }, [projects, mode, activeFilter]);

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
          <div>
            <p className={montserrat.className} style={{
              fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px',
            }}>
              {mode === 'featured' ? 'Portfolio' : 'Archive'}
            </p>
            <h2 className={cormorant.className} style={{
              fontSize: mode === 'featured' ? '48px' : '40px',
              fontWeight: 300, color: '#ffffff', lineHeight: 1.1,
            }}>
              {mode === 'featured' ? 'Selected Work' : 'All Projects'}
            </h2>
          </div>
          {mode === 'featured' && (
            <a href="/projects" className={`${montserrat.className} group hidden md:flex items-center gap-3`} style={{
              fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#cbb26a', textDecoration: 'none',
            }}>
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>

        {/* Filters — archive only */}
        {mode === 'archive' && (
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '40px' }}>
          {displayed.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>

        {displayed.length === 0 && (
          <p className={montserrat.className} style={{
            textAlign: 'center', padding: '80px 0',
            fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
          }}>
            No projects in this category yet.
          </p>
        )}
      </div>

      {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
