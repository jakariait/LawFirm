import React from "react";
import Image from "next/image";
import PrimaryButton from "@/component/ssr/PrimaryButton";

const Service = () => {
  return (
    <div className="bg-[#313131] text-white">
      <div className="xl:container xl:mx-auto p-4 md:p-0">
        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2">
            <Image
              src="/lawyer.jpg"
              alt="Personal Injury Lawyer"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 p-4 md:p-16">
            <h2 className="text-3xl font-bold text-[#E6AE47]">
              SERIOUS INJURIES CALL FOR SERIOUS LAWYERS.
            </h2>
            <p>
              As one of the premier personal injury attorneys in Missouri,
              Powell Law Firm works tirelessly for clients who have been injured
              through no fault of their own.
            </p>
            <p>
              If you or someone you love has been injured due to the negligence
              of another person, business, hospital, government, or other
              agency, you deserve to have your voice heard and to get
              compensated for your injuries. You deserve justice.
            </p>
            <p>
              Powell Law Firm knows the impact that personal injury cases can
              have on a person’s life. They have the compassion and resources to
              help when you need it most.
            </p>
            <PrimaryButton> Personal Injury </PrimaryButton>
          </div>
        </div>

        {/* Section 2: Image Right, Text Left */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start ">
          <div className="w-full md:w-1/2">
            <Image
              src="/justige.jpg" // Replace with another image
              alt="Justice and Compensation"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 p-4 md:p-16">
            <h2 className="text-3xl font-bold text-[#E6AE47]">
              GET JUSTICE FOR YOUR CAR ACCIDENT.
            </h2>
            <p>
              GET JUSTICE FOR YOUR CAR ACCIDENT. If you or a loved one has been
              in a car accident, quickly contacting an attorney like Powell Law
              Firm can make a big difference in the outcome of your case.
            </p>
            <p>
              After an accident, there are steps you should take to protect your
              health and your rights. At Powell Law Firm, we relentlessly fight
              for the rights of our clients who have experienced injury, pain,
              and suffering due to vehicle negligence of another party.
            </p>
            <p>
              If you’ve been in an accident, call Powell Law Firm immediately
              for a case analysis. Let Powell Law Firm fight for your rights and
              the compensation you deserve.
            </p>
            <PrimaryButton> Car Accident </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
