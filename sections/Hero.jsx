"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col justify-center items-center z-10 relative">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          ГОРОДСКАЯ ПОХОРОННАЯ
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center  z-10"
        >
          <h1 className={styles.heroHeading}>СЛУЖБА</h1>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3"
        >
          <div className="absolute w-full h-72 z-0 rounded-tl-[140px] -top-8" />
            <img
              src="/cover.jpg"
              className="relative w-full z-0 sm:h-[500px] h-[350px] object-cover rounded-tl-[140px]"
              alt="cover"
            />
            <a href="#explore">
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                <img
                  src="/arrow-down.svg"
                  alt="arrow-down"
                  className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                />
              </div>
            </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
