"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText } from "../components";
import { staggerContainer, fadeIn, flyX } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={flyX("left")}
        className={`flex-[0.75] ${styles.flexCenter}`}
      >
        <div className="relative md:w-[75%] md:h-[75%] w-1/2 h-1/2">
          <Image
            src="/get-started.png"
            alt={startingFeatures.title}
            width={500}
            height={700}
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={`${styles.flexCenter} flex-[1] flex-col`}
      >
        <TitleText title={startingFeatures.title} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.steps.map((feature, index) => (
            <StartSteps
              key={feature}
              index={index + 1}
              number={`${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
