"use client";

import { motion } from "framer-motion";
import styles from "../styles";

import { textVariant2, textContainer } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.div
    variants={textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.div>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} ${styles.fontTitle}`}
  >
    {title}
  </motion.h2>
);

export const SubtitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` ${styles.fontNormal} ${textStyles}`}
  >
    {title}
  </motion.h2>
);
