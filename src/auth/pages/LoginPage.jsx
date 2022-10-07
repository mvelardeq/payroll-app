import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleIcon, twitterIcon } from "../../assets/images/icons";
import { startSingInGoogle } from "../../store/auth";
import { AuthLoyout } from "../layout/AuthLoyout";

export const LoginPage = () => {

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  const loginWithGoogle = ()=>{
    dispatch(startSingInGoogle())
  }

  return (
    <AuthLoyout>
      <form
        className="body-card flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-xl">Welcome again</h2>
        <div className="social-icons flex gap-4">
          <div onClick={loginWithGoogle} className="buttonSocialIcon w-36 h-10 flex justify-center items-center bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-gray-200">
            <img src={googleIcon} alt="google" />
          </div>
          <div className="buttonSocialIcon w-36 h-10 flex justify-center items-center bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-gray-200">
            <img src={twitterIcon} alt="twitter" />
          </div>
        </div>
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className={`bg-gray-100 h-10 rounded-lg p-3 text-gray-400 focus:outline-none ${
              errors.email
                ? "border-2 border-red-300 text-sm"
                : "border border-gray-300 text-sm"
            }`}
          />
          {errors.email && (
            <p role="alert" className="text-sm text-red-500 -mt-3">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="formItem flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have atleast 6 characters",
              },
            })}
            className={`bg-gray-100 h-10 rounded-lg p-3 text-sm text-gray-400 focus:outline-none ${
              errors.password
                ? "border-2 border-red-300"
                : "border border-gray-300"
            }`}
          />
          {errors.password && (
            <p role="alert" className="text-sm text-red-500 -mt-2">
              {errors.password?.message}
            </p>
          )}
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
          <button
            type="submit"
            className="w-full py-3 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
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
      </form>
    </AuthLoyout>
  );
};
