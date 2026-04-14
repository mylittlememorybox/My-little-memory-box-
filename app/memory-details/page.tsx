import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const wrap: CSSProperties = {
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, #FDF7F3 0%, #F8EEE7 45%, #F6EFE8 100%)",
  padding: "42px 18px 70px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "1050px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.96)",
  borderRadius: "28px",
  padding: "26px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  marginBottom: "18px",
  border: "1px solid rgba(216,197,185,0.35)",
};

const sectionTitleWrap: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "14px",
  flexWrap: "wrap",
};

const sectionBadge: CSSProperties = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: "999px",
  backgroundColor: "#F4E4DA",
  color: "#8B6F5A",
  fontSize: "13px",
  fontWeight: 600,
};

const sectionTitle: CSSProperties = {
  fontSize: "28px",
  color: "#7D6457",
  margin: 0,
};

const labelStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
  marginBottom: "6px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "15px",
  marginBottom: "12px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "88px",
  resize: "vertical",
};

const mediaGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  marginTop: "10px",
};

const mediaBox: CSSProperties = {
  backgroundColor: "#FFF9F6",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "14px",
};

const helperText: CSSProperties = {
  fontSize: "13px",
  color: "#8A7F7A",
  marginBottom: "8px",
  lineHeight: "1.5",
};

const topText: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#7A6A62",
  maxWidth: "780px",
  margin: "0 auto 18px",
  textAlign: "center",
};

const introBox: CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.72)",
  borderRadius: "22px",
  padding: "16px 18px",
  border: "1px solid rgba(216,197,185,0.35)",
  maxWidth: "820px",
  margin: "0 auto 20px",
};

const divider: CSSProperties = {
  textAlign: "center",
  fontSize: "20px",
  color: "#B99886",
  margin: "4px 0 14px",
  letterSpacing: "6px",
};

const finalButton: CSSProperties = {
  width: "100%",
  padding: "15px 22px",
  borderRadius: "18px",
  border: "none",
  backgroundColor: "#EAD7CF",
  color: "#5C4A42",
  fontSize: "17px",
  fontWeight: "600",
  cursor: "pointer",
};

function MediaUploadBox({
  title,
  description,
  accept,
  icon,
}: {
  title: string;
  description?: string;
  accept: string;
  icon?: string;
}) {
  return (
    <div style={mediaBox}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "6px",
        }}
      >
        <span style={{ fontSize: "18px" }}>{icon || "✿"}</span>
        <div style={labelStyle}>{title}</div>
      </div>
      {description ? <div style={helperText}>{description}</div> : null}
      <input type="file" accept={accept} style={inputStyle} />
    </div>
  );
}

function SectionHeader({
  emoji,
  badge,
  title,
}: {
  emoji: string;
  badge: string;
  title: string;
}) {
  return (
    <>
      <div style={sectionTitleWrap}>
        <span style={{ fontSize: "22px" }}>{emoji}</span>
        <span style={sectionBadge}>{badge}</span>
      </div>
      <h2 className={elegantFont.className} style={sectionTitle}>
        {title}
      </h2>
      <div style={divider}>✦ ✿ ✦</div>
    </>
  );
}

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={215}
              height={215}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "38px",
              color: "#7D6457",
              marginBottom: "8px",
            }}
          >
            Η δημιουργία της ανάμνησής σου
          </h1>

          <div style={introBox}>
            <p style={topText}>
              Συμπλήρωσε τις πιο σημαντικές στιγμές σας και πρόσθεσε φωτογραφίες
              και βίντεο στα σωστά σημεία, ώστε να δημιουργηθεί ένα
              προσωποποιημένο παραμύθι γεμάτο αλήθεια, αγάπη και μνήμη.
            </p>
          </div>
        </div>

        <form>
          <div style={card}>
            <SectionHeader
              emoji="🤍"
              badge="Αρχή της ιστορίας"
              title="Οι πρώτες σου στιγμές"
            />

            <label style={labelStyle}>Η πρώτη φορά που σε κράτησα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Ήσουν μια σταλίτσα...</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Ζύγιζες μόνο</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Είχες ύψος</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Επιστρέψαμε από το μαιευτήριο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι πρώτες στιγμές σου στο σπίτι μας ήταν</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που χαμογέλασες</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία από τις πρώτες μέρες"
                description="Μια βασική φωτογραφία από τις πρώτες στιγμές."
                accept="image/*"
                icon="📷"
              />
              <MediaUploadBox
                title="Φωτογραφία αγκαλιάς"
                description="Μια τρυφερή φωτογραφία δική σας."
                accept="image/*"
                icon="🤍"
              />
              <MediaUploadBox
                title="Φωτογραφία από το σπίτι"
                description="Από τις πρώτες μέρες μετά την επιστροφή σας."
                accept="image/*"
                icon="🏡"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🌍"
              badge="Οι άνθρωποί σου"
              title="Ο κόσμος σου"
            />

            <label style={labelStyle}>Οι γονείς σου</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι θείοι και οι θείες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>
              Οι παππούδες και οι γιαγιάδες και οι νονοί/ες σου
            </label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι φίλοι που έγιναν οικογένεια</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>
              Οι αξίες που θέλουμε να σου δώσουμε σαν γονείς
            </label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <SectionHeader
              emoji="✨"
              badge="Μικρές κατακτήσεις"
              title="Οι πρώτες σου ανακαλύψεις"
            />

            <label style={labelStyle}>Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι)</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Λάτρευες να σε νανουρίζω έτσι</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που μπουσούλησες</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία από τις πρώτες ανακαλύψεις"
                description="Μια φωτογραφία από αυτή την περίοδο."
                accept="image/*"
                icon="📸"
              />
              <MediaUploadBox
                title="Βίντεο από τις πρώτες ανακαλύψεις"
                description="Ένα βιντεάκι από παιχνίδι, μπουσούλημα ή γέλιο."
                accept="video/*"
                icon="🎥"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="👣"
              badge="Μεγαλώνεις"
              title="Τα πρώτα σου βήματα"
            />

            <label style={labelStyle}>Η πρώτη φορά που σηκώθηκες όρθιο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη σου τούμπα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που έτρεξες προς το μέρος μου</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία πρώτων βημάτων"
                accept="image/*"
                icon="🦶"
              />
              <MediaUploadBox
                title="Βίντεο πρώτων βημάτων"
                accept="video/*"
                icon="🎬"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🌧️"
              badge="Αληθινές μέρες"
              title="Οι μέρες που δεν ήταν εύκολες"
            />

            <label style={labelStyle}>Μια μέρα που ένιωσα ότι δεν τα κατάφερνα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μια στιγμή που λύγισα (αλλά δεν το έδειξα)</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Και παρ’ όλα αυτά... συνέχισα γιατί</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <SectionHeader
              emoji="💫"
              badge="Στιγμές καρδιάς"
              title="Οι στιγμές που με έκανες να νιώθω τα πάντα"
            />

            <label style={labelStyle}>Η στιγμή που ένιωσα περήφανη για σένα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι μικρό που για μένα ήταν τεράστιο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μια αγκαλιά που δεν ήθελα να τελειώσει</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που σκέφτηκα “αυτό είναι η ευτυχία”</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία ιδιαίτερης στιγμής"
                accept="image/*"
                icon="🌸"
              />
              <MediaUploadBox
                title="Βίντεο ιδιαίτερης στιγμής"
                accept="video/*"
                icon="🎞️"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🎂"
              badge="Γιορτή"
              title="Για τα γενέθλιά σου"
            />

            <label style={labelStyle}>Σήμερα γίνεσαι ... ετών</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>
              Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου
            </label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που έμαθες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μία στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η ευχή μου για σένα</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφίες γενεθλίων"
                accept="image/*"
                icon="🎉"
              />
              <MediaUploadBox
                title="Βίντεο γενεθλίων"
                accept="video/*"
                icon="🕯️"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🧸"
              badge="Έξω στον κόσμο"
              title="Τα πρώτα σου βήματα προς τον κόσμο"
            />

            <label style={labelStyle}>Η πρώτη φορά που έπαιξες με άλλα παιδάκια</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη σου “φιλία” όπως την είδα εγώ</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που σε ενθουσίασε πολύ</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που σε φόβισε</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που κατάλαβα ότι μεγαλώνεις</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία κοινωνικής στιγμής"
                accept="image/*"
                icon="🫶"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🏫"
              badge="Μεγάλο βήμα"
              title="Η πρώτη σου μέρα στο σχολείο"
            />

            <label style={labelStyle}>Σήμερα πήγες για πρώτη φορά σχολείο...</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Και εγώ ένιωσα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Εσύ έδειχνες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που σε άφησα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η σκέψη που δεν έφυγε από το μυαλό μου</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Όταν σε ξαναείδα</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφίες σχολείου"
                accept="image/*"
                icon="🎒"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🌷"
              badge="Μικρή παύση"
              title="Μια σκέψη για σένα"
            />

            <textarea style={{ ...textareaStyle, minHeight: "120px" }} />
          </div>

          <div style={card}>
            <SectionHeader
              emoji="📚"
              badge="Αναμνήσεις σε εικόνες"
              title="Μια σελίδα με φωτογραφίες"
            />

            <div style={mediaGrid}>
              <MediaUploadBox title="Φωτογραφία 1" accept="image/*" icon="🖼️" />
              <MediaUploadBox title="Φωτογραφία 2" accept="image/*" icon="🖼️" />
              <MediaUploadBox title="Φωτογραφία 3" accept="image/*" icon="🖼️" />
              <MediaUploadBox title="Φωτογραφία 4" accept="image/*" icon="🖼️" />
              <MediaUploadBox title="Φωτογραφία 5" accept="image/*" icon="🖼️" />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="💌"
              badge="Λίγο πριν το τέλος"
              title="Μια τελευταία σκέψη"
            />

            <textarea style={{ ...textareaStyle, minHeight: "120px" }} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία για αυτή τη σελίδα"
                accept="image/*"
                icon="🌼"
              />
            </div>
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🕊️"
              badge="Το πιο προσωπικό"
              title="Ένα γράμμα για εσένα"
            />

            <textarea style={{ ...textareaStyle, minHeight: "220px" }} />
          </div>

          <div style={card}>
            <SectionHeader
              emoji="✨"
              badge="Το κλείσιμο"
              title="Το τελικό κλείσιμο της ιστορίας"
            />

            <textarea style={{ ...textareaStyle, minHeight: "160px" }} />
          </div>

          <div style={card}>
            <SectionHeader
              emoji="🤍"
              badge="Επόμενο βήμα"
              title="Έτοιμη να συνεχίσεις;"
            />

            <button type="button" style={finalButton}>
              Συνέχεια στο επόμενο στάδιο
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
