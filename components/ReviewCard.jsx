"use client";

import parse from "html-react-parser";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";

import { fadeIn } from "../utils/motion";
import styles from "../styles";

const ReviewCard = ({ name, rating, text, city, date, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 1)}
    className={`${styles.flexBetween} flex-col ${styles.card} gap-4`}
  >
    <div
      className={`w-full ${styles.flexBetween} flex-col sm:flex-row items-start`}
    >
      <div className="w-full sm:w-3/4 flex flex-col items-start">
        <p className={`${styles.fontCardTitle}`}>{name}.</p>
        <div className={`${styles.fontNormal} ${styles.flexEnd} gap-3`}>
          <p>{date && `${date}`}</p>
          <p>{city && `г. ${city}`}</p>
        </div>
      </div>
      <div className="w-full sm:w-1/4 flex flex-col items-start sm:items-end">
        <StarRatings
          rating={rating}
          starRatedColor="#cecf2f"
          starDimension="22px"
          starSpacing="0px"
          className="w-1/4"
        />
      </div>
    </div>
    <p className={`${styles.fontCardNormal} w-full text-justify sm:text-start`}>
      {parse(text)}
    </p>
  </motion.div>
);

export default ReviewCard;
