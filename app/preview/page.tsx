export default function PreviewPage() {
  return (
    <div
      style={{
        background: "#f6eee8",
        minHeight: "100vh",
        padding: "20px",
        color: "#4f4039",
        fontFamily: "sans-serif",
      }}
    >
      {/* TOP BANNER */}
      <div
        style={{
          background: "#e9d7cd",
          padding: "16px",
          borderRadius: "12px",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
      </div>

      {/* CARD */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
        }}
      >
        <h2>Οι πρώτες σου στιγμές</h2>

        <p><b>Όνομα:</b> Γιώργος</p>
        <p><b>Η πρώτη φορά που σε κράτησα:</b> 2 Ιουνίου 2025</p>
        <p><b>Ζύγιζες μόνο:</b> 3,550 γρ</p>
        <p><b>Είχες ύψος:</b> 51 πόντους</p>

        <img
          src="https://picsum.photos/600/400"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginTop: "12px",
          }}
        />
      </div>

      {/* SECOND CARD */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
        }}
      >
        <h2>Το παραμύθι σου</h2>

        <p>
          Μια φορά κι έναν καιρό ήταν ο Γιώργος, ένα μικρό αγόρι γεμάτο
          περιέργεια. Μια μέρα βρήκε ένα κόκκινο μπαλόνι...
        </p>

        <img
          src="https://picsum.photos/601/400"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginTop: "12px",
          }}
        />
      </div>
    </div>
  );
}
  
