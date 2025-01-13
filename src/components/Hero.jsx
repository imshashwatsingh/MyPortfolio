import React from "react";
import hero1 from "../assets/hero1.png";
import { styles } from "../styles";

const Hero = () => {
  return (
    <>
      <section className="w-full h-[120%] mx-auto pt-[90px] mb-0"> {/* Added pt-[90px] */}
        <div
          className={`${styles.paddingX} pt-5 pl-5 pr-5 pb-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-green-400" />
            <div className="w-1 sm:h-80 h-40 green-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-green-400">Shashwat Singh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-5 text-white-100`}>
              I focus on building responsive applications and leveraging
              technology to solve real-world problems.
              <br className="sm:block hidden" /> Beyond coding, I enjoy
              composing music, drumming, and exploring creative pursuits.
            </p>
          </div>
        </div>
        <div className={`${styles.paddingX} flex justify-center items-center`}>
          <img
            className="max-h-[70vh] object-contain mt-0"
            src={hero1}
            alt="hero"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
