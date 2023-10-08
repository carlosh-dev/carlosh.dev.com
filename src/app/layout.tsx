import "./globals.css";
import "./reset.css";
import { Roboto_Mono } from "next/font/google";
import Providers from "./providers";
import Footer from "@/components/Foooter";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Carlos Henrique",
  description: "Keep learning. Keep growing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} animation h-screen min-h-screen w-screen bg-zinc-950 bg-cover`}
      >
        <Providers>{children}</Providers>
      </body>

      <Footer />
    </html>
  );
}
