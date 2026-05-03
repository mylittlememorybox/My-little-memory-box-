"use client";

import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import type { CSSProperties, ChangeEvent, FormEvent, ReactNode } from "react";

const WEBHOOK = "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55";

const handwriting = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

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

  useEffect(() => {
    const saved = localStorage.getItem("memoryData");
    if (saved) setValues(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("memoryData", JSON.stringify(values));
  }, [values]);

  const onChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const goToBookPage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= TOTAL_PAGES) return;
    setFlip(true);
    setTimeout(() => {
      setBookPage(nextPage);
      setFlip(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  };
  const pageStyle: CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden",
  background: "linear-gradient(180deg, #FCF6F1 0%, #F8EEE7 100%)",
  padding: "10px",
};

const bookShellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "430px",
  margin: "0 auto",
  backgroundColor: "#B9907A",
  borderRadius: "22px",
  padding: "8px",
  boxShadow: "0 14px 34px rgba(0,0,0,0.15)",
  overflow: "hidden",
};

const paperStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  backgroundColor: "#FFFDF8",
  borderRadius: "18px",
  padding: "14px",
  boxSizing: "border-box",
};

const sectionCardStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  borderRadius: "18px",
  padding: "14px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  padding: "12px",
  borderRadius: "14px",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "90px",
};

const twoColsStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
};

const uploadCardStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  padding: "12px",
};

const fileInputStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
};
