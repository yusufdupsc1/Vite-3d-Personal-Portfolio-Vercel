import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.8)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={900}
        transitionSpeed={700}
        scale={1.02}
        gyroscope
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt={`${name} screenshot`}
            className='w-full h-full object-cover'
            loading='lazy'
            decoding='async'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915EFF]'
              aria-label={`View ${name} on GitHub`}
            >
              <img
                src={github}
                alt='GitHub icon'
                className='w-1/2 h-1/2 object-contain'
                loading='lazy'
                decoding='async'
              />
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[22px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] uppercase tracking-wide ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Selected work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A snapshot of multi-disciplinary engineering problems I've helped teams
          solve — from community platforms and learning tools to intelligent data
          pipelines. Each project is open-sourced so you can explore the
          implementation details.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${project.name}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
