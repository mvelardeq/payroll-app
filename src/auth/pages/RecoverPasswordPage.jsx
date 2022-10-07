
import { Link } from "react-router-dom";
import { AuthLoyout } from "../layout/AuthLoyout";
import ForgotPasswordImage from "../../assets/images/photos/ForgotPasswordImage.svg";

export const RecoverPasswordPage = () => {
  return (
    <AuthLoyout>
      <div className="body-card flex flex-col gap-6">
        <div className="title-description">
          <h2 className="text-center text-xl">Fogot your Password?</h2>
          <p className="mt-2 text-sm text-center">
            Sent us your email in order to recover your count
          </p>
        </div>
        <img src={ForgotPasswordImage} alt="ForgotPasswordImage" />
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
          />
        </div>
        <div className="button-section">
          <button className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Reset your password
          </button>
          <p className="text-center mt-3 text-sm">
            You don't have a count?{" "}
            <Link
              to="/auth/register"
              className="text-sky-500 hover:text-sky-600"
            >
              SIGN UP
            </Link>
          </p>
          <p className="text-center mt-3 text-sm">
            You have a count?{" "}
            <Link to="/auth/login" className="text-sky-500 hover:text-sky-600">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </AuthLoyout>
  );
};
