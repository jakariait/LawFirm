import React from "react";
import { FaStar } from "react-icons/fa"; // Make sure to install react-icons

const testimonials = [
  {
    message: `Was helped even though I wasn’t a client. A simple call from them, to the party I am dealing with, just may have solved my problem. I would use this firm in a heartbeat if I ever needed help.`,
    category: "Personal Injury",
  },
  {
    message: `Kenny Powell has a bright legal mind which he relentlessly puts to work to best represent his clients. He is responsive to his clients' needs and is aggressive in helping them secure their goals.`,
    category: "Personal Injury",
  },
  {
    message: `Friendly experienced lawyer who care about their potential clients needs. Honest and straight-forward. Great place to go to get honest legal assistance! Would and have recommended again. Thanks!`,
    category: "",
  },
  {
    message: `I really appreciate the Powell Law Firm they are a great company I highly recommend them if you have any questions about them you can just reach out to them all cases. They are A++ Kenny and his team.`,
    category: "Personal Injury",
  },
  {
    message: `The Powell Law Firm is nothing short of excellence and quality. In fact they go beyond that, if you're looking for quality, efficiency, and excellence you've come to the right place.`,
    category: "Personal Injury",
  },
  {
    message: `Kenneth was very personable and available to personally assist me when necessary. I truly appreciate all the hard work Powell Law Firm. This was not an easy case but you got results quickly! Thank you!`,
    category: "Car Accident",
  },
];

const TestimonialCard = ({ message, category }) => (
  <div className="border-2 border-[#E6AE47] rounded-xl p-4 flex flex-col gap-5">
    <div className="flex text-[#E6AE47] text-xl items-center justify-center">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
    <p className="text-gray-700 ">{message}</p>
    {category && (
      <span className="text-xs text-[#E6AE47] font-semibold uppercase flex items-center justify-center">
        — {category} —
      </span>
    )}
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="xl:container xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} message={t.message} category={t.category} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
