import React from "react";
import Link from "next/link";

const LegalHelp = () => {
  return (
    <div className="bg-[#E6AE47] text-white">
      <div className="xl:container xl:mx-auto p-10 ">
        <div className={"flex flex-col items-center justify-center gap-4"}>
          <h1 className={"uppercase text-5xl font-bold"}>Need Legal Help?</h1>

          <Link
            href="/contact-us"
            className="px-6 py-2 rounded-sm font-bold border-2 border-transparent bg-black hover:text-[#E6AE47] hover:border-[#E6AE47] transition-colors duration-400 ease-in-out cursor-pointer flex items-center justify-center"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalHelp;
