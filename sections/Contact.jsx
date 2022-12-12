"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { MessageBox, TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { contacts } from "../constants";

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title={contacts.title} textStyles="text-center" />
      <TitleText title={<>{contacts.subtitle}</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <div className="relative ">
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-1/2 bottom-3/4 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] overflow-hidden">
            <img
              src="label-map.png"
              alt="people"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute left-1 top-1/4 pt-[6px] w-full h-full">
            <MessageBox />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
