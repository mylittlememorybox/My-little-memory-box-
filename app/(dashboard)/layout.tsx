import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main style={{ display: "flex" }}>
      <h1 style={{ color: "red", fontSize: "40px" }}>TEST LAYOUT</h1>
      <Sidebar />
      <div style={{ flex: 1 }}>{children}</div>
    </main>
  );
}
