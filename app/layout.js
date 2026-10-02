import "../app/globals.css"
import Navigations from "@/app/components/Navigations";
import Footer from "./components/Footer";
import {
  Cormorant_Garamond,
  Montserrat,
  Allura,
} from "next/font/google";
import { icons } from "lucide-react";



const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata = {
  metadataBase: new URL("https://yourwebsite.com"),

  title: {
    default: "Dr. Maya Reynolds | Family Counselling & Therapy",
    template: "%s | Dr. Maya Reynolds",
  },

  description:
    "If you’re feeling overwhelmed by anxiety, trauma, or burnout, you’re welcome to reach out. Dr. Maya Reynolds offers a warm, collaborative space for adults in Santa Monica and throughout California.",

  keywords: [
    "Dr. Maya Reynolds",
    "family counselling",
    "family therapy",
    "anxiety therapy",
    "trauma therapy",
    "stress management",
    "perfectionism therapy",
    "mental health counselling",
    "therapist",
  ],

  authors: [{ name: "Dr. Maya Reynolds" }],

  creator: "Dr. Maya Reynolds",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Dr. Maya Reynolds | Family Counselling & Therapy",
    description:
      "Compassionate counselling and therapy for anxiety, stress, trauma, perfectionism, and emotional well-being.",
    type: "website",
    siteName: "Dr. Maya Reynolds",
  },

  icons: {
    icon: "/LOGO.png",
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} ${allura.variable}`}>
        <Navigations />
        {children}
        <Footer />
      </body>
    </html>
  );
}

