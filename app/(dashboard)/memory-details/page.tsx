"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ChangeEvent, FormEvent, ReactNode } from "react";

const WEBHOOK = "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55";

type FormValues = {
  childName: string;
  firstHold: string;
  weight: string;
  height: string;
  fromHospital: string;
  firstHomeMoments: string;
  firstSmile: string;
  parents: string;
  unclesAunts: string;
  grandparentsGodparents: string;
  chosenFamilyFriends: string;
  familyValues: string;
  firstTooth: string;
  sleepRitual: string;
  crawlingFirstTime: string;
  stoodUpFirstTime: string;
  firstFall: string;
  ranToMe: string;
  hardDay: string;
  silentBreak: string;
  harderThanExpected: string;
  iContinuedBecause: string;
  proudMoment: string;
  smallButHuge: string;
  endlessHug: string;
  thisIsHappiness: string;
  birthdayAge: string;
  birthdayCakeWith: string;
  birthdayLearned: string;
  birthdayUnforgettableMoment: string;
  birthdayWish: string;
  firstPlayWithKids: string;
  firstFriendship: string;
  excitement: string;
  fear: string;
  iRealizedYouAreGrowing: string;
  firstSchoolDay: string;
  schoolHowIFelt: string;
  schoolHowYouLooked: string;
  schoolWhenILeftYou: string;
  schoolThoughtInMind: string;
  schoolWhenISawYouAgain: string;
  thoughtForYou: string;
  finalThought: string;
  letterForYou: string;
  finalClosing: string;
};

type FileGroups = {
  firstMomentsMedia: File[];
  discoveriesMedia: File[];
  firstStepsMedia: File[];
  emotionalMomentsMedia: File[];
  birthdayMedia: File[];
  socialMomentsMedia: File[];
  schoolMedia: File[];
  photoPageMedia: File[];
  finalThoughtMedia: File[];
};

const initialValues: FormValues = {
  childName: "",
  firstHold: "",
  weight: "",
  height: "",
  fromHospital: "",
  firstHomeMoments: "",
  firstSmile: "",
  parents: "",
  unclesAunts: "",
  grandparentsGodparents: "",
  chosenFamilyFriends: "",
  familyValues: "",
  firstTooth: "",
  sleepRitual: "",
  crawlingFirstTime: "",
  stoodUpFirstTime: "",
  firstFall: "",
  ranToMe: "",
  hardDay: "",
  silentBreak: "",
  harderThanExpected: "",
  iContinuedBecause: "",
  proudMoment: "",
  smallButHuge: "",
  endlessHug: "",
  thisIsHappiness: "",
  birthdayAge: "",
  birthdayCakeWith: "",
  birthdayLearned: "",
  birthdayUnforgettableMoment: "",
  birthdayWish: "",
  firstPlayWithKids: "",
  firstFriendship: "",
  excitement: "",
  fear: "",
  iRealizedYouAreGrowing: "",
  firstSchoolDay: "",
  schoolHowIFelt: "",
  schoolHowYouLooked: "",
  schoolWhenILeftYou: "",
  schoolThoughtInMind: "",
  schoolWhenISawYouAgain: "",
  thoughtForYou: "",
  finalThought: "",
  letterForYou: "",
  finalClosing: "",
};

const initialFiles: FileGroups = {
  firstMomentsMedia: [],
  discoveriesMedia: [],
  firstStepsMedia: [],
  emotionalMomentsMedia: [],
  birthdayMedia: [],
  socialMomentsMedia: [],
  schoolMedia: [],
  photoPageMedia: [],
  finalThoughtMedia: [],
};

const TOTAL_PAGES = 15;

function names(files: File[]) {
  return files.map((file) => file.name).join(", ");
}

export default function MemoryDetailsPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [files, setFiles] = useState<FileGroups>(initialFiles);
  const [bookPage, setBookPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("memoryData");
    if (saved) {
      setValues(JSON.parse(saved) as FormValues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("memoryData", JSON.stringify(values));
  }, [values]);

  const onChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const onFileChange =
    (field: keyof FileGroups) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(event.target.files || []);
      setFiles((prev) => ({
        ...prev,
        [field]: selected,
      }));
    };

  const goToBookPage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= TOTAL_PAGES) return;

    setFlip(true);

    setTimeout(() => {
      setBookPage(nextPage);
      setFlip(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 430);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("memoryData", JSON.stringify(values));

    try {
      setStatus("sending");
      setErrorMessage("");

      const payload = {
        ...values,
        firstMomentsMedia_names: names(files.firstMomentsMedia),
        discoveriesMedia_names: names(files.discoveriesMedia),
        firstStepsMedia_names: names(files.firstStepsMedia),
        emotionalMomentsMedia_names: names(files.emotionalMomentsMedia),
        birthdayMedia_names: names(files.birthdayMedia),
        socialMomentsMedia_names: names(files.socialMomentsMedia),
        schoolMedia_names: names(files.schoolMedia),
        photoPageMedia_names: names(files.photoPageMedia),
        finalThoughtMedia_names: names(files.finalThoughtMedia),
        submittedAt: new Date().toISOString(),
        source: "mylittlememorybox.gr",
        formType: "memory-details",
      };

      const response = await fetch(WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Αποτυχία αποστολής.");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Κάτι πήγε στραβά στην αποστολή. Δοκίμασε ξανά.");
    }
  };

  if (status === "success") {
    return (
      <main style={pageStyle}>
        <div style={bookShellStyle}>
          <div style={paperStyle}>
            <BookLogo onClick={() => setBookPage(0)} />

            <div style={successCardStyle}>
              <div style={successEmojiStyle}>💛</div>

              <h1 style={successTitleStyle}>Η ιστορία σας στάλθηκε</h1>

              <p style={successTextStyle}>
                Τα στοιχεία σου καταχωρήθηκαν με επιτυχία και είναι έτοιμα για το επόμενο στάδιο δημιουργίας του παραμυθιού σας.
              </p>

              <button
                type="button"
                style={primaryButtonStyle}
                onClick={() => setStatus("idle")}
              >
                Επιστροφή στο βιβλίο
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <style>{`
        @keyframes realisticFlip {
          0% {
            transform: perspective(900px) rotateY(0deg);
            opacity: 1;
            box-shadow: inset 8px 0 16px rgba(120,80,50,0.08);
          }
          42% {
            transform: perspective(900px) rotateY(-42deg);
            opacity: 0.78;
            box-shadow: inset 34px 0 42px rgba(90,55,35,0.22);
          }
          100% {
            transform: perspective(900px) rotateY(0deg);
            opacity: 1;
            box-shadow: inset 8px 0 16px rgba(120,80,50,0.08);
          }
        }
      `}</style>

      <form onSubmit={submit} style={bookShellStyle}>
        <div
          style={{
            ...paperStyle,
            animation: flip ? "realisticFlip 0.43s ease" : "none",
          }}
        >
          {bookPage !== 0 && <BookLogo onClick={() => goToBookPage(0)} />}

          <div style={pageCounterStyle}>
            {bookPage === 0 ? "Εξώφυλλο" : `Σελίδα ${bookPage} / ${TOTAL_PAGES - 1}`}
          </div>

          {bookPage === 0 && (
            <div style={coverStyle}>
              <button type="button" onClick={() => goToBookPage(0)} style={coverLogoButtonStyle}>
                <img src="/logo.png" alt="My Little Memory Box" style={coverLogoStyle} />
              </button>

              <h1 style={coverTitleStyle}>
                memory box με τα πρώτα χρόνια της ζωής
              </h1>

              <input
                style={coverInputStyle}
                placeholder="Το όνομα του παιδιού"
                value={values.childName}
                onChange={onChange("childName")}
              />

              <button type="button" style={openButtonStyle} onClick={() => goToBookPage(1)}>
                Άνοιγμα βιβλίου
              </button>
            </div>
          )}

          {bookPage === 1 && (
            <Section badge="Οι πρώτες στιγμές" title="Ήσουν μια σταλίτσα...">
              <Field label="Η πρώτη φορά που σε κράτησα αγκαλιά">
                <textarea style={textareaStyle} value={values.firstHold} onChange={onChange("firstHold")} />
              </Field>

              <div style={storyTextStyle}>Ήσουν μια σταλίτσα...</div>

              <TwoCols>
                <Field label="Ζύγιζες μόνο">
                  <input style={inputStyle} value={values.weight} onChange={onChange("weight")} />
                </Field>

                <Field label="Είχες ύψος">
                  <input style={inputStyle} value={values.height} onChange={onChange("height")} />
                </Field>
              </TwoCols>

              <Field label="Επιστρέψαμε από το μαιευτήριο">
                <textarea style={textareaStyle} value={values.fromHospital} onChange={onChange("fromHospital")} />
              </Field>

              <Field label="Οι πρώτες στιγμές σου στο σπίτι μας ήταν">
                <textarea style={textareaStyle} value={values.firstHomeMoments} onChange={onChange("firstHomeMoments")} />
              </Field>

              <Field label="Η πρώτη φορά που χαμογέλασες">
                <textarea style={textareaStyle} value={values.firstSmile} onChange={onChange("firstSmile")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες & βίντεο από τις πρώτες σου στιγμές"
                files={files.firstMomentsMedia}
                onChange={onFileChange("firstMomentsMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 2 && (
            <Section badge="Οι άνθρωποί σου" title="Ο κόσμος σου">
              <Field label="Οι γονείς σου">
                <textarea style={textareaStyle} value={values.parents} onChange={onChange("parents")} />
              </Field>

              <Field label="Οι θείοι και οι θείες">
                <textarea style={textareaStyle} value={values.unclesAunts} onChange={onChange("unclesAunts")} />
              </Field>

              <Field label="Οι παππούδες και οι γιαγιάδες">
                <textarea style={textareaStyle} value={values.grandparentsGodparents} onChange={onChange("grandparentsGodparents")} />
              </Field>

              <Field label="Οι νονοί/ες σου και οι φίλοι που έγιναν οικογένεια">
                <textarea style={textareaStyle} value={values.chosenFamilyFriends} onChange={onChange("chosenFamilyFriends")} />
              </Field>

              <Field label="Οι αξίες που θέλουμε να σου δώσουμε σαν γονείς">
                <textarea style={textareaStyle} value={values.familyValues} onChange={onChange("familyValues")} />
              </Field>
            </Section>
          )}

          {bookPage === 3 && (
            <Section badge="Μικρές κατακτήσεις" title="Οι πρώτες σου ανακαλύψεις">
              <Field label="Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι)">
                <textarea style={textareaStyle} value={values.firstTooth} onChange={onChange("firstTooth")} />
              </Field>

              <Field label="Λάτρευες να σε νανουρίζω έτσι">
                <textarea style={textareaStyle} value={values.sleepRitual} onChange={onChange("sleepRitual")} />
              </Field>

              <Field label="Η πρώτη φορά που μπουσούλησες">
                <textarea style={textareaStyle} value={values.crawlingFirstTime} onChange={onChange("crawlingFirstTime")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες & βίντεο από τις πρώτες ανακαλύψεις"
                files={files.discoveriesMedia}
                onChange={onFileChange("discoveriesMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 4 && (
            <Section badge="Μεγαλώνεις" title="Τα πρώτα σου βήματα">
              <Field label="Η πρώτη φορά που σηκώθηκες όρθιο">
                <textarea style={textareaStyle} value={values.stoodUpFirstTime} onChange={onChange("stoodUpFirstTime")} />
              </Field>

              <Field label="Η πρώτη σου τούμπα">
                <textarea style={textareaStyle} value={values.firstFall} onChange={onChange("firstFall")} />
              </Field>

              <Field label="Η πρώτη φορά που έτρεξες προς το μέρος μου">
                <textarea style={textareaStyle} value={values.ranToMe} onChange={onChange("ranToMe")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες & βίντεο από τα πρώτα βήματα"
                files={files.firstStepsMedia}
                onChange={onFileChange("firstStepsMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 5 && (
            <Section badge="Αληθινές μέρες" title="Οι μέρες που δεν ήταν εύκολες">
              <Field label="Μια μέρα που ένιωσα ότι δεν τα κατάφερνα">
                <textarea style={textareaStyle} value={values.hardDay} onChange={onChange("hardDay")} />
              </Field>

              <Field label="Μια στιγμή που λύγισα (αλλά δεν το έδειξα)">
                <textarea style={textareaStyle} value={values.silentBreak} onChange={onChange("silentBreak")} />
              </Field>

              <Field label="Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα">
                <textarea style={textareaStyle} value={values.harderThanExpected} onChange={onChange("harderThanExpected")} />
              </Field>

              <Field label="Και παρ’ όλα αυτά... συνέχισα γιατί">
                <textarea style={textareaStyle} value={values.iContinuedBecause} onChange={onChange("iContinuedBecause")} />
              </Field>
            </Section>
          )}

          {bookPage === 6 && (
            <Section badge="Στιγμές καρδιάς" title="Οι στιγμές που με έκανες να νιώθω τα πάντα">
              <Field label="Η στιγμή που ένιωσα περήφανη για σένα">
                <textarea style={textareaStyle} value={values.proudMoment} onChange={onChange("proudMoment")} />
              </Field>

              <Field label="Κάτι μικρό που για μένα ήταν τεράστιο">
                <textarea style={textareaStyle} value={values.smallButHuge} onChange={onChange("smallButHuge")} />
              </Field>

              <Field label="Μια αγκαλιά που δεν ήθελα να τελειώσει">
                <textarea style={textareaStyle} value={values.endlessHug} onChange={onChange("endlessHug")} />
              </Field>

              <Field label='Η στιγμή που σκέφτηκα "αυτό είναι η ευτυχία"'>
                <textarea style={textareaStyle} value={values.thisIsHappiness} onChange={onChange("thisIsHappiness")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες & βίντεο ιδιαίτερων στιγμών"
                files={files.emotionalMomentsMedia}
                onChange={onFileChange("emotionalMomentsMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 7 && (
            <Section badge="Γιορτή" title="Tα γενέθλιά σου">
              <Field label="Σήμερα γίνεσαι ... ετών">
                <input style={inputStyle} value={values.birthdayAge} onChange={onChange("birthdayAge")} />
              </Field>

              <Field label="Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου">
                <textarea style={textareaStyle} value={values.birthdayCakeWith} onChange={onChange("birthdayCakeWith")} />
              </Field>

              <Field label="Κάτι που έμαθες">
                <textarea style={textareaStyle} value={values.birthdayLearned} onChange={onChange("birthdayLearned")} />
              </Field>

              <Field label="Μία στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά">
                <textarea style={textareaStyle} value={values.birthdayUnforgettableMoment} onChange={onChange("birthdayUnforgettableMoment")} />
              </Field>

              <Field label="Η ευχή μου για σένα">
                <textarea style={textareaStyle} value={values.birthdayWish} onChange={onChange("birthdayWish")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες & βίντεο γενεθλίων"
                files={files.birthdayMedia}
                onChange={onFileChange("birthdayMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 8 && (
            <Section badge="Έξω στον κόσμο" title="Τα πρώτα σου βήματα προς τον κόσμο">
              <Field label="Η πρώτη φορά που έπαιξες με άλλα παιδάκια">
                <textarea style={textareaStyle} value={values.firstPlayWithKids} onChange={onChange("firstPlayWithKids")} />
              </Field>

              <Field label='Η πρώτη σου "φιλία" όπως την είδα εγώ'>
                <textarea style={textareaStyle} value={values.firstFriendship} onChange={onChange("firstFriendship")} />
              </Field>

              <Field label="Κάτι που σε ενθουσίασε πολύ">
                <textarea style={textareaStyle} value={values.excitement} onChange={onChange("excitement")} />
              </Field>

              <Field label="Κάτι που σε φόβισε">
                <textarea style={textareaStyle} value={values.fear} onChange={onChange("fear")} />
              </Field>

              <Field label="Η στιγμή που κατάλαβα ότι μεγαλώνεις">
                <textarea style={textareaStyle} value={values.iRealizedYouAreGrowing} onChange={onChange("iRealizedYouAreGrowing")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες κοινωνικών στιγμών"
                files={files.socialMomentsMedia}
                onChange={onFileChange("socialMomentsMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 9 && (
            <Section badge="Μεγάλο βήμα" title="Η πρώτη σου μέρα στο σχολείο">
              <Field label="Σήμερα πήγες για πρώτη φορά σχολείο...">
                <textarea style={textareaStyle} value={values.firstSchoolDay} onChange={onChange("firstSchoolDay")} />
              </Field>

              <Field label="Και εγώ ένιωσα">
                <textarea style={textareaStyle} value={values.schoolHowIFelt} onChange={onChange("schoolHowIFelt")} />
              </Field>

              <Field label="Εσύ έδειχνες">
                <textarea style={textareaStyle} value={values.schoolHowYouLooked} onChange={onChange("schoolHowYouLooked")} />
              </Field>

              <Field label="Η στιγμή που σε άφησα">
                <textarea style={textareaStyle} value={values.schoolWhenILeftYou} onChange={onChange("schoolWhenILeftYou")} />
              </Field>

              <Field label="Η σκέψη που δεν έφυγε από το μυαλό μου">
                <textarea style={textareaStyle} value={values.schoolThoughtInMind} onChange={onChange("schoolThoughtInMind")} />
              </Field>

              <Field label="Όταν σε ξαναείδα">
                <textarea style={textareaStyle} value={values.schoolWhenISawYouAgain} onChange={onChange("schoolWhenISawYouAgain")} />
              </Field>

              <UploadBox
                title="Φωτογραφίες σχολείου"
                files={files.schoolMedia}
                onChange={onFileChange("schoolMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 10 && (
            <Section badge="Μικρή παύση" title="Μια σκέψη για σένα">
              <textarea
                style={{ ...textareaStyle, minHeight: "130px" }}
                value={values.thoughtForYou}
                onChange={onChange("thoughtForYou")}
              />
            </Section>
          )}

          {bookPage === 11 && (
            <Section badge="Αναμνήσεις σε εικόνες" title="Μια σελίδα με φωτογραφίες">
              <UploadBox
                title="Φωτογραφίες αυτής της σελίδας"
                files={files.photoPageMedia}
                onChange={onFileChange("photoPageMedia")}
                multiple
              />
            </Section>
          )}

          {bookPage === 12 && (
            <Section badge="Λίγο πριν το τέλος" title="Μια τελευταία σκέψη">
              <textarea
                style={{ ...textareaStyle, minHeight: "130px" }}
                value={values.finalThought}
                onChange={onChange("finalThought")}
              />

              <UploadBox
                title="Φωτογραφία για αυτή τη σελίδα"
                files={files.finalThoughtMedia}
                onChange={onFileChange("finalThoughtMedia")}
              />
            </Section>
          )}

          {bookPage === 13 && (
            <Section badge="Το πιο προσωπικό" title="Ένα γράμμα για εσένα">
              <textarea
                style={{ ...textareaStyle, minHeight: "220px" }}
                value={values.letterForYou}
                onChange={onChange("letterForYou")}
              />
            </Section>
          )}

          {bookPage === 14 && (
            <Section badge="Τέλος" title="Μια τελευταία φράση">
              <textarea
                style={{ ...textareaStyle, minHeight: "160px" }}
                value={values.finalClosing}
                onChange={onChange("finalClosing")}
              />

              {status === "error" && <div style={errorBoxStyle}>{errorMessage}</div>}

              <button type="submit" style={submitButtonStyle} disabled={status === "sending"}>
                {status === "sending" ? "Αποστολή..." : "Υποβολή της ιστορίας σας"}
              </button>
            </Section>
          )}

          {bookPage !== 0 && (
            <div style={bookNavStyle}>
              <button
                type="button"
                style={navButtonStyle}
                onClick={() => goToBookPage(bookPage - 1)}
                disabled={bookPage === 0}
              >
                Προηγούμενη
              </button>

              <button
                type="button"
                style={navButtonStyle}
                onClick={() => goToBookPage(bookPage + 1)}
                disabled={bookPage === TOTAL_PAGES - 1}
              >
                Επόμενη
              </button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
}

function BookLogo({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={logoButtonStyle}>
      <img src="/logo.png" alt="My Little Memory Box" style={logoStyle} />
    </button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function TwoCols({ children }: { children: ReactNode }) {
  return <div style={twoColsStyle}>{children}</div>;
}

function Section({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={sectionCardStyle}>
      <div style={sectionBadgeStyle}>{badge}</div>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <div style={dividerStyle}>✦ ✿ ✦</div>
      <div style={sectionBodyStyle}>{children}</div>
    </section>
  );
}

function UploadBox({
  title,
  files,
  onChange,
  multiple = false,
}: {
  title: string;
  files: File[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}) {
  return (
    <div style={uploadCardStyle}>
      <div style={uploadTitleStyle}>{title}</div>
      <div style={uploadTextStyle}>
        {files.length > 0
          ? `Επιλεγμένα αρχεία: ${names(files)}`
          : "Δεν έχουν επιλεγεί αρχεία ακόμα."}
      </div>

      <input
        type="file"
        accept="image/*,video/*"
        multiple={multiple}
        onChange={onChange}
        style={fileInputStyle}
      />
    </div>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #FCF6F1 0%, #F8EEE7 50%, #F5ECE4 100%)",
  padding: "10px 8px 28px",
  boxSizing: "border-box",
};

const bookShellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "390px",
  margin: "0 auto",
  backgroundColor: "#B9907A",
  borderRadius: "22px",
  padding: "8px",
  boxShadow: "0 14px 34px rgba(80,50,35,0.22)",
  boxSizing: "border-box",
};

const paperStyle: CSSProperties = {
  backgroundColor: "#FFFDF8",
  borderRadius: "18px",
  padding: "14px",
  minHeight: "580px",
  transformOrigin: "left center",
  boxShadow: "inset 8px 0 16px rgba(120,80,50,0.08)",
  boxSizing: "border-box",
};

const logoButtonStyle: CSSProperties = {
  border: "none",
  background: "transparent",
  display: "block",
  margin: "0 auto 10px",
  padding: 0,
  cursor: "pointer",
};

const logoStyle: CSSProperties = {
  width: "118px",
  height: "auto",
};

const pageCounterStyle: CSSProperties = {
  textAlign: "center",
  color: "#9B735F",
  fontSize: "12px",
  fontWeight: 700,
  marginBottom: "10px",
};

const coverStyle: CSSProperties = {
  minHeight: "540px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "18px 8px",
};

const coverLogoButtonStyle: CSSProperties = {
  border: "none",
  background: "transparent",
  padding: 0,
  marginBottom: "18px",
  cursor: "pointer",
};

const coverLogoStyle: CSSProperties = {
  width: "150px",
  height: "auto",
};

const coverTitleStyle: CSSProperties = {
  fontFamily: "cursive",
  fontSize: "29px",
  lineHeight: 1.18,
  color: "#6F5A50",
  margin: "0 0 24px",
  fontStyle: "italic",
};

const coverInputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "16px",
  border: "1px solid #D8C5B9",
  fontSize: "16px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
  textAlign: "center",
  marginBottom: "18px",
};

const openButtonStyle: CSSProperties = {
  width: "100%",
  border: "none",
  borderRadius: "16px",
  padding: "15px",
  backgroundColor: "#7D6457",
  color: "#fff",
  fontWeight: 800,
  fontSize: "15px",
  cursor: "pointer",
};

const sectionCardStyle: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  borderRadius: "18px",
  padding: "14px",
  border: "1px solid rgba(216,197,185,0.35)",
};

const sectionBadgeStyle: CSSProperties = {
  display: "inline-block",
  padding: "6px 11px",
  borderRadius: "999px",
  backgroundColor: "#F4E4DA",
  color: "#8B6F5A",
  fontSize: "12px",
  fontWeight: 600,
  marginBottom: "10px",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: "23px",
  color: "#7D6457",
  margin: 0,
  lineHeight: 1.15,
  fontFamily: "serif",
};

const dividerStyle: CSSProperties = {
  textAlign: "left",
  fontSize: "14px",
  color: "#C2A696",
  letterSpacing: "3px",
  margin: "6px 0 13px",
};

const sectionBodyStyle: CSSProperties = {
  display: "grid",
  gap: "10px",
};

const fieldStyle: CSSProperties = {
  display: "block",
};

const labelStyle: CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
  marginBottom: "6px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 13px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "15px",
  marginBottom: "8px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "88px",
  resize: "vertical",
};

const twoColsStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
};

const storyTextStyle: CSSProperties = {
  fontStyle: "italic",
  color: "#8A7B73",
  marginBottom: "8px",
  fontSize: "15px",
};

const uploadCardStyle: CSSProperties = {
  backgroundColor: "#FFF9F6",
  border: "1px dashed #D8C5B9",
  borderRadius: "16px",
  padding: "12px",
  marginTop: "8px",
};

const uploadTitleStyle: CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#6B564C",
  marginBottom: "6px",
};

const uploadTextStyle: CSSProperties = {
  fontSize: "12px",
  color: "#8A7F7A",
  marginBottom: "8px",
  lineHeight: "1.45",
};

const fileInputStyle: CSSProperties = {
  width: "100%",
  fontSize: "13px",
};

const bookNavStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
  marginTop: "14px",
  position: "sticky",
  bottom: "8px",
};

const navButtonStyle: CSSProperties = {
  flex: 1,
  border: "none",
  borderRadius: "15px",
  padding: "13px 10px",
  backgroundColor: "#E8D2C8",
  color: "#5E4B42",
  fontWeight: 800,
  fontSize: "14px",
  cursor: "pointer",
};

const submitButtonStyle: CSSProperties = {
  width: "100%",
  padding: "15px",
  borderRadius: "16px",
  border: "none",
  backgroundColor: "#EAD7CF",
  color: "#5C4A42",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  marginTop: "14px",
};

const errorBoxStyle: CSSProperties = {
  backgroundColor: "#FFF1EF",
  color: "#A14B42",
  border: "1px solid #F2C7C1",
  borderRadius: "14px",
  padding: "12px",
  marginTop: "12px",
  fontSize: "13px",
};

const successCardStyle: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  borderRadius: "24px",
  padding: "26px 16px",
  textAlign: "center",
};

const successEmojiStyle: CSSProperties = {
  fontSize: "36px",
  marginBottom: "10px",
};

const successTitleStyle: CSSProperties = {
  fontSize: "29px",
  color: "#7D6457",
  margin: "0 0 12px",
  fontFamily: "serif",
};

const successTextStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#7A6A62",
  margin: "0 auto 20px",
};

const primaryButtonStyle: CSSProperties = {
  display: "inline-block",
  padding: "13px 18px",
  borderRadius: "15px",
  backgroundColor: "#EAD7CF",
  color: "#5C4A42",
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
};
