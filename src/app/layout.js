import "./globals.css";
import { Inter } from "next/font/google";

import { FocusContextProvider } from "../context/FocusContext";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import DarkmodeProvider from "../components/DarkmodeProvider/DarkmodeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FOCUS_BANK",
  description: "A bank for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black bg-gray-200   `}>
        <DarkmodeProvider>
          <AuthProvider>
            <FocusContextProvider>{children}</FocusContextProvider>
          </AuthProvider>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
