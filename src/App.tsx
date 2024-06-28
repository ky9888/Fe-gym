import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/Types";
import Home from "./home";
import Benefits from "./benefits";
import OurClasses from "./ourClasses";
import ContactUs from "./contactUs";
import Footer from "./footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-gray-100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
       <Home setSelectedPage={setSelectedPage} />
       <Benefits setSelectedPage={setSelectedPage} />
       <OurClasses setSelectedPage={setSelectedPage} />
       <ContactUs setSelectedPage={setSelectedPage} />
       <Footer />
    </div>
    
  );
}

export default App;
