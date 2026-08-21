import { Book } from "@/components/BookCard";
import arsMutandi from "@/assets/covers/ars-mutandi.png";
import lettersUnsent from "@/assets/covers/letters-unsent.jpg";
import paperBoats from "@/assets/covers/paper-boats.jpg";
import shadowGarden from "@/assets/covers/shadow-garden.jpg";
import amberHours from "@/assets/covers/amber-hours.jpg";
import adaJogjaDiBandung from "@/assets/covers/ada-jogja-di-bandung.jpg";

// Books data
export const books: Book[] = [
  {
    id: "ada-jogja-di-bandung",
    genre: "Fiction · Romance",
    releaseDate: "April 2026",
    title: "Ada Jogja di Bandung",
    author: "Ojan",
    coverUrl: adaJogjaDiBandung,
    googleDocsUrl: "https://docs.google.com/document/d/18fsNRtNheOfWQxqn_axfnNUfGLmDcoRYoDFiWWWaUfo/edit?usp=sharing",
    description: "What if the person who left you was the person who would always accompany you when you were in a coma?",
  },
  {
    id: "ars-mutandi",
    genre: "Self improvement · Reflection",
    releaseDate: "August 2026",
    title: "Ars Mutandi",
    author: "Ojan",
    coverUrl: arsMutandi,
    googleDocsUrl: "https://docs.google.com/document/d/1Ts3NJaeTZlsiAAwZlLqon5zp4QkoBccaCPq47-iAH8Q/edit?usp=drivesdk",
    description: "How to change without losing yourself? Adaptation is an art.",
  },
  {
    id: "letters-unsent",
    genre: "Prosa · Surat",
    releaseDate: "Coming soon",
    title: "Letters Unsent",
    author: "Ojan",
    coverUrl: lettersUnsent,
    googleDocsUrl: "https://docs.google.com/document/d/19aj5idgNEBKyfCeaXVtJt6AwpY1h9whHry3_IeHXSAA/edit?usp=sharing",
    description: "Words written but never delivered, now shared with strangers.",
  },
  {
    id: "paper-boats",
    genre: "Prosa · Memoar",
    releaseDate: "Coming soon",
    title: "Paper Boats",
    author: "Ojan",
    coverUrl: paperBoats,
    googleDocsUrl: "https://docs.google.com/document/d/19aj5idgNEBKyfCeaXVtJt6AwpY1h9whHry3_IeHXSAA/edit?usp=sharing",
    description: "Childhood memories folded into stories that float away.",
  },
  {
    id: "shadow-garden",
    genre: "Puisi",
    releaseDate: "Coming soon",
    title: "The Shadow Garden",
    author: "Ojan",
    coverUrl: shadowGarden,
    googleDocsUrl: "",
    description: "A meditation on the things that grow in darkness.",
  },
  {
    id: "amber-hours",
    genre: "Cerita Pendek",
    releaseDate: "Coming soon",
    title: "Amber Hours",
    author: "Ojan",
    coverUrl: amberHours,
    googleDocsUrl: "https://docs.google.com/document/d/19aj5idgNEBKyfCeaXVtJt6AwpY1h9whHry3_IeHXSAA/edit?usp=sharing",
    description: "Stories suspended in time, like insects in ancient resin.",
  },
];

export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};
