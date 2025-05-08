import Hero from "@/component/ssr/Hero";
import NewsLogo from "@/component/ssr/NewsLogo";
import CasResults from "@/component/ssr/CasResults";
import Navbar from "@/component/csr/Navbar";
import Service from "@/component/ssr/Service";
import LegalHelp from "@/component/ssr/LegalHelp";
import Footer from "@/component/ssr/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NewsLogo/>
      <CasResults/>
      <Service/>
      <LegalHelp/>
      <Footer/>
    </div>
  );
}
