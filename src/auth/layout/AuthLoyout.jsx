import Logo from "../../assets/images/logo/Logo.svg";

export const AuthLoyout = ({children}) => {
  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center items-center">
      <div className="card-auth bg-white py-12 flex flex-col gap-5 items-center rounded-xl h-fit">
        <div className="title-card flex gap-2">
          <img src={Logo} alt="logo" className="w-8" />
          <h1 className="text-xl">nomineros</h1>
        </div>
          {children}
      </div>
    </div>
  );
};
