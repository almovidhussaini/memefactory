
import React from "react";
import circle from "../../assets/icons/circle.png";
import doodles from "../../assets/icons/doodles.png";
import flywithus from "../../assets/icons/flywithus.png";
import girl from "../../assets/icons/girl.png";
import cloud from "../../assets/icons/cloud.png";
import Rating from "../../assets/icons/Rating.png";
import "../style/fonts.css";
import aboutus from "../../assets/icons/aboutus.png";
import aishwarya from "../../assets/icons/aishwarya.png"
import sanya from "../../assets/icons/sanya.png"
import jagjit from "../../assets/icons/jagjit.png"
import summit from "../../assets/icons/summit.png"

const Aboutus = () => {
  return (
    <div className="relative grid grid-cols-1 px-6 md:px-10 overflow-hidden">
      {/* Background Section */}
      <div
        className="h-[150vh] md:h-[80vh] bg-cover bg-center relative  overflow-hidden xl:overflow-visible"
        style={{
          backgroundImage: `url(${aboutus})`,
        }}
      >
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 p-3 justify-center items-center relative">
            <div className="mb-14">
              <img src={cloud} width="240px" height="180px" />
            </div>
            <div className="absolute " style={{top:'8rem', left:'20rem' }}>
              <img src={aishwarya}/>
            </div>
            <div className="absolute " style={{top:'25rem', left:'25rem' }}>
              <img src={sanya}/>
            </div>
            <div className="absolute " style={{top:'18rem', right:'27rem' }}>
              <img src={jagjit}/>
            </div>
            <div className="absolute " style={{top:'28rem', right:'20rem' }}>
              <img src={summit}/>
            </div>

            <div className="flex justify-center">
              <img src={circle} className="w-[300px] 2xl:w-[400px] h-[300px] 2xl:h-[400px]"/>
            </div>
            <div className="flex justify-center">
              <img src={Rating} width="240px" height="180px" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-3   pb-10">
            <div>
              <img src={flywithus} width="240px" height="180px" />
            </div>

            <div className="flex justify-center">
              <img src={girl} width="350px" height="300px" />
            </div>
            <div className="flex justify-center">
              <img src={doodles} width="240px" height="180px" />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 items-center gap-6 md:gap-10 px-4 md:px-10 mt-8 md:mt-10">
        <div className="w-full md:w-[70%]">
          <h1 className="text-2xl md:text-4xl text-[#F8EB47] font-['Winter_Minie'] mb-4 mt-4">
            ABOUT US
          </h1>
          <p className="font-['Winter_Minie'] text-xl md:text-2xl leading-relaxed">
            At EWL Memes Factory, we turn ideas into internet sensations! We
            specialize in crafting eye-catching meme token websites and
            executing innovative marketing strategies that make these coins
            stand out in the crowded crypto space.
          </p>
          <p className="mt-5 font-['Winter_Minie'] text-xl md:text-2xl">
            Join the factory and let's make crypto fun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

