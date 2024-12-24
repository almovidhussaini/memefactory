
import React from "react";
import talkbackground from "../../assets/icons/talkbackground.png";
import telegram from "../../assets/icons/telegram.png";
import x from "../../assets/icons/x.png";

const Talk = () => {
  return (
    <div
  className="flex flex-col justify-center items-center p-4 h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${talkbackground})`,
  }}
>
  <div className="w-full md:w-[80%] rounded-2xl h-auto md:h-[80%] flex flex-col md:flex-row overflow-hidden shadow-lg bg-gray-200">
    {/* Left Section */}
    <div className="p-6 md:p-10 bg-[#D9D9D9] flex flex-col justify-between md:w-1/2">
      <div>
        <h1 className="text-2xl md:text-3xl mt-4 md:mt-10">Let's Talk With Us</h1>
        <p className="mt-4 text-sm md:text-base">
          Questions, comments, or suggestions? Simply fill in the form, and
          we'll be in touch shortly.
        </p>
      </div>
      <div className="flex gap-6 mt-8">
        <img
          className="bg-yellow-300 p-2 rounded-full cursor-pointer"
          src={telegram}
          alt="Telegram"
          width="40px"
          height="50px"
        />
        <img
          className="bg-yellow-300 p-2 rounded-full cursor-pointer"
          src={x}
          alt="X"
          width="40px"
          height="50px"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="bg-white p-6 md:p-10 flex flex-col justify-between md:w-1/2">
      <form className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name*"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="md:mt-4 mt-2">
          <input
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="md:mt-4 mt-2">
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="md:mt-4 mt-2">
          <textarea
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg p-2 h-15 md:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          ></textarea>
        </div>
        <div className="md:mt-6 mt-0">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 rounded-lg hover:from-orange-500 hover:to-orange-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Talk;
