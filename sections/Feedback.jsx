"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { feedbackGreeting } from "../constants";
import { FeedbackForm } from "../components";

import { MdFormatQuote } from "react-icons/md";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[420px] flex justify-start flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div id="feedback">
          <h4 className={`${styles.fontCardTitle} text-white`}>
            {feedbackGreeting.name}
          </h4>
          <p className={`${styles.fontBold} mt-[8px] text-white`}>
            {feedbackGreeting.position}
          </p>
        </div>

        <p className={`${styles.fontCardNormal} mt-[24px] text-white`}>
          “{feedbackGreeting.text}”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <FeedbackForm />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[24%] -top-[2%]"
        >
          <MdFormatQuote className="w-[165px] h-[165px] object-contain fill text-secondary-white opacity-30"/>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
