import { Link } from "react-router-dom";
import { AuthFormLayout } from "../layout/AuthFormLayout";
import { AuthLoyout } from "../layout/AuthLoyout";

export const LoginPage = () => {
  return (
    <AuthLoyout>
      <AuthFormLayout title={"Welcome again"}>
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
            <div className="check flex items-center">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="ml-2 text-xs">
                Remember me?
              </label>
            </div>
            <Link
              to="/auth/recover-password"
              className="text-xs text-sky-500 hover:text-sky-600"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="button-section">
          <button className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
          <p className="text-center mt-3 text-sm">
            Need a count?{" "}
            <Link
              to="/auth/register"
              className="text-sky-500 hover:text-sky-600"
            >
              SIGN UP
            </Link>
          </p>
        </div>
      </AuthFormLayout>
    </AuthLoyout>
  );
};
