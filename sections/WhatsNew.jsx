"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { flyX, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={newFeatures.title} textStyles="text-center" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.news.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={flyX("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="relative w-[75%] h-[75%]">
          <Image
            src="/whats-new.png"
            width={`${'500'}`}
            height={500}
            alt={newFeatures.title}
            className="object-fill"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
