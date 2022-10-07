import Bars from "../../assets/images/icons/Bars.svg";
import Bell from "../../assets/images/icons/Bell.svg";
import Search from "../../assets/images/icons/Search.svg";
import Plus from "../../assets/images/icons/Plus.svg";
import Logo from "../../assets/images/logo/Logo.svg";
import girl1 from "../../assets/images/photos/girl1.jpg";

import { Link } from "react-router-dom";

export const SelectCompanyPage = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="nav-bar flex justify-between bg-white py-4 px-6 static">
        <img src={Bars} alt="Menu icon" className="" />
        <div className="flex gap-2 absolute left-1/2 -translate-x-1/2">
          <img src={Logo} alt="logo" className="w-8" />
          <h1 className="text-xl">nomineros</h1>
        </div>
        <div className="flex gap-4">
          <img src={Bell} alt="logo" className="w-6" />
          <div className="image-profile-nav flex items-center gap-2 rounded-full bg-neutral-100 pr-3">
            <img
              src={girl1}
              alt="image-profile"
              className="w-8 h-8 object-cover rounded-full"
            />
            <p className="text-sm text-gray-600">Evelyn Castrejón</p>
          </div>
        </div>
      </div>
      <div className="main pt-16 flex flex-col items-center gap-8">
        <div className="title-description">
          <h1 className="text-center text-xl font-bold">👋🏽 Hello, Evelyn!</h1>
          <p className="mt-3">Which company will you work with today?</p>
        </div>
        <form className="search-section flex bg-white w-80 h-10 rounded-lg overflow-hidden border border-gray-400">
          <input
            type="text"
            id="search"
            name="search"
            className="bg-zinc-50 h-10 p-3 text-sm text-gray-400 focus:outline-none flex-1"
            placeholder="Search among your companies"
          />
          <button type="submit">
            <img
              src={Search}
              alt="icon search"
              className="bg-zinc-50 w-6 mr-3"
            />
          </button>
        </form>
        <div className="grid-companies grid grid-cols-3 gap-8">
          <Link
            to="/select-company/create-company"
            className="add-company flex flex-col gap-2"
          >
            <div className="button-company grid place-items-center w-24 h-24 bg-blue-100 rounded-lg hover:bg-blue-200">
              <img src={Plus} alt="Plus icon" />
            </div>
            <p className="text-center text-sm">New company</p>
          </Link>
          <div className="company-item flex flex-col gap-2">
            <div className="button-company grid place-items-center w-24 h-24 bg-blue-500 rounded-lg hover:bg-blue-600">
              <p className="text-3xl text-white">Ed</p>
            </div>
            <p className="text-center text-sm">EdTeam</p>
          </div>
          <div className="company-item flex flex-col gap-2">
            <div className="button-company grid place-items-center w-24 h-24 bg-blue-500 rounded-lg hover:bg-blue-600">
              <p className="text-3xl text-white">Ed</p>
            </div>
            <p className="text-center text-sm">EdTeam</p>
          </div>
          <div className="company-item flex flex-col gap-2">
            <div className="button-company grid place-items-center w-24 h-24 bg-blue-500 rounded-lg hover:bg-blue-600">
              <p className="text-3xl text-white">Ed</p>
            </div>
            <p className="text-center text-sm">EdTeam</p>
          </div>
        </div>
      </div>
    </div>
  );
};
