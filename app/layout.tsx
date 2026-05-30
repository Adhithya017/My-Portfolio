import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adithya Acharya | Java Full-Stack Developer",
  description:
    "Java Full-Stack Developer with hands-on experience in Spring Boot, React.js, and MySQL. Skilled in building REST APIs, responsive web applications, and database-driven systems.",
  keywords: [
    "Adithya Acharya",
    "Java Developer",
    "Full-Stack Developer",
    "Spring Boot",
    "React.js",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Adithya Acharya" }],
  creator: "Adithya Acharya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adithyaacharya.dev",
    title: "Adithya Acharya | Java Full-Stack Developer",
    description:
      "Java Full-Stack Developer specializing in Spring Boot, React.js, and MySQL. Building secure, scalable software solutions.",
    siteName: "Adithya Acharya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya Acharya | Java Full-Stack Developer",
    description:
      "Java Full-Stack Developer specializing in Spring Boot, React.js, and MySQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="grid-background" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
