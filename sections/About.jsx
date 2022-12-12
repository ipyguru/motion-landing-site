"use client";

import parse from "html-react-parser";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

import { about } from "../constants";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title={about.title} textStyles="text-center text-[24px]" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-secondary-white text-center font-normal text-[18px] sm:text-[24px] mt-2"
      >
        {parse(about.description)}
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[18px] object-contain mx-auto mt-7 animate-bounce]"
      />
    </motion.div>
  </section>
);

export default About;
