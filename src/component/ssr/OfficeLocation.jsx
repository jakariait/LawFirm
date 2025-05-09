"use client";
import Link from "next/link";

const OfficeLocation = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2  xl:container xl:mx-auto p-10  w-4xl">
        {/* Google Map */}
        <div className="h-80 md:h-full col-span-3">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.411243347731!2d-90.3323576846484!3d38.632202979612236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8c9dd6f813c27%3A0x6c253ea48b22e539!2s7750%20Clayton%20Rd%20%23102%2C%20St.%20Louis%2C%20MO%2063117%2C%20USA!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address Info */}
        <div className="col-span-2 flex flex-col justify-center space-y-4 text-white p-5 bg-[#313131] w-full md:w-3/4 mt-10 md:mt-0">
          <h2 className="text-2xl font-bold text-[#E6AE47]">Powell Law Firm</h2>

          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>7750 Clayton Road Suite 102</p>
            <p>Saint Louis, Missouri 63117</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hours</h3>
            <p>Sun–Sat: 24/7</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <Link
              href="tel:+13142933777"
              className="text-[#E6AE47] font-bold hover:underline"
            >
              (314) 293-3777
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
