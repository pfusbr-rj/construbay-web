import { projects } from '@/data/projects';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata = {
  title: 'Projects | ConstruBay — Luxury General Contractor Marin County',
  description: 'Portfolio of luxury home remodels, ADUs, kitchens, and additions across Marin, Sonoma & Napa Counties by ConstruBay. CSLB #1106798.',
};

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '120px' }}>
      <ProjectGrid projects={projects} mode="archive" />
    </main>
  );
}
