import Hero from "@/component/ssr/Hero";
import NewsLogo from "@/component/ssr/NewsLogo";
import CasResults from "@/component/ssr/CasResults";
import Service from "@/component/ssr/Service";
import LegalHelp from "@/component/ssr/LegalHelp";

export default function Home() {
  return (
    <div>
      <Hero/>
      <NewsLogo/>
      <CasResults/>
      <Service/>
      <LegalHelp/>
    </div>
  );
}
