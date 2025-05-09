import React from "react";

import LegalHelp from "@/component/ssr/LegalHelp";
import Bio from "@/component/ssr/Bio";
import ImageGrid from "@/component/ssr/ImageGrid";

export const metadata = {
  title: "About Kenneth Powell Law Firm | Powell Law Firm",
  description:
    "Our St Louis Car Accident Lawyers offer free case reviews. No fees unless we win. Contact Powell Law Firm today.",
};

const imageData = [
  { src: "/img1.jpeg", alt: "Team at work" },
  { src: "/img2.jpeg", alt: "Courtroom" },
  { src: "/img3.jpeg" },
  {
    src: "/img4.jpeg",
  },
  {
    src: "/img5.jpeg",
  },
  {
    src: "/img6.jpeg",
  },
];

const Page = () => {
  return (
    <div>
      <Bio />
      <ImageGrid images={imageData} />
      <LegalHelp />
    </div>
  );
};

export default Page;
