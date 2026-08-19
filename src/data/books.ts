import { Book } from "@/components/BookCard";
import betweenStars from "@/assets/covers/between-stars.jpg";
import lettersUnsent from "@/assets/covers/letters-unsent.jpg";
import paperBoats from "@/assets/covers/paper-boats.jpg";
import shadowGarden from "@/assets/covers/shadow-garden.jpg";
import amberHours from "@/assets/covers/amber-hours.jpg";
import adaJogjaDiBandung from "@/assets/covers/ada-jogja-di-bandung.jpg";

// Books data
export const books: Book[] = [
  {
    id: "ada-jogja-di-bandung",
    genre: "Fiksi · Romansa",
    releaseDate: "2026",
    title: "Ada Jogja di Bandung",
    author: "Ojan",
    coverUrl: adaJogjaDiBandung,
    googleDocsUrl: "https://docs.google.com/document/d/18fsNRtNheOfWQxqn_axfnNUfGLmDcoRYoDFiWWWaUfo/edit?usp=sharing",
    description: "A collection of thoughts gathered in the stillness before dawn.",
  },
  {
    id: "ars-mutandi",
    genre: "Fiksi · Refleksi",
    releaseDate: "2025",
    title: "Ars Mutandi",
    author: "Ojan",
    coverUrl: betweenStars,
    googleDocsUrl: "https://docs.google.com/document/d/1Y_oAdAlinq1RGTMMfMKEWrGiy1B1bzJb9MlO3O8HT1M/edit?usp=drivesdk",
    description: "Short stories about the spaces we occupy in others' lives.",
  },
  {
    id: "letters-unsent",
    genre: "Prosa · Surat",
    releaseDate: "2025",
    title: "Letters Unsent",
    author: "Ojan",
    coverUrl: lettersUnsent,
    googleDocsUrl: "https://docs.google.com/document/d/19aj5idgNEBKyfCeaXVtJt6AwpY1h9whHry3_IeHXSAA/edit?usp=sharing",
    description: "Words written but never delivered, now shared with strangers.",
  },
  {
    id: "paper-boats",
    genre: "Prosa · Memoar",
    releaseDate: "2024",
    title: "Paper Boats",
    author: "Ojan",
    coverUrl: paperBoats,
    googleDocsUrl: "https://docs.google.com/document/d/19aj5idgNEBKyfCeaXVtJt6AwpY1h9whHry3_IeHXSAA/edit?usp=sharing",
    description: "Childhood memories folded into stories that float away.",
  },
  {
    id: "shadow-garden",
    genre: "Puisi",
    releaseDate: "2024",
    title: "The Shadow Garden",
    author: "Ojan",
    coverUrl: shadowGarden,
    googleDocsUrl: "",
    description: "A meditation on the things that grow in darkness.",
  },
  {
    id: "amber-hours",
    genre: "Cerita Pendek",
    releaseDate: "2023",
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
