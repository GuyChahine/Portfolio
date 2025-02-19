import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "@/components/providers";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${roboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
