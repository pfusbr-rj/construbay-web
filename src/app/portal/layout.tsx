export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#000000',
      zIndex: 9999,
    }}>
      {children}
    </div>
  )
}
