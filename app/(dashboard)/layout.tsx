import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#F6EFE8",
      }}
    >
      <Sidebar />

      <section
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {children}
      </section>
    </main>
  );
}
