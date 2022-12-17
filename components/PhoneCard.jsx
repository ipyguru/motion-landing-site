"use client";

import { HiPhone } from "react-icons/hi2";
import styles from "../styles";
import { contacts } from "../constants";

export const PhoneCard = ({divStyles}) => (
  <div className={`${divStyles} ${styles.flexCenter} ${styles.fontNormal} gap-3`}>
    <HiPhone className="text-white"/>
    <a href={`tel:+${contacts.phone.replace(/[^0-9]/g, "")}`} type="phone">
      {contacts.phone}
    </a>
  </div>
);
