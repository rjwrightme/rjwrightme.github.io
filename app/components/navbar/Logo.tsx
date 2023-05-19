import Image from "next/image";
import logo from "../../../public/svgs/rj-logo-2023.svg";

const Logo = () => {
  return (
    <Image
      alt="RJ Wright Logo"
      className="cursor-pointer w-8 md:w-10"
      src={logo}
    />
  );
};

export default Logo;
