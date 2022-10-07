import React from "react";
import GoogleIcon from "../../assets/images/icons/Google.svg";
import TwitterIcon from "../../assets/images/icons/Twitter.svg";

export const AuthFormLayout = ({children, title}) => {
  return (
    <form className="body-card flex flex-col gap-6">
      <h2 className="text-center text-xl">{title}</h2>
      <div className="social-icons flex gap-4">
        <div className="buttonSocialIcon w-36 h-10 flex justify-center items-center bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-gray-200">
          <img src={GoogleIcon} alt="google" />
        </div>
        <div className="buttonSocialIcon w-36 h-10 flex justify-center items-center bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-gray-200">
          <img src={TwitterIcon} alt="twitter" />
        </div>
      </div>
      {children}
    </form>
  );
};
