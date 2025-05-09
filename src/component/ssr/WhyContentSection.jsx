import React from "react";
import Image from "next/image";
import PrimaryButton from "@/component/ssr/PrimaryButton";

const WhyContentSection = ({ imageSrc, sections = [] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center justify-center p-6 xl:container xl:mx-auto">
      {/* Text Content */}
      <div className="flex flex-col gap-10">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <div className="flex flex-col gap-6 text-lg">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
        <PrimaryButton href="/contact-us">Free Consultation</PrimaryButton>
      </div>

      {/* Image */}
      <div className="relative w-full h-full hidden md:block min-h-[400px]">
        <Image
          src={imageSrc}
          alt="Section Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default WhyContentSection;
