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
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        display: "block",
        backgroundColor: "#F6EFE8",
      }}
    >
      <Sidebar />

      <section
        style={{
          width: "100%",
          maxWidth: "100vw",
          minWidth: 0,
          overflowX: "hidden",
        }}
      >
        {children}
      </section>
    </main>
  );
}
