"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { PhoneCard } from "../components";
import { MdBolt } from "react-icons/md";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className={`${(styles.innerWidth, styles.flexBetween)} gap-0 sm:gap-8`}
    >
      <PhoneCard divStyles="text-white z-10" />
      <div className={`hidden xl:flex justify-center items-center gap-1`}>
        <MdBolt className="text-white" />
        <h2 className={`${styles.fontSmall} text-white`}>
          "Социальные похороны" (программы похорон за 22000 рублей)
        </h2>
      </div>

      <Link href="#feedback" className={`${styles.btnSecondary}`}>
        <p className={`${styles.fontSmall}`}>ВЫЗОВ АГЕНТА</p>
      </Link>
    </div>

    <div className="absolute w-[30%] inset-4 gradient-01" />
  </motion.nav>
);

export default Navbar;
