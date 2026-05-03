"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        backgroundColor: "#F6EFE8",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 14,
          left: 14,
          zIndex: 50,
          width: 46,
          height: 46,
          borderRadius: 16,
          border: "1px solid #D8C5B9",
          background: "#FFFDF8",
          color: "#6F5548",
          fontSize: 25,
          boxShadow: "0 8px 20px rgba(80,50,35,0.16)",
        }}
      >
        ☰
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(40,25,20,0.28)",
          }}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 292,
              maxWidth: "82vw",
              height: "100%",
              background: "#F8EFE7",
              padding: 18,
              boxSizing: "border-box",
              boxShadow: "8px 0 30px rgba(0,0,0,0.18)",
              overflowY: "auto",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                fontSize: 28,
                color: "#6F5548",
                float: "right",
              }}
            >
              ×
            </button>

            <div style={{ clear: "both", paddingTop: 16 }}>
              <Sidebar />
            </div>
          </aside>
        </div>
      )}

      <section
        style={{
          width: "100%",
          maxWidth: "100vw",
          minWidth: 0,
          overflowX: "hidden",
          paddingTop: 62,
          boxSizing: "border-box",
        }}
      >
        {children}
      </section>
    </main>
  );
}
