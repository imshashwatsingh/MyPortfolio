import React from "react";
import {Tilt}  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// const About = () => {
//   return (
//     <>
//       <motion.div className=" mt-20" variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview</h2>
//       </motion.div>
//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px]
//          max-w-3xl leading-[30px]"
//       >
//         Hi, I'm Shashwat Singh, a passionate full stack developer, AI
//         enthusiast, and aspiring data scientist. I specialize in building
//         responsive web applications and crafting innovative solutions with
//         technologies like React, Node.js, Express, and PostgreSQL. With a strong
//         foundation in data analytics, SQL, and machine learning, I strive to
//         combine creativity and functionality to deliver impactful digital
//         experiences. I enjoy designing efficient software systems, exploring
//         artificial intelligence, and contributing to projects that make a
//         difference. When I'm not coding, you'll find me composing music,
//         drumming, or diving into story-driven games like The Last of Us. Let's
//         connect and build something amazing together!
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-20 ">
//         {services.map((service, index) => {
//           <ServiceCard key={service.title} index={index}  {...service} />;
//         })}
//       </div>
//     </>
//   );
// };

const About = () => {
  return (
    <>
      <motion.div className="pt-2 mt-4" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Shashwat Singh, a passionate full stack developer, AI
        enthusiast, and aspiring data scientist. I specialize in building
        responsive web applications and crafting innovative solutions with
        technologies like React, Node.js, Express, and PostgreSQL. With a strong
        foundation in data analytics, SQL, and machine learning, I strive to
        combine creativity and functionality to deliver impactful digital
        experiences. I enjoy designing efficient software systems, exploring
        artificial intelligence, and contributing to projects that make a
        difference. When I'm not coding, you'll find me composing music,
        drumming, or diving into story-driven games like The Last of Us. Let's
        connect and build something amazing together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.title} index={index} {...service} />
          );
        })}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
