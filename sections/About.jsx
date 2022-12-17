"use client";

import parse from "html-react-parser";

import { motion } from "framer-motion";
import Image from "next/image";

import { TitleText } from "../components";
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
      <TitleText title={about.title} />
      
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`${styles.fontNormal} pt-4 text-justify`}
      >
        {parse(about.description)}
      </motion.p>

    </motion.div>
  </section>
);

export default About;
