import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/provider/ClientProviders";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Digital Lending Portal",
  description: "by Keystone Bank Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/euclid-circular-a"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <ClientProviders>{children}</ClientProviders>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
