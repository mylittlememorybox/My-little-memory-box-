"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type BookMode = "home" | "memory" | "story";

type MemoryItem = {
  label: string;
  answer: string;
};

type MemoryPage = {
  title: string;
  images: string[];
  items: MemoryItem[];
};

type StoryField = {
  label: string;
  answer: string;
};

type StoryPage = {
  title: string;
  image: string;
  text: string[];
};

const memoryImages = {
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

const storyImages = {
  cover: "/preview/storybook-cover.png.JPEG",
  garden: "/preview/garden-play.png.JPEG",
  balloonLost: "/preview/balloon-lost.png.JPEG",
  forestAlone: "/preview/forest-alone.png.JPEG",
  unicornMeet: "/preview/unicorn-meet.png.JPEG",
  darkForest: "/preview/dark-forest.png.JPEG",
  lightPower: "/preview/light-power.png.JPEG",
  balloonCatch: "/preview/balloon-catch.png.JPEG",
  dreamEnd: "/preview/dream-end.png.JPEG",
};

const memoryPages: MemoryPage[] = [
  {
    title: "Οι πρώτες σου στιγμές",
    images: [memoryImages.newborn],
    items: [
      {
        label: "Η πρώτη φορά που σε κράτησα:",
        answer:
          "Ήταν στις 11 Μαΐου 2023… και εκείνη τη στιγμή ο κόσμος σταμάτησε για λίγο. Και ξεκίνησε ξανά, μαζί σου.",
      },
      {
        label: "Ήσουν μια σταλίτσα:",
        answer: "Ζύγιζες μόνο 3.200kg και είχες ύψος 50cm.",
      },
      {
        label: "Επιστρέψαμε από το μαιευτήριο:",
        answer:
          "Στις 14 Μαΐου 2023, με μια καρδιά γεμάτη αγάπη και ένα σπίτι που άλλαξε για πάντα.",
      },
      {
        label: "Οι πρώτες στιγμές σου στο σπίτι μας ήταν:",
        answer:
          "Ήσυχες, γεμάτες αγκαλιές, βλέμματα και εκείνη τη μοναδική μυρωδιά σου.",
      },
      {
        label: "Η πρώτη φορά που χαμογέλασες:",
        answer:
          "Ήταν στις 2 Ιουνίου 2023… και ήταν σαν να άναψε φως μέσα στο σπίτι.",
      },
    ],
  },
  {
    title: "Ο κόσμος σου",
    images: [memoryImages.family, memoryImages.grandparents],
    items: [
      {
        label: "Οι γονείς σου:",
        answer:
          "Η μαμά σου, η Χριστίνα, και ο μπαμπάς σου, ο Σπύρος, είναι η αγκαλιά σου, η δύναμή σου και το ασφαλές σου μέρος.",
      },
      {
        label: "Οι παππούδες και οι γιαγιάδες:",
        answer:
          "Ο παππούς από τον μπαμπά, ο Παναγιώτης, και η γιαγιά, η Άννα, σε κοιτάνε σαν να είσαι όλος τους ο κόσμος. Από την πλευρά της μαμάς, ο παππούς Κώστας και η γιαγιά Στέλλα σε έχουν σαν μικρό τους θησαυρό.",
      },
      {
        label: "Οι θείοι και οι θείες:",
        answer:
          "Η θεία Δέσποινα από τον μπαμπά και ο θείος Ιάσονας από τη μαμά είναι πάντα κοντά σου, με αγάπη και χαμόγελα.",
      },
      {
        label: "Οι νονοί σου:",
        answer:
          "Η Ανδριάνα, ο Ορέστης, η Δήμητρα και ο Θωμάς είναι δίπλα σου σαν δεύτερη οικογένεια.",
      },
      {
        label: "Οι φίλοι που έγιναν οικογένεια:",
        answer:
          "Η Άρτεμις, φίλη της μαμάς, και ο Μάνθος, φίλος του μπαμπά, είναι από εκείνους τους ανθρώπους που μπήκαν στη ζωή μας και έγιναν οικογένεια.",
      },
    ],
  },
  {
    title: "Οι πρώτες σου κατακτήσεις",
    images: [memoryImages.smile, memoryImages.crown, memoryImages.steps],
    items: [
      {
        label: "Το πρώτο σου δοντάκι:",
        answer:
          "Ήρθε στις 12 Ιανουαρίου 2024, μετά από ένα δύσκολο αλλά τρυφερό βράδυ.",
      },
      {
        label: "Λάτρευες να σε νανουρίζω έτσι:",
        answer:
          "Στην αγκαλιά μου, με ήσυχες λέξεις και μικρά τραγουδάκια.",
      },
      {
        label: "Η πρώτη φορά που μπουσούλησες:",
        answer:
          "Ήταν στις 3 Φεβρουαρίου 2024… και τότε κατάλαβα ότι ξεκινάει η εξερεύνηση.",
      },
      {
        label: "Η πρώτη φορά που σηκώθηκες όρθια:",
        answer: "Στις 25 Φεβρουαρίου 2024, και εγώ κρατούσα την ανάσα μου.",
      },
      {
        label: "Η πρώτη σου τούμπα:",
        answer:
          "Στις 5 Μαρτίου 2024… και εγώ τρόμαξα περισσότερο από σένα.",
      },
      {
        label: "Η πρώτη φορά που περπάτησες:",
        answer:
          "Στις 18 Μαρτίου 2024… και ήρθες κατευθείαν στην αγκαλιά μου.",
      },
    ],
  },
  {
    title: "Τα πρώτα σου βήματα στον κόσμο",
    images: [memoryImages.social],
    items: [
      {
        label: "Η πρώτη φορά που έπαιξες με άλλα παιδάκια:",
        answer:
          "Ήταν στις 10 Απριλίου 2024, σε μια μικρή παιδική χαρά. Σε κοιτούσα από μακριά και ήσουν ήδη πιο δυνατή απ’ όσο νόμιζα.",
      },
      {
        label: "Κάτι που σε ενθουσίασε πολύ:",
        answer:
          "Τα χρώματα, τα παιχνίδια και κάθε καινούργια εμπειρία γύρω σου.",
      },
      {
        label: "Κάτι που σε φόβισε:",
        answer:
          "Οι δυνατοί ήχοι… αλλά πάντα γύριζες στην αγκαλιά μου.",
      },
      {
        label: "Η στιγμή που κατάλαβα ότι μεγαλώνεις:",
        answer:
          "Ήταν όταν σε είδα να προχωράς μόνη σου προς τον κόσμο, με περιέργεια και θάρρος.",
      },
    ],
  },
  {
    title: "Οι μέρες που δεν ήταν εύκολες",
    images: [memoryImages.newborn],
    items: [
      {
        label: "Μια μέρα που ένιωσα ότι δεν τα κατάφερνα:",
        answer:
          "Όταν ήσουν ανήσυχη και δεν μπορούσα να σε ηρεμήσω, ένιωσα μικρή μπροστά στην ευθύνη.",
      },
      {
        label: "Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα:",
        answer:
          "Η κούραση, το ξενύχτι και η αγωνία… αλλά ποτέ η αγάπη.",
      },
      {
        label: "Και παρ’ όλα αυτά... συνέχισα γιατί:",
        answer:
          "Σε αγαπάω περισσότερο από οτιδήποτε. Και κάθε φορά που σε κοιτούσα, έβρισκα ξανά τη δύναμή μου.",
      },
    ],
  },
  {
    title: "Οι στιγμές που με έκανες να νιώσω τα πάντα",
    images: [memoryImages.steps],
    items: [
      {
        label: "Η στιγμή που ένιωσα περήφανη για σένα:",
        answer:
          "Όταν περπάτησες για πρώτη φορά. Ήσουν τόσο μικρή και όμως τόσο αποφασισμένη.",
      },
      {
        label: "Κάτι μικρό που για μένα ήταν τεράστιο:",
        answer:
          "Κάθε σου μικρή προσπάθεια. Κάθε χαμόγελο. Κάθε φορά που με αναζητούσες με τα μάτια σου.",
      },
      {
        label: "Μια αγκαλιά που δεν ήθελα να τελειώσει:",
        answer:
          "Όλες οι αγκαλιές σου. Γιατί μέσα τους χωρούσε όλος μου ο κόσμος.",
      },
      {
        label: "Η στιγμή που σκέφτηκα “αυτό είναι η ευτυχία”:",
        answer:
          "Όταν σε είδα να γελάς χωρίς λόγο και γέμισε το σπίτι φως.",
      },
    ],
  },
  {
    title: "Τα γενέθλιά σου",
    images: [memoryImages.birthday],
    items: [
      {
        label: "Σήμερα γίνεσαι:",
        answer: "2 ετών, στις 11 Μαΐου 2025.",
      },
      {
        label: "Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου:",
        answer:
          "Με τη μαμά Χριστίνα, τον μπαμπά Σπύρο και όλη την οικογένεια γύρω σου.",
      },
      {
        label: "Κάτι που έμαθες:",
        answer:
          "Να λες “μαμά” και να γελάς κάθε φορά που το έλεγες.",
      },
      {
        label: "Μία στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά:",
        answer:
          "Το χαμόγελό σου όταν είδες την τούρτα.",
      },
      {
        label: "Η ευχή μου για σένα:",
        answer:
          "Να είσαι πάντα χαρούμενη, δυνατή και γεμάτη αγάπη.",
      },
    ],
  },
  {
    title: "Η πρώτη σου μέρα στο σχολείο",
    images: [memoryImages.school],
    items: [
      {
        label: "Σήμερα πήγες για πρώτη φορά σχολείο:",
        answer:
          "Στις 10 Σεπτεμβρίου 2025, σε κοίταζα να φεύγεις και ένιωθα περηφάνια και συγκίνηση μαζί.",
      },
      {
        label: "Εσύ έδειχνες:",
        answer:
          "Λίγο διστακτική στην αρχή, αλλά στο τέλος γύρισες με χαμόγελο.",
      },
      {
        label: "Η σκέψη που δεν έφυγε από το μυαλό μου:",
        answer:
          "Μεγαλώνεις… και το κάνεις υπέροχα.",
      },
      {
        label: "Όταν σε ξαναείδα:",
        answer:
          "Ήθελα απλώς να σε πάρω αγκαλιά και να σου πω πόσο περήφανη είμαι για σένα.",
      },
    ],
  },
];

const storyFields: StoryField[] = [
  { label: "Όνομα παιδιού:", answer: "Ελπίδα" },
  { label: "Χρώμα μαλλιών:", answer: "ξανθά" },
  { label: "Χρώμα ματιών:", answer: "καφέ" },
  { label: "Αγαπημένο χρώμα:", answer: "κόκκινο" },
  { label: "Αγαπημένο ζώο:", answer: "μονόκερος" },
  { label: "Αγαπημένα πράγματα:", answer: "θάλασσα, χορός και μπαλόνια" },
  {
    label: "Μια όμορφη ανάμνηση:",
    answer:
      "Μπάνιο στη θάλασσα με τη μαμά, τον μπαμπά και τα ξαδέρφια μου.",
  },
  {
    label: "Μήνυμα από τη μαμά:",
    answer:
      "Είσαι ικανή για τα πάντα, αρκεί να το θες. Θα σ’ αγαπώ για πάντα.",
  },
];

const storyPages: StoryPage[] = [
  {
    title: "Στον κήπο της Ελπίδας",
    image: storyImages.garden,
    text: [
      "Η Ελπίδα έπαιζε στον κήπο του σπιτιού της, κρατώντας το κόκκινο μπαλόνι της.",
      "Τα ξανθά της μαλλιά έλαμπαν στον ήλιο και τα καφέ της μάτια κοιτούσαν τον ουρανό γεμάτα χαρά.",
    ],
  },
  {
    title: "Το μπαλόνι φεύγει",
    image: storyImages.balloonLost,
    text: [
      "Ξαφνικά, ένας μικρός αέρας πήρε το μπαλόνι ψηλά.",
      "Η Ελπίδα άπλωσε το χέρι της, αλλά το κόκκινο μπαλόνι πέταξε έξω από τον κήπο.",
    ],
  },
  {
    title: "Το δάσος των χρωμάτων",
    image: storyImages.forestAlone,
    text: [
      "Η Ελπίδα άρχισε να τρέχει πίσω του και βρέθηκε μπροστά σε ένα πολύχρωμο δάσος.",
      "Για μια στιγμή ήταν μόνη της, αλλά η καρδιά της ήθελε να βρει το μπαλόνι της.",
    ],
  },
  {
    title: "Ο μονόκερος",
    image: storyImages.unicornMeet,
    text: [
      "Τότε γύρισε πίσω και είδε έναν μονόκερο να στέκεται ήρεμα μπροστά στο δάσος.",
      "Η Ελπίδα χαμογέλασε ανακουφισμένη. Δεν ήταν πια μόνη.",
    ],
  },
  {
    title: "Όταν σκοτείνιασε",
    image: storyImages.darkForest,
    text: [
      "Καθώς περπατούσαν μαζί, το δάσος άρχισε να σκοτεινιάζει.",
      "Η Ελπίδα φοβήθηκε λίγο και κράτησε κοντά της τον μονόκερο.",
    ],
  },
  {
    title: "Τα λόγια της μαμάς",
    image: storyImages.lightPower,
    text: [
      "Τότε θυμήθηκε τα λόγια της μαμάς: Είσαι ικανή για τα πάντα, αρκεί να το θες. Θα σ’ αγαπώ για πάντα.",
      "Ένα ζεστό φως άρχισε να βγαίνει από μέσα της και το δάσος γέμισε ξανά χρώματα.",
    ],
  },
  {
    title: "Το κόκκινο μπαλόνι",
    image: storyImages.balloonCatch,
    text: [
      "Μπροστά σε ένα μεγάλο πολύχρωμο δέντρο, η Ελπίδα είδε το μπαλόνι της να λάμπει.",
      "Άπλωσε το χέρι της και το έπιασε, ενώ ο μονόκερος στεκόταν δίπλα της περήφανος.",
    ],
  },
  {
    title: "Σαν όνειρο",
    image: storyImages.dreamEnd,
    text: [
      "Ξαφνικά, η Ελπίδα άνοιξε τα μάτια της και βρέθηκε ξανά στον κήπο.",
      "Το κόκκινο μπαλόνι ήταν στο χέρι της. Ίσως ήταν όνειρο… ή ίσως μια μικρή μαγεία.",
    ],
  },
];

export default function PreviewPage() {
  const [book, setBook] = useState<BookMode>("home");
  const [page, setPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [flip, setFlip] = useState(false);

  const totalPages =
    book === "memory" ? memoryPages.length + 1 : book === "story" ? storyPages.length + 2 : 0;

  const goToPage = (next: number) => {
    if (book === "home") return;
    if (next < 0 || next >= totalPages) return;

    setFlip(true);
    setTimeout(() => {
      setPage(next);
      setFlip(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 520);
  };

  const openBook = (nextBook: BookMode) => {
    setBook(nextBook);
    setPage(0);
    setMenuOpen(false);
  };

  const goBookStart = () => {
    if (book === "home") return;
    goToPage(0);
  };

  return (
    <main style={pageStyle}>
      <style>{`
        @keyframes pageFlip {
          0% { transform: perspective(1400px) rotateY(0deg); filter: brightness(1); }
          45% { transform: perspective(1400px) rotateY(-64deg); filter: brightness(.88); }
          100% { transform: perspective(1400px) rotateY(0deg); filter: brightness(1); }
        }

        @media (max-width: 420px) {
          .book-layout {
            grid-template-columns: 118px 1fr !important;
            gap: 10px !important;
          }

          .book-main-image {
            width: 118px !important;
            height: 154px !important;
          }

          .book-small-image {
            width: 118px !important;
            height: 105px !important;
          }
        }
      `}</style>

      <button style={hamburgerStyle} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {menuOpen && (
        <div style={overlayStyle} onClick={() => setMenuOpen(false)}>
          <aside style={drawerStyle} onClick={(event) => event.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setMenuOpen(false)}>
              ×
            </button>

            <img src="/logo.png" alt="My Little Memory Box" style={drawerLogoStyle} />

            <button style={drawerButtonStyle} onClick={() => openBook("memory")}>
              Preview MemoryBox
            </button>

            <button style={drawerButtonStyle} onClick={() => openBook("story")}>
              Preview custom Παραμύθι
            </button>

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
            {book !== "home" && <LogoHeader onClick={goBookStart} />}

            {book === "home" && (
              <HomeChoice
                onMemory={() => openBook("memory")}
                onStory={() => openBook("story")}
              />
            )}

            {book === "memory" && page === 0 && <MemoryCover />}

            {book === "memory" &&
              page > 0 &&
              memoryPages[page - 1] && <MemoryBookPage page={memoryPages[page - 1]} />}

            {book === "story" && page === 0 && <StoryCover />}

            {book === "story" && page === 1 && <StoryTemplatePage />}

            {book === "story" &&
              page > 1 &&
              storyPages[page - 2] && <StoryBookPage page={storyPages[page - 2]} />}
          </div>
        </div>

        {book !== "home" && (
          <div style={navStyle}>
            <button style={navButtonStyle} onClick={() => goToPage(page - 1)} disabled={page === 0}>
              Προηγούμενη
            </button>

            <span style={counterStyle}>
              {page + 1}/{totalPages}
            </span>

            <button
              style={navButtonStyle}
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages - 1}
            >
              Επόμενη
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function LogoHeader({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={logoButtonStyle}>
      <img src="/logo.png" alt="My Little Memory Box" style={pageLogoStyle} />
    </button>
  );
}

function HomeChoice({
  onMemory,
  onStory,
}: {
  onMemory: () => void;
  onStory: () => void;
}) {
  return (
    <section style={homeStyle}>
      <img src="/logo.png" alt="My Little Memory Box" style={homeLogoStyle} />

      <h1 style={homeTitleStyle}>Διάλεξε preview</h1>

      <p style={homeTextStyle}>
        Ξεφύλλισε δύο διαφορετικά δείγματα: ένα προσωπικό Memory Box γεμάτο αληθινές
        αναμνήσεις και ένα custom παραμύθι βασισμένο στα στοιχεία του παιδιού.
      </p>

      <button style={choiceButtonStyle} onClick={onMemory}>
        Preview MemoryBox
      </button>

      <button style={choiceButtonStyle} onClick={onStory}>
        Preview custom Παραμύθι
      </button>
    </section>
  );
}

function MemoryCover() {
  return (
    <section style={coverStyle}>
      <img src="/logo.png" alt="My Little Memory Box" style={coverLogoStyle} />

      <div style={coverSubtitleStyle}>preview «τα πρώτα σου χρόνια ζωής»</div>

      <p style={introTextStyle}>
        Αυτό είναι ένα μικρό δείγμα από ένα ολοκληρωμένο Memory Box 14 σελίδων,
        φτιαγμένο για να κρατήσει ζωντανές τις πρώτες στιγμές, τις φωτογραφίες,
        την οικογένεια και τις αναμνήσεις των πρώτων χρόνων ζωής.
      </p>

      <div style={nameInputPreviewStyle}>
        <span style={nameLabelStyle}>όνομα παιδιού:</span>
        <TypingAnswer text="Ελπίδα" large />
      </div>
    </section>
  );
}

function MemoryBookPage({ page }: { page: MemoryPage }) {
  return (
    <section className="book-layout" style={bookLayoutStyle}>
      <div style={imageColumnStyle}>
        {page.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={page.title}
            className={index === 0 ? "book-main-image" : "book-small-image"}
            style={index === 0 ? memoryImageStyle : smallImageStyle}
          />
        ))}
      </div>

      <div style={textColumnStyle}>
        <h2 style={sectionTitleStyle}>{page.title}</h2>

        {page.items.map((item) => (
          <TemplateLine key={item.label} label={item.label} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

function TemplateLine({ label, answer }: MemoryItem) {
  return (
    <div style={templateLineStyle}>
      <div style={templateLabelStyle}>{label}</div>
      <div style={answerStyle}>
        <TypingAnswer text={answer} />
      </div>
    </div>
  );
}

function StoryCover() {
  return (
    <section style={storyCoverStyle}>
      <img src={storyImages.cover} alt="Το δάσος των χρωμάτων" style={storyCoverImageStyle} />
      <h1 style={storyTitleStyle}>Το δάσος των χρωμάτων</h1>
      <p style={storySubStyle}>ένα προσωποποιημένο παραμύθι για την Ελπίδα</p>
    </section>
  );
}

function StoryTemplatePage() {
  return (
    <section style={storyTemplateStyle}>
      <h2 style={sectionTitleStyle}>Στοιχεία παραμυθιού</h2>

      {storyFields.map((field) => (
        <TemplateLine key={field.label} label={field.label} answer={field.answer} />
      ))}
    </section>
  );
}

function StoryBookPage({ page }: { page: StoryPage }) {
  return (
    <section className="book-layout" style={bookLayoutStyle}>
      <div style={imageColumnStyle}>
        <img src={page.image} alt={page.title} className="book-main-image" style={storyImageStyle} />
      </div>

      <div style={textColumnStyle}>
        <h2 style={sectionTitleStyle}>{page.title}</h2>
        {page.text.map((paragraph) => (
          <p key={paragraph} style={paragraphStyle}>
            <TypingAnswer text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}

function TypingAnswer({ text, large = false }: { text: string; large?: boolean }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let index = 0;

    const timer = setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span style={large ? typingLargeStyle : undefined}>
      {shown}
      {shown.length < text.length && <span style={cursorStyle}>|</span>}
    </span>
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

const drawerButtonStyle: CSSProperties = {
  padding: "15px 16px",
  borderRadius: 18,
  background: "#FFFFFF",
  border: "1px solid #E8D8CF",
  color: "#5E4B42",
  fontWeight: 700,
  textAlign: "center",
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

const logoButtonStyle: CSSProperties = {
  display: "block",
  margin: "0 auto 10px",
  border: "none",
  background: "transparent",
  padding: 0,
};

const pageLogoStyle: CSSProperties = {
  width: 105,
  height: "auto",
};

const homeStyle: CSSProperties = {
  minHeight: 575,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  gap: 14,
};

const homeLogoStyle: CSSProperties = {
  width: "58%",
  maxWidth: 220,
  margin: "0 auto 10px",
};

const homeTitleStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: 32,
  color: "#6F5548",
  margin: 0,
};

const homeTextStyle: CSSProperties = {
  fontSize: 15,
  lineHeight: 1.65,
  color: "#6B564C",
  margin: "0 0 8px",
};

const choiceButtonStyle: CSSProperties = {
  border: "none",
  borderRadius: 18,
  padding: "15px",
  background: "#EAD7CF",
  color: "#5C4A42",
  fontWeight: 800,
  fontSize: 15,
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
  marginBottom: 18,
};

const introTextStyle: CSSProperties = {
  fontSize: 14,
  lineHeight: 1.65,
  color: "#6B564C",
  margin: "0 0 22px",
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

const typingLargeStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: 31,
  color: "#6F5548",
  fontStyle: "italic",
};

const bookLayoutStyle: CSSProperties = {
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

const templateLineStyle: CSSProperties = {
  marginBottom: 10,
};

const templateLabelStyle: CSSProperties = {
  fontSize: 12.5,
  fontWeight: 800,
  color: "#8B6F5A",
  marginBottom: 3,
};

const answerStyle: CSSProperties = {
  fontSize: 13.5,
  lineHeight: 1.48,
  color: "#5E4B42",
};

const paragraphStyle: CSSProperties = {
  fontSize: 13.5,
  lineHeight: 1.52,
  color: "#5E4B42",
  margin: "0 0 10px",
};

const cursorStyle: CSSProperties = {
  color: "#A67C3E",
  fontWeight: 900,
};

const storyCoverStyle: CSSProperties = {
  minHeight: 575,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const storyCoverImageStyle: CSSProperties = {
  width: "100%",
  borderRadius: 22,
  boxShadow: "0 12px 28px rgba(80,50,35,.18)",
  marginBottom: 18,
};

const storyTitleStyle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: 31,
  color: "#6F5548",
  fontStyle: "italic",
  margin: "0 0 8px",
};

const storySubStyle: CSSProperties = {
  fontSize: 14,
  color: "#7A5C4A",
  margin: 0,
};

const storyTemplateStyle: CSSProperties = {
  border: "1px solid #E8D8CF",
  borderRadius: 20,
  padding: 16,
  background: "#FFF8F3",
};

const storyImageStyle: CSSProperties = {
  width: 125,
  height: 210,
  objectFit: "cover",
  borderRadius: 18,
  boxShadow: "0 10px 24px rgba(80,50,35,.18)",
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
