"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { contacts } from "../constants";
import { PhoneCard, EmailCard } from "../components";

const MessageBox = () => (
  <motion.div
    variants={fadeIn("right", "tween", 0.2, 1)}
    className="flex-[0.5] lg:max-w-md flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
  >
    <div className="feedback-gradient" />
    <div>
      <h4 className="pb-[8px] font-bold sm:text-[32px] text-[26px] text-white">
        {contacts.title}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[22px] text-[18px] text-white">
        {contacts.subtitle}
      </p>
    </div>

    <p className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-white">
      Адрес: {contacts.address}
    </p>

    <PhoneCard divStyles="mt-[8px] text-white z-10 justify-start font-normal sm:text-[20px] text-[16px]" />
    <EmailCard divStyles="mt-[8px] text-white z-10 justify-start font-normal sm:text-[20px] text-[16px]" />
  </motion.div>
);

export default MessageBox;
