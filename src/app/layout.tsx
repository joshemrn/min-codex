import "./globals.css";
import type { ReactNode } from "react";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Minyanim Organizer",
  description: "Organize daily minyanim and track attendance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1d4ed8" />
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Built for office minyanim · PWA-ready</footer>
      </body>
    </html>
  );
}
