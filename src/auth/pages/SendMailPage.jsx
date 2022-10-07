import { Link } from "react-router-dom";
import { AuthLoyout } from "../layout/AuthLoyout";
import SentMailIImage from "../../assets/images/photos/SentMailIImage.svg";

export const SendMailPage = () => {
  return (
    <AuthLoyout>
      <div className="body-card flex flex-col gap-6">
        <div className="title-description">
          <h2 className="text-center text-xl">Mail sent</h2>
          <p className="mt-2 text-sm text-center">
            Don't forget check your email inbox or your spam folder
          </p>
        </div>
        <img src={SentMailIImage} alt="ForgotPasswordImage" />
        <div className="button-section">
          <button className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Understood
          </button>
        </div>
      </div>
    </AuthLoyout>
  );
};
