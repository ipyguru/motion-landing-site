import React from "react";

const Button = ({ type, divClass, title, href, imgUrl, icon }) => {
  if (type === "link") {
    return (
      <a href={href} className={divClass}>
        <div className="flex items-center gap-2">
          {imgUrl && (
            <img
              src={imgUrl}
              alt={title}
              className="w-[24px] h-[24px] object-contain"
            />
          )}

          {icon && icon}

          <span>{title}</span>
        </div>
      </a>
    );
  }
  if (type === "button") {
    return (
      <button className={divClass} type="submit">
        {title}
      </button>
    );
  }
};

export default Button;
