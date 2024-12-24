
import React from "react";
import footer from "../../assets/icons/footer.png";
import telegram from "../../assets/icons/telegram.png";
import x from "../../assets/icons/x.png";
import robot from "../../assets/icons/robot.png";

const Footer = () => {
  return (
    <div
      className="bg-[#B4D4D3] h-screen bg-center bg-no-repeat flex items-center justify-center relative flex-col p-4"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "contain",
      }}
    >
      {/* Title Section */}
      <div className="text-center mt-24 md:mt-36">
        <h1 className="text-3xl md:text-5xl font-bold font-['Winter_Minie']">EWL</h1>
        <p className="text-lg md:text-2xl font-['Winter_Minie']">Memes factory</p>
      </div>

      {/* Icon Section */}
      <div className="flex mt-10 md:mt-20 space-x-3 md:space-x-6">
        <div className="p-2 bg-white rounded-xl shadow-md">
          <img
            src={telegram}
            alt="Telegram"
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </div>
        <div className="p-2 bg-white rounded-xl shadow-md">
          <img src={x} alt="X" className="h-10 w-10 md:h-12 md:w-12" />
        </div>
        <div className="p-2 bg-white rounded-xl shadow-md">
          <img
            src={robot}
            alt="Robot"
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
