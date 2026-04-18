export default function PreviewPage() {
  return (
    <div
      style={{
        background: "#f7efe9",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
        color: "#5c4a43",
      }}
    >

      {/* LOGO */}
      <a href="/" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
        <img
          src="/logo.png"
          style={{ height: 50 }}
        />
      </a>

      {/* BANNER */}
      <div
        style={{
          background: "#e8d6cc",
          padding: 16,
          borderRadius: 14,
          textAlign: "center",
          marginBottom: 20,
          fontWeight: 600,
        }}
      >
        Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
      </div>

      {/* CARD 1 */}
      <div style={card}>
        <h2>Οι πρώτες σου στιγμές</h2>

        <p><b>Όνομα:</b> Ελπίδα</p>
        <p><b>Η πρώτη φορά που σε κράτησα:</b> 2 Ιουνίου 2025</p>
        <p><b>Ζύγιζες μόνο:</b> 3,550 γρ</p>
        <p><b>Είχες ύψος:</b> 51 πόντους</p>

        <img
          src="https://picsum.photos/600/400?girlbaby"
          style={img}
        />
      </div>

      {/* CARD 2 */}
      <div style={card}>
        <h2>Ο κόσμος σου</h2>

        <p><b>Οι γονείς σου:</b> Μαριάννα & Γιάννης</p>
        <p><b>Η νονά σου:</b> Ανδριάνα</p>

        <img
          src="https://picsum.photos/601/400?family"
          style={img}
        />
      </div>

      {/* STORY */}
      <div style={card}>
        <h2>Το παραμύθι σου</h2>

        <p>
          Μια φορά κι έναν καιρό ήταν η μικρή Ελπίδα. Ένα κοριτσάκι με μάτια
          που έλαμπαν σαν μικρά αστεράκια.
        </p>

        <p>
          Μια μέρα βρήκε ένα κόκκινο μπαλόνι.
        </p>

        <p>
          «Μαμά, κοίτα!» είπε γεμάτη χαρά.
        </p>

        <p>
          Το μπαλόνι πέταξε ψηλά… και τότε ξεκίνησε η πρώτη της μικρή περιπέτεια.
        </p>

        <img
          src="https://picsum.photos/602/400?fairytale"
          style={img}
        />
      </div>

    </div>
  );
}

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 16,
  marginBottom: 20,
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};

const img = {
  width: "100%",
  borderRadius: 12,
  marginTop: 12
};
