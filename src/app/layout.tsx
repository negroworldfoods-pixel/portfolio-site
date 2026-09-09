import type { Metadata } from "next";
import { Belleza, EB_Garamond, Geist } from "next/font/google";
import "./globals.css";
import PreLoader from "@/components/loader/Preloader";
import { NavBar } from "@/components/home/Navigation";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});

const shareImage = "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/portfolio-metadata.jpg";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onuorah.negroworldfoods.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Onuorah Chukwudi Ndubisi | Founder & Restaurateur",
  description:
    "Executive portfolio and business innovations of Onuorah Chukwudi Ndubisi, founder of Negro World Foods.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
  openGraph: {
    title: "Onuorah Chukwudi Ndubisi | Founder & Restaurateur",
    description:
      "Executive portfolio and business innovations of Onuorah Chukwudi Ndubisi, founder of Negro World Foods.",
    url: "/",
    siteName: "Negro World Foods",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "Onuorah Chukwudi Ndubisi - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onuorah Chukwudi Ndubisi | Founder & Culinary Director",
    description:
      "Executive portfolio and business innovations of Onuorah Chukwudi Ndubisi, founder of Negro World Foods.",
    images: [shareImage],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${garamond.variable} ${belleza.variable} h-full antialiased`}
    >
      <body className="min-h-svh flex flex-col">
        <PreLoader />
        <Toaster richColors={true} position="top-center" />
        <main className="min-h-full flex flex-col">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
