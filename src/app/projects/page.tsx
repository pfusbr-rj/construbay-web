import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata = {
  title: 'Luxury Remodeling Projects in Marin County | ConstruBay Portfolio',
  description: 'See completed luxury kitchens, bathrooms, ADUs, and full home remodels across Marin County by ConstruBay.',
};

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ padding: '0 2rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Over the past six years, our <Link href="/services/general-contractor-marin-county" style={{ color: '#cbb26a', textDecoration: 'none', borderBottom: '1px solid #cbb26a' }}>Marin County general contractor</Link> team has completed luxury remodeling projects across kitchens, bathrooms, ADUs, and whole-home renovations. See our completed work below.
        </p>
      </div>
      <ProjectGrid projects={projects} mode="archive" />
    </main>
  );
}
