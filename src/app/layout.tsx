import type { Metadata } from "next";
import { PreferencesProvider } from "@/contexts/preferences-context";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { AppFooter } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AdaptLearn - The future of online learning",
  description: "An inclusive and accessible online learning platform that adapts to your needs. Explore courses in programming, design, science, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <PreferencesProvider>
          {children}
          <AppFooter />
          <Toaster />
        </PreferencesProvider>
      </body>
    </html>
  );
}
