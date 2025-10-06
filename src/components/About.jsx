import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../constants/profile";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    transitionSpeed={600}
    scale={1.02}
    gyroscope
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-8 px-10 min-h-[260px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
          loading='lazy'
          decoding='async'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 flex flex-col gap-8 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        <p>{profile.summary}</p>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <h3 className='text-white text-xl font-semibold mb-3'>Focus areas</h3>
            <ul className='ml-5 list-disc space-y-2'>
              {profile.focusAreas.map((item) => (
                <li key={item} className='text-secondary'>{item}</li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <div>
              <h3 className='text-white text-xl font-semibold mb-3'>Currently exploring</h3>
              <ul className='ml-5 list-disc space-y-2'>
                {profile.currentLearning.map((item) => (
                  <li key={item} className='text-secondary'>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-white text-xl font-semibold mb-3'>Ask me about</h3>
              <ul className='ml-5 list-disc space-y-2'>
                {profile.askMeAbout.map((item) => (
                  <li key={item} className='text-secondary'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
