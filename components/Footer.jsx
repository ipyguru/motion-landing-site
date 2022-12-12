"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

import { IoLogoVk, IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

// rafce

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            ГОРОДСКАЯ ПОХОРОННАЯ СЛУЖБА
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 vbuoc@yandex.ru. Все права защищены.
          </p>

          <div className="flex gap-4">
            <IoLogoVk className="w-[24px] h-[24px] object-contain cursor-pointer text-secondary-white" />
            <IoLogoInstagram className="w-[24px] h-[24px] object-contain cursor-pointer text-secondary-white" />
            <FaTelegram className="w-[24px] h-[24px] object-contain cursor-pointer text-secondary-white" />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
