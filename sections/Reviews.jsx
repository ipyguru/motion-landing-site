"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { ReviewCard, TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { review } from "../constants";

const Reviews = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title={review.title}
          textStyles={`text-center text-[24px]`}
        />
        <div className="mt-[50px] flex flex-col gap-5">
          {review.items.map((item, index) => (
            <ReviewCard key={`review#${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;
