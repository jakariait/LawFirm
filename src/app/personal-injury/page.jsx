import React from "react";
import NewsLogo from "@/component/ssr/NewsLogo";
import ServiceHero from "@/component/ssr/ServiceHero";
import OfficeLocation from "@/component/ssr/OfficeLocation";
import LegalHelp from "@/component/ssr/LegalHelp";
import WhyContentSection from "@/component/ssr/WhyContentSection";

export const metadata = {
  title: "Personal Injury | Powell Law Firm",
  description:
    "Our St Louis Car Accident Lawyers offer free case reviews. No fees unless we win. Contact Powell Law Firm today.",
};

const content = [
  {
    title: "\n" + "How Does A Personal Injury Case Work?",
    paragraphs: [
      "Any harm incurred in an accident is referred to as a personal injury. Thousands of accidents occur every day in the St. Louis area, with the majority of them resulting in minor injuries. Others cause some injuries that only require modest medical attention and do not interfere with your ability to play, work, or enjoy life.",

      "However, several accidents result in significant injury, which can affect every aspect of one's life, resulting in high medical bills, and possibly cause lifelong emotional and physical harm. These types of serious injuries necessitate the prompt attention of a skilled and established personal injury attorney from Powell Law Firm. Keep in mind that the choice of a lawyer is an important one and should not be based solely upon advertisements in St. Louis, Missouri, Illinois, and surrounding areas.",

      "Even slight injuries can have a negative impact on a person's mental wellbeing, physical health, and financial stability if they are involved in an accident. Broken bones, whiplash, and concussions may appear insignificant at the time, but they can have a significant and long-term impact on one's health and comfort. This is why it is a good idea to speak to a competent St. Louis personal injury lawyer about any injury. An attorney or lawyer from a reputable law firm can assess the current pain and suffering, forecast future issues, and determine whether legal action is warranted.",
    ],
  },
];

const Page = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="/personal-injury.avif"
        title="St Louis Personal Injury Lawyer"
        subtitle="An Honest Legal Team"
        paragraph="We understand how overwhelming the process for building a case can be. That's why our St Louis Personal Injury Lawyers offer a free case review to all clients!"
        buttonText="(314) 293-3777"
        buttonLink="tel:3142933777"
      />
      <NewsLogo />
      <OfficeLocation />
      <WhyContentSection imageSrc="/personinjury.avif" sections={content} />
      <LegalHelp />
    </div>
  );
};

export default Page;
