import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 xl:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-[#E6AE47]">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded col-span-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded col-span-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded col-span-2"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#E6AE47] text-white py-3 px-6 rounded col-span-2 hover:bg-[#c89334] cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info / Sidebar */}
        <div className="bg-[#1e1e1e] text-white p-8 shadow-md rounded-xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Free Consultation</h3>
          <p className="mb-6 text-gray-300">
            We’re here to help. Contact us today to schedule your free legal consultation.
          </p>
          <div className="mb-4">
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Email</p>
            <p className="text-gray-300">info@powelllawfirm.com</p>
          </div>
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
