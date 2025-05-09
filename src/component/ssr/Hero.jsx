import React from "react";
import Image from "next/image";
import PrimaryButton from "@/../src/component/ssr/PrimaryButton";
import { FaStar } from "react-icons/fa"; // adjust the path if needed

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url('hero-bg.jpg')" }}
    >
      <div
        className={
          "xl:container xl:mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 "
        }
      >
        <div className={"w-full "}>
          <Image
            src="/hero-img.png"
            alt="Hero"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>

        <div
          className={
            "flex flex-col justify-center items-center md:items-start  gap-4"
          }
        >
          <div className={"flex items-center justify-center gap-4"}>
            <div className={"flex text-[#E6AE47]  items-center"}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h1 className={"text-[#E6AE47]"}>RATED 5-STARS ON GOOGLE</h1>
          </div>

          <h1 className={"text-white uppercase text-4xl md:text-5xl"}>
            Serious Injuries?
          </h1>
          <h1 className={"text-[#E6AE47] uppercase text-4xl"}>
            Serious Attorneys
          </h1>
          <p className={"text-white text-center md:text-left"}>
            If you or someone you love has been injured due to the negligence of
            someone else, you deserve to have your voice heard. You deserve
            justice.
          </p>

          <div className={"grid md:grid-cols-2 gap-4 pb-4"}>
            <PrimaryButton href="/contact-us">Free Consultation</PrimaryButton>

            <div className={"flex  items-center gap-4"}>
              <span className={"text-white"}>Play Video</span>
              <Image
                src="/play.png"
                alt="Play"
                width={50}
                height={50}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
