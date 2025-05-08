import React from "react";
import Testimonials from "@/component/ssr/Testimonials";
import Image from "next/image";

const cases = [
  {
    amount: "$1,000,000",
    title: "Car Accident",
    description:
      "Client was seriously injured by a negligent commercial driver.",
  },
  {
    amount: "$1,000,000",
    title: "Truck Accident",
    description:
      "Trucking Accident Client was seriously injured by a negligent 18 wheeler driver.",
  },
  {
    amount: "$6,000,000",
    title: "Wrongful Death",
    description:
      "We successfully represented the family of a man who was killed by a negligent commercial driver.",
  },
  {
    amount: "$100,000",
    title: "Car Accident",
    description:
      "Car Accident Client was seriously injured by a negligent Lyft driver",
  },
];

const stats = [
  {
    value: "5.0",
    label: "Star Rating",
  },
  {
    value: "1,000+",
    label: "Cases Served",
  },
  {
    value: "$$$",
    label: "Millions Won",
  },
];

const CasResults = () => {
  return (
    <>
      {/* Case Results Section */}
      <div
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: "url('marvelbg.jpg')" }}
      >
        <div className="xl:container xl:mx-auto flex flex-col items-center gap-14 relative z-10 pb-40">
          <h1 className="uppercase text-5xl font-bold text-center text-black">
            Case Results
          </h1>
          <div className="grid grid-cols-1 gap-6 w-5/6 md:grid-cols-2">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 border border-black p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-5xl font-bold text-[#E6AE47]">
                  {caseItem.amount}
                </p>
                <h2 className="text-2xl font-bold">{caseItem.title}</h2>
                <p className="text-lg text-gray-700">{caseItem.description}</p>
              </div>
            ))}
          </div>
          <Testimonials />
        </div>
      </div>

      {/* Floating Image + Stats */}
      <div className="z-20 relative bg-[#313131] px-4 pt-32 pb-16 flex flex-col items-center justify-center">
        <div className="relative bottom-45 w-full max-w-6xl aspect-[3/2] sm:aspect-[16/7] -mt-32 mb-12">
          <Image
            src="/Powell Team Photo.jpg"
            alt="Powell Team"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className=" -mt-50 flex items-center justify-center gap-4 ">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="md:text-xl font-medium text-white uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default CasResults;
