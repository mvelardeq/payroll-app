import { Link } from "react-router-dom";
import { AuthLoyout } from "../layout/AuthLoyout";
import WritePasswordImage from "../../assets/images/photos/WritePasswordImage.svg";

export const NewPasswordPage = () => {
  return (
    <AuthLoyout>
      <div className="body-card flex flex-col gap-6">
        <div className="title-description">
          <h2 className="text-center text-xl">New Password</h2>
          <p className="mt-2 text-sm text-center">
            Your new password must be different that any old password
          </p>
        </div>
        <img src={WritePasswordImage} alt="ForgotPasswordImage" />
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-gray-800">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
          />
        </div>
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-gray-800">
            Repeat your new password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
          />
        </div>
        <div className="button-section">
          <button className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Create new password
          </button>
        </div>
      </div>
    </AuthLoyout>
  );
};
