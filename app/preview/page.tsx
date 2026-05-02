"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

const images = {
  newborn: "/preview/newborn.jpg.JPG",
  smile: "/preview/smile.jpg.JPG",
  crown: "/preview/crown.jpg.JPG",
  steps: "/preview/steps.jpg.JPG",
  family: "/preview/family.jpg.JPG",
  grandparents: "/preview/grandparents.jpg.JPG",
  birthday: "/preview/birthday.jpg.JPG",
  social: "/preview/social.jpg.JPG",
  school: "/preview/school.jpg.JPG",
};

const pages = [
  "cover",
  "firstMoments",
  "world",
  "achievements",
  "firstStepsWorld",
  "hardDays",
  "emotions",
  "birthday",
  "school",
];

export default function PreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);

  function go(next: number) {
    if (next < 0 || next >= pages.length) return;
    setFlip(true);
    setTimeout(() => {
      setPage(next);
      setFlip(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 520);
  }

  return (
    <main style={pageStyle}>
      <style>{`
        @keyframes pageFlip {
          0% { transform: perspective(1300px) rotateY(0deg); filter: brightness(1); }
          45% { transform: perspective(1300px) rotateY(-64deg); filter: brightness(.88); }
          100% { transform: perspective(1300px) rotateY(0deg); filter: brightness(1); }
        }

        @media (max-width: 420px) {
          .memory-row {
            display: grid !important;
            grid-template-columns: 118px 1fr !important;
            gap: 10px !important;
          }

          .memory-photo {
            width: 118px !important;
            height: 150px !important;
          }
        }
      `}</style>

      <button style={hamburgerStyle} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {menuOpen && (
        <div style={overlayStyle} onClick={() => setMenuOpen(false)}>
          <aside style={drawerStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setMenuOpen(false)}>
              ×
            </button>

            <img src="/logo.png" alt="My Little Memory Box" style={drawerLogoStyle} />

            <Link href="/" style={drawerLinkStyle}>
              Αρχική
            </Link>

            <Link href="/checkout" style={goldLinkStyle}>
              Δημιούργησε Memory Box
              <span style={priceStyle}>29.99€ (+ΦΠΑ)</span>
            </Link>

            <Link href="/login" style={drawerLinkStyle}>
              Ο λογαριασμός μου
            </Link>
          </aside>
        </div>
      )}

      <section style={bookWrapStyle}>
        <div style={bookFrameStyle}>
          <div
            style={{
              ...bookPageStyle,
              animation: flip ? "pageFlip .52s ease-in-out" : "none",
            }}
          >
            {page === 0 && <Cover />}

            {page === 1 && (
              <MemoryPage
                title="Οι πρώτες σου στιγμές"
                image={images.newborn}
                paragraphs={[
                  "Η πρώτη φορά που σε κράτησα ήταν στις 11 Μαΐου 2023… και εκείνη τη στιγμή ο κόσμος σταμάτησε για λίγο.",
                  "Ήσουν μια σταλίτσα. Ζύγιζες μόνο 3.200kg και είχες ύψος 50cm.",
                  "Επιστρέψαμε από το μαιευτήριο στις 14 Μαΐου 2023, με μια καρδιά γεμάτη αγάπη και ένα σπίτι που άλλαξε για πάντα.",
                  "Οι πρώτες στιγμές σου στο σπίτι μας ήταν ήσυχες, γεμάτες αγκαλιές, βλέμματα και εκείνη τη μοναδική μυρωδιά σου.",
                  "Η πρώτη φορά που χαμογέλασες ήταν στις 2 Ιουνίου 2023… και ήταν σαν να άναψε φως μέσα στο σπίτι.",
                ]}
              />
            )}

            {page === 2 && (
              <MemoryPage
                title="Ο κόσμος σου"
                image={images.family}
                secondImage={images.grandparents}
                paragraphs={[
                  "Η μαμά σου, η Χριστίνα, και ο μπαμπάς σου, ο Σπύρος, είναι η αγκαλιά σου, η δύναμή σου και το ασφαλές σου μέρος.",
                  "Ο παππούς από τον μπαμπά, ο Παναγιώτης, και η γιαγιά, η Άννα, σε κοιτάνε σαν να είσαι όλος τους ο κόσμος.",
                  "Από την πλευρά της μαμάς, ο παππούς Κώστας και η γιαγιά Στέλλα σε έχουν σαν μικρό τους θησαυρό.",
                  "Η θεία Δέσποινα από τον μπαμπά και ο θείος Ιάσονας από τη μαμά είναι πάντα κοντά σου, με αγάπη και χαμόγελα.",
                  "Οι νονοί σου, η Ανδριάνα, ο Ορέστης, η Δήμητρα και ο Θωμάς, είναι δίπλα σου σαν δεύτερη οικογένεια.",
                  "Η Άρτεμις, φίλη της μαμάς, και ο Μάνθος, φίλος του μπαμπά, είναι από εκείνους τους ανθρώπους που μπήκαν στη ζωή μας και έγιναν οικογένεια.",
                ]}
              />
            )}

            {page === 3 && (
              <MemoryPage
                title="Οι πρώτες σου κατακτήσεις"
                image={images.smile}
                secondImage={images.crown}
                thirdImage={images.steps}
                paragraphs={[
                  "Το πρώτο σου δοντάκι ήρθε στις 12 Ιανουαρίου 2024, μετά από ένα δύσκολο αλλά τρυφερό βράδυ.",
                  "Λάτρευες να σε νανουρίζω στην αγκαλιά μου, με ήσυχες λέξεις και μικρά τραγουδάκια.",
                  "Η πρώτη φορά που μπουσούλησες ήταν στις 3 Φεβρουαρίου 2024… και τότε κατάλαβα ότι ξεκινάει η εξερεύνηση.",
                  "Η πρώτη φορά που σηκώθηκες όρθια ήταν στις 25 Φεβρουαρίου 2024.",
                  "Η πρώτη σου τούμπα έγινε στις 5 Μαρτίου 2024… και εγώ τρόμαξα περισσότερο από σένα.",
                  "Η πρώτη φορά που περπάτησες ήταν στις 18 Μαρτίου 2024… και ήρθες κατευθείαν στην αγκαλιά μου.",
                ]}
              />
            )}

            {page === 4 && (
              <MemoryPage
                title="Τα πρώτα σου βήματα στον κόσμο"
                image={images.social}
                paragraphs={[
                  "Η πρώτη φορά που έπαιξες με άλλα παιδάκια ήταν στις 10 Απριλίου 2024, σε μια μικρή παιδική χαρά.",
                  "Σε κοιτούσα από μακριά και ήσουν ήδη πιο δυνατή απ’ όσο νόμιζα.",
                  "Σε ενθουσίαζαν τα χρώματα, τα παιχνίδια και κάθε καινούργια εμπειρία γύρω σου.",
                  "Κάποιες φορές σε φόβιζαν οι δυνατοί ήχοι, αλλά πάντα γύριζες στην αγκαλιά μου.",
                  "Και εγώ προσπαθούσα να κρατήσω λίγο από κάθε πρώτη φορά… και λίγο από την ψυχραιμία μου.",
                ]}
              />
            )}

            {page === 5 && (
              <MemoryPage
                title="Οι μέρες που δεν ήταν εύκολες"
                image={images.newborn}
                paragraphs={[
                  "Δεν ήταν όλες οι μέρες όμορφες… αλλά όλες ήταν αληθινές.",
                  "Μια μέρα που ένιωσα ότι δεν τα κατάφερνα ήταν όταν ήσουν ανήσυχη και δεν μπορούσα να σε ηρεμήσω.",
                  "Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα ήταν η κούραση και η ευθύνη… αλλά ποτέ η αγάπη.",
                  "Και παρ’ όλα αυτά συνέχισα γιατί σε αγαπάω περισσότερο από οτιδήποτε.",
                  "Μέσα σε όλες αυτές τις μέρες, σε αγάπησα ακόμα πιο πολύ.",
                ]}
              />
            )}

            {page === 6 && (
              <MemoryPage
                title="Οι στιγμές που με έκανες να νιώσω τα πάντα"
                image={images.steps}
                paragraphs={[
                  "Η στιγμή που ένιωσα περήφανη για σένα ήταν όταν περπάτησες για πρώτη φορά.",
                  "Κάτι μικρό που για μένα ήταν τεράστιο ήταν κάθε σου μικρή προσπάθεια.",
                  "Μια αγκαλιά που δεν ήθελα να τελειώσει ήταν όλες οι αγκαλιές σου.",
                  "Η στιγμή που σκέφτηκα “αυτό είναι η ευτυχία” ήταν όταν σε είδα να γελάς χωρίς λόγο.",
                  "Το πιο όμορφο κομμάτι του χαρακτήρα σου είναι ο τρόπος που γεμίζεις τον χώρο με φως.",
                ]}
              />
            )}

            {page === 7 && (
              <MemoryPage
                title="Τα γενέθλιά σου"
                image={images.birthday}
                paragraphs={[
                  "Στις 11 Μαΐου 2025 γίνεσαι 2 ετών.",
                  "Έσβησες την τούρτα σου με τη μαμά Χριστίνα, τον μπαμπά Σπύρο και όλη την οικογένεια.",
                  "Κάτι που έμαθες αυτή τη χρονιά ήταν να λες “μαμά” και να γελάς κάθε φορά.",
                  "Μια στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά είναι το χαμόγελό σου όταν είδες την τούρτα.",
                  "Η ευχή μου για σένα είναι να είσαι πάντα χαρούμενη, δυνατή και γεμάτη αγάπη.",
                ]}
              />
            )}

            {page === 8 && (
              <MemoryPage
                title="Η πρώτη σου μέρα στο σχολείο"
                image={images.school}
                paragraphs={[
                  "Η πρώτη σου μέρα στο σχολείο ήταν στις 10 Σεπτεμβρίου 2025.",
                  "Σε κοίταζα να φεύγεις και ένιωθα περηφάνια και συγκίνηση μαζί.",
                  "Εσύ έδειχνες λίγο διστακτική στην αρχή, αλλά στο τέλος γύρισες με χαμόγελο.",
                  "Η σκέψη που δεν έφυγε από το μυαλό μου ήταν πως μεγαλώνεις… και το κάνεις υπέροχα.",
                  "Όταν σε ξαναείδα, ήθελα απλώς να σε πάρω αγκαλιά και να σου πω πόσο περήφανη είμαι για σένα.",
                ]}
              />
            )}
          </div>
        </div>

        <div style={navStyle}>
          <button style={navButtonStyle} onClick={() => go(page - 1)} disabled={page === 0}>
            Προηγούμενη
          </button>

          <span style={counterStyle}>
            {page + 1}/{pages.length}
          </span>

          <button
            style={navButtonStyle}
            onClick={() => go(page + 1)}
            disabled={page === pages.length - 1}
          >
            Επόμενη
          </button>
        </div>
      </section>
    </main>
  );
}

function Cover() {
  return (
    <section style={coverStyle}>
      <img src="/logo.png" alt="My Little Memory Box" style={coverLogoStyle} />

      <div style={coverSubtitleStyle}>preview «τα πρώτα σου χρόνια ζωής»</div>

      <div style={nameInputPreviewStyle}>
        <span style={nameLabelStyle}>όνομα παιδιού:</span>
        <span style={typingNameStyle}>Ελπίδα</span>
      </div>
    </section>
  );
}

function MemoryPage({
  title,
  paragraphs,
  image,
  secondImage,
  thirdImage,
}: {
  title: string;
  paragraphs: string[];
  image: string;
  secondImage?: string;
  thirdImage?: string;
}) {
  return (
    <section style={memoryPageStyle}>
      <div style={imageColumnStyle}>
        <img src={image} alt={title} style={memoryImageStyle} />
        {secondImage && <img src={secondImage} alt={title} style={smallImageStyle} />}
        {thirdImage && <img src={thirdImage} alt={title} style={smallImageStyle} />}
      </div>

      <div style={textColumnStyle}>
        <h2 style={sectionTitleStyle}>{title}</h2>
        <TypingParagraphs paragraphs={paragraphs} />
      </div>
    </section>
  );
}

function TypingParagraphs({ paragraphs }: { paragraphs: string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setLineIndex(0);
    setTyped([]);
    setCurrent("");
  }, [paragraphs]);

  useEffect(() => {
    if (lineIndex >= paragraphs.length) return;

    const full = paragraphs[lineIndex];

    if (current.length < full.length) {
      const timer = setTimeout(() => {
        setCurrent(full.slice(0, current.length + 1));
      }, 14);

      return () => clearTimeout(timer);
    }

    const pause = setTimeout(() => {
      setTyped((prev) => [...prev, full]);
      setCurrent("");
      setLineIndex((prev) => prev + 1);
    }, 250);

    return () => clearTimeout(pause);
  }, [current, lineIndex, paragraphs]);

  return (
    <div>
      {typed.map((p, index) => (
        <p key={index} style={paragraphStyle}>
          {p}
        </p>
      ))}

      {lineIndex < paragraphs.length && (
        <p style={paragraphStyle}>
          {current}
          <span style={cursorStyle}>|</span>
        </p>
      )}
    </div>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #F8EFE7 0%, #FFF9F4 100%)",
  padding: "14px",
  boxSizing: "border-box",
};

const hamburgerStyle: CSSProperties = {
  position: "fixed",
  top: 14,
  left: 14,
  zIndex: 10,
  width: 46,
  height: 46,
  borderRadius: 16,
  border: "1px solid #D8C2B0",
  background: "#FFFDF8",
  fontSize: 25,
  color: "#6F5548",
  boxShadow: "0 8px 20px rgba(80,50,35,.14)",
};

const overlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(40,25,20,.28)",
  zIndex: 20,
};

const drawerStyle: CSSProperties = {
  width: 286,
  height: "100%",
  background: "linear-gradient(180deg, #FFFDF8, #F8EFE7)",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 16,
  boxShadow: "6px 0 35px rgba(0,0,0,.16)",
  boxSizing: "border-box",
};

const closeButtonStyle: CSSProperties = {
  alignSelf: "flex-end",
  border: "none",
  background: "transparent",
  fontSize: 26,
  color: "#6F5548",
};

const drawerLogoStyle: CSSProperties = {
  width: 150,
  margin: "0 auto 16px",
};

const drawerLinkStyle: CSSProperties = {
  padding: "15px 16px",
  borderRadius: 18,
  background: "#FFFFFF",
  border: "1px solid #E8D8CF",
  textDecoration: "none",
  color: "#5E4B42",
  fontWeight: 700,
  textAlign: "center",
};

const goldLinkStyle: CSSProperties = {
  padding: "16px",
  borderRadius: 20,
  background: "linear-gradient(135deg, #C9A15E, #A67C3E)",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 800,
  textAlign: "center",
  boxShadow: "0 10px 24px rgba(145,105,50,.25)",
};

const priceStyle: CSSProperties = {
  display: "block",
  fontSize: 12,
  opacity: 0.95,
  marginTop: 5,
};

const bookWrapStyle: CSSProperties = {
  width: "100%",
  maxWidth: 410,
  margin: "66px auto 0",
};

const bookFrameStyle: CSSProperties = {
  background: "linear-gradient(135deg, #9B7A6B, #C7A48C)",
  borderRadius: 28,
  padding: 9,
  boxShadow: "0 20px 44px rgba(80,50,35,.25)",
};

const bookPageStyle: CSSProperties = {
  minHeight: 610,
  background: "#FFFDF8",
  borderRadius: 22,
  padding: 15,
  boxSizing: "border-box",
  transformOrigin: "left center",
  backfaceVisibility: "hidden",
  boxShadow: "inset 11px 0 24px rgba(120,80,50,.12)",
};

const coverStyle: CSSProperties = {
  minHeight: 575,
  border: "1px solid #D7BD91",
  borderRadius: 22,
  padding: 24,
  boxSizing: "border-box",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "linear-gradient(180deg, #FFF9F0, #F4E5D7)",
};

const coverLogoStyle: CSSProperties = {
  width: "58%",
  maxWidth: 230,
  margin: "0 auto 24px",
};

const coverSubtitleStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  fontSize: 25,
  lineHeight: 1.2,
  color: "#6F5548",
  marginBottom: 28,
};

const nameInputPreviewStyle: CSSProperties = {
  border: "1px solid #D7BD91",
  borderRadius: 18,
  padding: "15px 16px",
  background: "rgba(255,255,255,.72)",
  boxShadow: "inset 0 2px 8px rgba(120,80,50,.08)",
  textAlign: "left",
};

const nameLabelStyle: CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "#9B735F",
  marginBottom: 7,
};

const typingNameStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: 31,
  color: "#6F5548",
  fontStyle: "italic",
};

const memoryPageStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "125px 1fr",
  gap: 12,
  alignItems: "start",
};

const imageColumnStyle: CSSProperties = {
  display: "grid",
  gap: 10,
};

const memoryImageStyle: CSSProperties = {
  width: 125,
  height: 170,
  objectFit: "cover",
  borderRadius: 18,
  boxShadow: "0 10px 24px rgba(80,50,35,.18)",
};

const smallImageStyle: CSSProperties = {
  width: 125,
  height: 115,
  objectFit: "cover",
  borderRadius: 16,
  boxShadow: "0 8px 18px rgba(80,50,35,.14)",
};

const textColumnStyle: CSSProperties = {
  minWidth: 0,
};

const sectionTitleStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: 22,
  lineHeight: 1.12,
  color: "#73594C",
  margin: "0 0 12px",
};

const paragraphStyle: CSSProperties = {
  fontSize: 13.5,
  lineHeight: 1.48,
  color: "#5E4B42",
  margin: "0 0 10px",
};

const cursorStyle: CSSProperties = {
  color: "#A67C3E",
  fontWeight: 800,
};

const navStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: 12,
  position: "sticky",
  bottom: 8,
};

const navButtonStyle: CSSProperties = {
  flex: 1,
  border: "none",
  borderRadius: 16,
  padding: "13px 10px",
  background: "#EAD7CF",
  color: "#5C4A42",
  fontWeight: 800,
};

const counterStyle: CSSProperties = {
  color: "#7A5C4A",
  fontWeight: 800,
  minWidth: 42,
  textAlign: "center",
};
