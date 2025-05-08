import React from "react";
import Image from "next/image";

const NewsLogo = () => {
  const logos = [
    { src: "/AP logo.png", alt: "AP" },
    { src: "/bbb logo.jpg", alt: "BBB" },
    { src: "/reuters logo.png", alt: "Reuters" },
    { src: "/Yahoo-News-Logo-Press.png", alt: "Yahoo" },
  ];

  return (
    <div className="bg-[#E6AE47] py-4">
      <div className="xl:container xl:mx-auto">
        {/* Horizontal Scroll for mobile and Grid for large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-x-auto no-scrollbar items-center justify-around">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="relative w-[80px] h-[40px] sm:w-[120px] sm:h-[50px] mx-auto"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="fill"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLogo;
