"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { PhoneCard, Button } from "../components";

import { MdOutgoingMail } from "react-icons/md";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth, styles.flexBetween} gap-0 sm:gap-8`}>
      <PhoneCard divStyles="text-white font-extrabold sm-text-[20px] text-[14px] xl:leading-[30px]" />
      <h2 className="hidden md:block text-white font-extrabold sm:text-[20px] text-[14px] xl:leading-[30px]">
        ГОРОДСКАЯ ПОХОРОННАЯ СЛУЖБА
      </h2>

      <Button
        type="link"
        divClass={`${styles.btnSecondary} sm:text-[16px] text-[12px]`}
        title="ВЫЗОВ АГЕНТА"
        href="#feedback"
        icon={<MdOutgoingMail style={{ width: "24px", height: "auto" }} />}
      />
    </div>

    <div className="absolute w-[50%] inset-0 gradient-01" />
  </motion.nav>
);

export default Navbar;
