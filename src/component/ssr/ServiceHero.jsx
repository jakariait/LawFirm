import React from "react";
import PrimaryButton from "@/component/ssr/PrimaryButton";

const ServiceHero = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
  paragraph,
}) => {
  return (
    <div
      className="relative w-full md:h-[50vh] bg-center bg-cover flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="z-10 flex flex-col items-center justify-center gap-4 p-4 md:p-16 xl:p-24 text-center text-white xl:container xl:mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <h2 className="text-4xl md:text-5xl font-bold ">{subtitle}</h2>
        <p className={"text-lg md:text-xl"}>{paragraph}</p>
        <PrimaryButton href={buttonLink}>{buttonText}</PrimaryButton>
      </div>
    </div>
  );
};

export default ServiceHero;
