import React from "react";
import NewsLogo from "@/component/ssr/NewsLogo";
import ServiceHero from "@/component/ssr/ServiceHero";
import OfficeLocation from "@/component/ssr/OfficeLocation";
import LegalHelp from "@/component/ssr/LegalHelp";
import WhyContentSection from "@/component/ssr/WhyContentSection";

const content = [
  {
    title:
      "Is It Worth Getting a Lawyer for a Car Accident? What if It's Minor?",
    paragraphs: [
      "It doesn't matter if the accident is minor or if the people involved were severely injured. In St Louis, drivers should get an attorney if they are thinking about going to court in order to get an appropriate settlement",
      "If they meet the specific circumstances to file a claim, then a lawyer could help them get the best result possible when they're going to the courthouse.",
      "People who need a St Louis car accident attorney can contact Powell Law Firm for more information and specialized assistance.",
    ],
  },
  {
    title: "What Is the Average Settlement for a Car Accident in Missouri?",
    paragraphs: [
      "There is not a specific average settlement for a car crash happening in St Louis, MO because they include many different specific aspects.",
      "A settlement could range from $5,000 to $1 million, and it all depends on things like whether or not the person at fault was a drunk driver, was negligent, etc.",
    ],
  },
];
export const metadata = {
  title: "Car Accident | Powell Law Firm",
  description:
    "Our St Louis Car Accident Lawyers offer free case reviews. No fees unless we win. Contact Powell Law Firm today.",
};

const Page = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="/car-accident.avif"
        title="St Louis Car Accident Lawyer:"
        subtitle="Zero Fees Unless We Win"
        paragraph="We understand how overwhelming the process for building a case can be. That's why our St Louis Car Accident Lawyers offer a free case review to all clients!"
        buttonText="(314) 293-3777"
        buttonLink="tel:3142933777"
      />
      <NewsLogo />
      <OfficeLocation />
      <WhyContentSection imageSrc="/caraccident.avif" sections={content} />
      <LegalHelp />
    </div>
  );
};

export default Page;
