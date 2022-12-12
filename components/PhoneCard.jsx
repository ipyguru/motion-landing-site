"use client";

import { HiPhone } from "react-icons/hi2";
import styles from "../styles";
import { contacts } from "../constants";

export const PhoneCard = ({divStyles}) => (
  <div className={`${divStyles} flex items-center z10 gap-3`}>
    <HiPhone />
    <a href={`tel:+${contacts.phone.replace(/[^0-9]/g, "")}`} type="phone">
      {contacts.phone}
    </a>
  </div>
);
