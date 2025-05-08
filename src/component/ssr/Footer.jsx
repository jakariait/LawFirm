import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-12 pb-4">
      <div className="xl:container xl:mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#3A3A3A]">
        {/* Column 1: Firm Info */}
        <div className="flex flex-col gap-1 px-4">
          <h2 className="text-4xl font-bold text-[#E6AE47]">POWELL</h2>
          <h2 className="text-4xl font-bold text-[#E6AE47]">LAW</h2>
          <h2 className="text-4xl font-bold text-[#E6AE47]">FIRM</h2>
        </div>

        {/* Column 2: Personal Injury */}
        <div className="px-4">
          <h3 className="text-xl font-semibold mb-4 text-[#E6AE47]">Personal Injury</h3>
          <ul className="space-y-2">
            <li>St. Louis Personal Injury</li>
            <li>St. Louis Wrongful Death</li>
            <li>St. Louis Slip & Fall</li>
            <li>St. Louis Dog Bite</li>
            <li>St. Louis Workers Compensation</li>
          </ul>
        </div>

        {/* Column 3: Vehicle Accidents */}
        <div className="px-4">
          <h3 className="text-xl font-semibold mb-4 text-[#E6AE47]">Vehicle Accidents</h3>
          <ul className="space-y-2">
            <li>St. Louis Car Accident</li>
            <li>St. Louis Truck Accident</li>
            <li>St. Louis Motorcycle Accident</li>
            <li>St. Louis Bicycle Accident</li>
            <li>St. Louis Pedestrian Accident</li>
          </ul>
        </div>

        {/* Column 4: Address */}
        <div className="px-4">
          <h3 className="text-xl font-semibold mb-4 text-[#E6AE47]">Address</h3>
          <p>7750 Clayton Road Suite 102</p>
          <p>Saint Louis, Missouri 63117</p>
          <p className="mt-4">
            Call: <a href="tel:3144701374" className="text-[#E6AE47]">(314) 470-1374</a>
          </p>
          <p>Fax: (314) 786-0777</p>
          <p>Hours: 24/7</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Powell Law Firm. All rights reserved. <br />
        Created by{" "}
        <a
          href="https://buildwithjakaria.com"
          className="text-[#E6AE47] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jakaria
        </a>
      </div>

    </footer>
  );
};

export default Footer;
