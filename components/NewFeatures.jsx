import styles from "../styles";
import { TitleText } from "./CustomTexts";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className={`${styles.fontBold} mt-[26px] text-white`}>
      {title}
    </h1>
    <p className={`${styles.fontNormal} text-justify md:text-start flex-1 mt-[16px]`}>
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
