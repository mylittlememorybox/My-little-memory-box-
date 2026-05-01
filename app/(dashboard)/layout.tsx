import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </main>
  );
}
