"use client";

import { MdAlternateEmail } from "react-icons/md";
import styles from "../styles";
import { contacts } from "../constants";

export const EmailCard = ({divStyles}) => (
  <div className={`${divStyles} flex items-center z10 gap-3`}>
    <MdAlternateEmail />
    <a href={`mailto:${contacts.email}`} type="email" target="blank">
      {contacts.email}
    </a>
  </div>
);
