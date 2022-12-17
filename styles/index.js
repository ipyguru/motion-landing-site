const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexBetween: "flex justify-between items-center",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",
  
  // text
  fontTitle: "text-white uppercase font-normal sm:text-[26px] text-[18px] antialiased hover:subpixel-antialiased",
  fontNormal: "text-secondary-white font-normal text-[16px] sm:text-[18px] antialiased hover:subpixel-antialiased",
  fontBold: "text-secondary-white font-bold text-[16px] sm:text-[18px] antialiased hover:subpixel-antialiased",
  // Cards
  card: "bg-slate-700 text-white rounded-[20px] p-6 hover:shadow-lg shadow-inherit shadow-sm cursor-pointer",
  fontCardTitle: "text-white uppercase font-normal text-[16px] sm:text[18px] antialiased hover:subpixel-antialiased",
  fontCardNormal: "text-secondary-white font-normal text-[14px] sm:text-[16px] antialiased hover:subpixel-antialiased",
  // hero section
  heroHeading:
    "ml-[20px] font-bold lg:text-[130px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
  heroDText:
    "-ml-[20px] text-primary-blue text-[44px] font-bold leading-[64.4px] uppercase",
  btnSecondary:
    "py-2.5 px-5 cursor-pointer font-normal text-[16px] text-white focus:outline-none bg-white rounded-[32px] border border-gray-200 hover:bg-[#25618B] focus:z-10 focus:ring-4 focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-[#25618B] dark:hover:text-white dark:hover:bg-[#25618B]",
  btnPrimary:
    "py-2.5 px-5 cursor-pointer font-normal text-[16px] text-white focus:outline-none bg-[#25618B] rounded-[32px] border border-primary-blue hover:bg-primary-blue-hover focus:z-10 focus:ring-4 focus:ring-primary-blue-hover",

  // inputs
  inputWithIcon:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  inputIcon:
    "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",
};

export default styles;
