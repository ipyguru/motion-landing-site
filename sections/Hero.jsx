"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

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
        <motion.h1
          variants={textVariant(0.3)}
          className={`z-10 ${styles.heroHeading}`}
        >
          <p className={`${styles.heroDText}`}>ГОРОДСКАЯ</p>ПОХОРОННАЯ СЛУЖБА
        </motion.h1>

        <div className="relative w-full md:-mt-5 -mt-3">
          <div className="absolute w-full h-72 z-0 rounded-tl-[140px] -top-8 bg-primary-blue" />

          <Link href={`/`} className="cursor-pointer">
            <div className="relative w-full z-0 sm:h-[500px] h-[350px]">
              <Image
                src="/cover.jpg"
                alt="главная страница"
                blur
                fill
                className="z-0 object-cover rounded-tl-[140px]"
              />
            </div>
          </Link>

          <Link href="#explore" scroll={false}>
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <div className="relative sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]">
                <Image
                  src="/arrow-down.svg"
                  fill
                  alt="вниз"
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
