"use client";

import parse from "html-react-parser";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../utils/motion";
import styles from "../styles";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 1)}
    className="flex md:flex-row flex-col gap-4 items-center hover:shadow-xl transition-all duration-200 ease-in-out"
  >
    <div className="relative md:w-1/3 w-full h-[250px]">
      <Image
        src={imgUrl}
        blur
        alt={title}
        fill
        className="rounded-[32px] object-cover"
      />
    </div>

    <div className={`w-full ${styles.flexBetween}`}>
      <div className="flex-1 md:ml-[45px] flex flex-col">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className={`${styles.fontNormal} mt-[16px] text-secondary-white`}>
          {parse(subtitle)}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
