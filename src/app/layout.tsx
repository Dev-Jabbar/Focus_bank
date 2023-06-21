import SideNav from "@/components/sidenav/SideNav";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FOCUS_BANK",
  description: "A bank for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex w-screen h-screen overflow-x-hidden ">
          <div className="w-[280px]">
            <SideNav />
          </div>

          <div className=" flex w-full flex-col ">
            <div className="h-[70px]">
              <Header />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
