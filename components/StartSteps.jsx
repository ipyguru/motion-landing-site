import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import styles from "../styles";

const StartSteps = ({ index, number, text }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 1)}
    className={`${styles.flexCenter} flex-row`}
  >
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className={`${styles.fontTitle} text-white`}>{number}</p>
    </div>

    <p
      className={`${styles.flexStart} flex-col flex-1 ml-7 ${styles.fontNormal} text-secondary-white`}
    >
      {text}
      {number === "1" && (
        <Link
          href="#feedback"
          scroll={false}
          className={`${styles.btnPrimary} max-w-xs text-white my-4`}
        >
          ВЫЗВАТЬ АГЕНТА
        </Link>
      )}
    </p>
  </motion.div>
);

export default StartSteps;
