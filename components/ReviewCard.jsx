"use client";

import parse from "html-react-parser";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";

import { fadeIn } from "../utils/motion";

const ReviewCard = ({ name, rating, text, city, date, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 1)}
    className="inline-block w-full rounded-[20px] p-6 text-white bg-gray-700 hover:shadow-lg shadow-inherit shadow-sm cursor-pointer"
  >
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="">
        <p className="font-semibold text-[18px]">{name}.</p>
        <div className="flex items-end gap-3">
          <p className="font-semibold text-[12px]">{date && `${date}`}</p>
          <p className="font-semibold text-[12px]">{city && `г. ${city}`}</p>
        </div>
      </div>
      <div class="my-1 flex flex-col justify-start items-center">
        <StarRatings
          rating={rating}
          starRatedColor="#cecf2f"
          starDimension="22px"
          starSpacing="0px"
        />
      </div>
    </div>
    <p className="text-secondary-white text-[14px]">{parse(text)}</p>
  </motion.div>
);

export default ReviewCard;
