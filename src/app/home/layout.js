import SideNav from "../../components/sidenav/SideNav";
import "../globals.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HomeLayout({ children }) {
  return (
    <div className=" flex w-screen h-screen overflow-x-hidden overflow-y-hidden ">
      <div className="w-[280px] min-[2560px]:w-[450px] bg-black hidden md:block">
        <SideNav />
      </div>

      <div className=" flex w-full flex-col ">
        <div className="md:h-[70px] h-[60px] min-[2560px]:h-[120px] bg-black">
          <Header />
        </div>
        {children}
        <div className=" bg-black md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
