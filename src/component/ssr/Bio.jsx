import React from "react";
import Image from "next/image";
import ImageGrid from "@/component/ssr/ImageGrid";

const sections = [
  {
    title: "Bar Admissions",
    items: ["Missouri", "Illinois", "South Carolina"],
  },
  {
    title: "EDUCATION",
    items: [
      "Saint Louis University School of Law, JD, May 2004",
      "University of Kansas, B.A.",
      "Psychology/Pre-Med University of Salamanca, Spain, Advanced Spanish Certificate 2000",
    ],
  },
  {
    title: "HONORS & AWARDS",
    items: [
      "Dean’s Scholarship, St. Louis University School of Law Faculty Fellow, St. Louis University School of Law",
      "Missouri Lawyers Media Diversity & Inclusion",
    ],
  },
];



const Bio = () => {
  return (
    <div className="xl:container xl:mx-auto p-6 grid grid-cols-1 md:grid-cols-7 gap-10">
      {/* Image & Side Info Section */}
      <div className="md:col-span-3 border-4 border-[#E6AE47]">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/1.avif"
            alt="Bio"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dynamic Info Sections */}
        <div className="bg-[#313131] text-white p-4">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h1 className="text-2xl uppercase font-bold">
                  {section.title}
                </h1>
                <ul className="list-disc pl-5">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="md:col-span-4 flex flex-col justify-center gap-4">
        <h1 className="text-[#E6AE47] font-bold text-3xl">KENNETH POWELL</h1>
        <div className="flex flex-col gap-1">
          <h2 className="uppercase font-semibold text-lg">Lawyer</h2>
          <span className="border-b-2 border-[#E6AE47] w-20"></span>
        </div>

        <div className="flex flex-col gap-6 mt-4 text-sm md:text-base">
          <p>
            Kenny Powell was born and raised in St. Louis, Missouri, and is a
            graduate of Ladue High School. He comes from a long line of civil
            rights activists. His Grandfather, Dr. Jerome Williams Sr., led
            numerous civil rights protests and his father sang in Dr. Martin
            Luther King Jr’s funeral.
          </p>
          <p>
            Kenny earned his bachelor’s degree from the University of Kansas
            (KU). While attending KU, he was the Captain of the Men’s tennis
            team and President of Omega Psi Phi Fraternity Inc. While competing
            in the Big 12 for Kansas Tennis, he received the honors of Jayhawk
            Scholar, First Team All Academic, and Big 12 Commissioner's Honor
            Roll respectively. In his final year of undergrad, Kenny spent 8
            months in Salamanca Spain where he earned his certificate in
            Advanced Spanish.
          </p>
          <p>
            Following undergrad, Kenny accepted a Dean’s Scholarship to attend
            the Saint Louis University School of Law. While at SLU Law, he
            specialized in negotiations and alternative dispute resolutions.
            After law school, Kenny was a licensed sports agent representing
            Major and Minor league baseball clients for 10 years.
          </p>
          <p>
            Attorney Kenny Powell currently focuses the majority of his legal
            practice on personal injury. His experience as a judicial intern in
            both the Missouri Court of Appeals and the United States District
            Court, give him a unique understanding of State and Federal law
            respectively. Mr. Powell enjoys treating every client, “as he would
            want to be treated” and will fight for your rights.
          </p>
          <p>
            Kenny loves spending time with his wife April, and their three
            daughters. When not in court, he enjoys being on the court. Kenny’s
            experience and skill as a tennis professional have helped countless
            St. Louis youth reach their potential and attain college
            scholarships. Prior to opening The Powell Law Firm, Kenny practiced
            law at a reputable plaintiff's civil litigation firm in St. Louis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
