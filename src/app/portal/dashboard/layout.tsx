import PortalNav from '@/components/portal/PortalNav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row" style={{ height: '100vh', width: '100%', backgroundColor: '#000000' }}>
      <PortalNav />
      <main className="flex-1 overflow-y-auto" style={{ backgroundColor: '#000000', minHeight: 0 }}>
        {children}
      </main>
    </div>
  )
}
