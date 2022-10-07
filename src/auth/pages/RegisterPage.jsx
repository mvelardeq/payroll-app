import { Link } from "react-router-dom";
import { AuthFormLayout } from "../layout/AuthFormLayout";
import { AuthLoyout } from "../layout/AuthLoyout";

export const RegisterPage = () => {
  return (
    <AuthLoyout>
      <AuthFormLayout title={"Start to manage your counts"}>
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
          />
        </div>
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
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
          />
          <div className="remember-user flex justify-between items-center">
            <p className="text-xs">You accept all terms of our company</p>
          </div>
        </div>
        <div className="button-section">
          <button className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Sign up
          </button>
          <p className="text-center mt-3 text-sm">
            You have a count?{" "}
            <Link to="/auth/login" className="text-sky-500 hover:text-sky-600">
              LOGIN
            </Link>
          </p>
        </div>
      </AuthFormLayout>
    </AuthLoyout>
  );
};
