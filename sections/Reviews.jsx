"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { ReviewCard, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
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
        <TitleText title={review.title} textStyles={`text-center`} />
        <div className="mt-6 flex flex-col gap-4">
          {review.items.map((item, index) => (
            <ReviewCard key={`review#${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;
