import Footer from "@/components/layout/footer";
import { CalcContextProvider } from "@/context/calc-context";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Tip Calculator App",
  description:
    "This is a solution to the Tip Calculator App challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
  icons: "./images/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CalcContextProvider>{children}</CalcContextProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
