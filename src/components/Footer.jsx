import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twit from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import foot from "../assets/footer-image.svg";
import Map from "./Map";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Service", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  icons: [facebook, linkedin, twit, youtube],
};
const Footer = () => {
  return (
    <footer className="flex flex-col bg-white">
      {/* Footer: Address, Contact, and Emergency Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-gray-700 bg-white pb-5 container mx-auto px-4">
        {/* Address */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-purple-500 pb-1">
            <div className="w-2 h-4 bg-[#5E2866]"></div>
            <p className="text-sm font-bold text-purple-600 ">Address</p>
          </div>

          <p className="text-xs md:text-sm">
            Friedrich Wilhelm Street 3, 47051 Duisburg
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-purple-500 pb-1">
            <div className="w-2 h-4 bg-[#5E2866]"></div>
            <p className="text-sm font-bold text-purple-600 ">Contact</p>
          </div>
          <p>☎ 0151 65 99 998</p>

          <p className="text-xs md:text-sm">
            📧 intensivpflegedienst-lebenskraft@web.de
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-purple-500 pb-1">
            <div className="w-2 h-4 bg-[#5E2866]"></div>
            <p className="text-sm font-bold text-purple-600 ">
              We are always reachable via our emergency phone
            </p>
          </div>

          <p className="text-xs md:text-sm">
            At Intensivpflegedienst Lebenskraft, we are dedicated to enhancing
            lives with care that is compassionate, respectful, and of the
            highest quality.{" "}
          </p>
        </div>
      </div>
      {/* <img src={foot} /> */}
      <Map />
      <div className="bg-[#5E2866] w-full">
        <div className="mx-auto container overflow-hidden px-6 py-6 lg:px-8 flex flex-col items-center gap-5 ">
          {/* <img src={logo} alt="" /> */}
          <nav
            aria-label="Footer"
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 "
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="font-roboto text-base text-white font-normal leading-6 text-left"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-5 flex justify-center gap-4">
            <div className="bg-[#EB38B8] w-10 h-10 rounded-full flex items-center justify-center text-white">
              <FaFacebookF />
            </div>
            <div className="bg-[#EB38B8] w-10 h-10 rounded-full flex items-center justify-center text-white">
              <BsTwitterX />
            </div>
            <div className="bg-[#EB38B8] w-10 h-10 rounded-full flex items-center justify-center text-white">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#EB38B8] w-10 h-10 rounded-full flex items-center justify-center text-white">
              <FaYoutube />
            </div>
          </div>
          <div className="mt-10 border-t border-gray-300 pt-8 sm:mt-10 lg:mt-10 self-stretch text-center">
            <p className="text-white text-[14.4px] font-normal leading-[24.48px]">
              © IIntensivpflegedienst Lebenskraft UG 2024 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
