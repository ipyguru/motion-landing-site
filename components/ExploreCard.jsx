"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.35, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className="absolute w-full h-full object-cover rounded-[24px] overflow-hidden">
      <Image
        fill
        src={imgUrl}
        alt={title}
        className="object-cover rounded-[24px] hover:scale-[101%]"
      />
    </div>

    {active !== id ? (
      <span className="glassmorphism rounded-[24px] tracking-wide absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        <h3 className={`${styles.fontNormal} m-1 mx-3 opacity-100 text-white`}>
          {title}
        </h3>
      </span>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        {/* <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div> */}
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
