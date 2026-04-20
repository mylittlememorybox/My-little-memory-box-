import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>
        <div style={logoWrap}>
          <Link href="/" style={logoLink}>
            <img src="/logo.png" alt="My Little Memory Box" style={logo} />
          </Link>
        </div>

        <div style={banner}>
          Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
        </div>

        <Section title="Οι πρώτες σου στιγμές">
          <TwoCols
            left={
              <>
                <InfoLine label="Όνομα">Ελπίδα</InfoLine>
                <InfoLine label="Η πρώτη φορά που σε κράτησα">2 Ιουνίου 2025</InfoLine>
                <InfoLine label="Ζύγιζες μόνο">3,550 γρ</InfoLine>
                <InfoLine label="Είχες ύψος">51 πόντους</InfoLine>
                <InfoLine label="Επιστρέψαμε από το μαιευτήριο">
                  Πέντε μέρες μετά τη γέννησή σου
                </InfoLine>
                <InfoLine label="Οι πρώτες σου στιγμές στο σπίτι ήταν">
                  Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να προσαρμοστείς
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                  Ήταν στους 2 μήνες (ξετρελαθήκαμε)
                </InfoLine>
              </>
            }
            right={<Photo src="/preview/newborn.jpg.JPG?v=3" alt="Νεογέννητο" height={320} />}
          />
        </Section>

        <Section title="Ο κόσμος σου">
          <TwoCols
            left={
              <>
                <InfoLine label="Οι γονείς σου">Μαριάννα και Γιάννης</InfoLine>
                <InfoLine label="Οι παππούδες σου">
                  Από τον μπαμπά γιαγιά Ρίτσα και παππούς Μάκης, ενώ από τη μαμά γιαγιά Μαρία και παππούς Χάρης
                </InfoLine>
                <InfoLine label="Η νονά σου">Ανδριάνα</InfoLine>
                <InfoLine label="Οι φίλοι που έγιναν οικογένεια">
                  Χριστίνα φίλη μαμάς, Γεωργία φίλη μαμάς, Σπύρος φίλος μπαμπά και Ορέστης φίλος μπαμπά
                </InfoLine>
              </>
            }
            right={
              <Stack>
                <Photo src="/preview/family.jpg.JPG?v=3" alt="Οικογένεια" height={150} />
                <Photo src="/preview/grandparents.jpg.JPG?v=3" alt="Παππούδες" height={150} />
              </Stack>
            }
          />
        </Section>

        <Section title="Οι πρώτες σου ανακαλύψεις">
          <TwoCols
            left={
              <>
                <InfoLine label="Το πρώτο σου δοντάκι">
                  Ήταν στους 3 μήνες, τα δύο πρώτα δοντάκια τα κάτω
                </InfoLine>
                <InfoLine label="Λάτρευες να σε νανουρίζουμε έτσι">
                  Αγκαλίτσα και να σου τραγουδάω «νάνι νάνι το μωράκι μου»
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που μπουσούλησες">
                  Ήταν γύρω στους 7 μήνες, ξαφνικά
                </InfoLine>
              </>
            }
            right={
              <Stack>
                <Photo src="/preview/smile.jpg.JPG?v=3" alt="Χαμόγελο" height={150} />
                <Photo src="/preview/crown.jpg.jpg?v=3" alt="Μπουσούλημα" height={150} />
              </Stack>
            }
          />
        </Section>

        <Section title="Τα πρώτα σου βήματα προς τον κόσμο">
          <TwoCols
            left={
              <>
                <InfoLine label="Η πρώτη φορά που έπαιξες με άλλα παιδάκια">
                  Με περιέργεια στην αρχή και μετά με ασταμάτητο ενθουσιασμό
                </InfoLine>
                <InfoLine label='Η πρώτη σου "φιλία" όπως την είδα εγώ'>
                  Ήταν ένα παιχνίδι δίπλα δίπλα και πολλά μικρά γελάκια
                </InfoLine>
                <InfoLine label="Κάτι που σε ενθουσίασε πολύ">
                  Τα χρώματα, τα μπαλόνια και οι καινούριοι ήχοι
                </InfoLine>
              </>
            }
            right={
              <Photo src="/preview/social.jpg.jpg?v=3" alt="Παιχνίδι με παιδάκια" height={320} />
            }
          />
        </Section>

        <div style={ctaWrap}>
          <a href="/buy" style={cta}>
            Δημιούργησε το δικό σου Memory Box
          </a>
        </div>
      </div>
    </main>
  );
}
