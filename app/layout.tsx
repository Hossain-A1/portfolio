import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import { cn } from "@/lib/utils";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hossain Ahmed | Protfolio ",
  description: "Developer protfolio of Hossain A.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(bai_jamjuree.className, "bg-dark text-light")}
      >
        <Navber />
        {children}
      </body>
    </html>
  );
}
