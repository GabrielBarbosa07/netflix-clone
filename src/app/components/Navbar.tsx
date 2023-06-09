import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

import Logo from "../../../public/images/logo.png";
import defaultBlue from "../../../public/images/default-blue.png";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 88;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const navbarTitles: string[] = [
    "Home",
    "Series",
    "Filmes",
    "Novos e Populares",
    "Minha Lista",
    "Navegar por Idioma",
  ];

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-12 py-6 md:px-16 flex flex-row justify-center items-center transition duration-500 
        ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}
      >
        <Image src={Logo} alt="Logo" height={28} draggable={false} />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {navbarTitles.map((title: string) => (
            <NavbarItem key={title} label={title} />
          ))}
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 mx-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Navegar</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} navbarTitles={navbarTitles} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>

          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-3 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image src={defaultBlue} alt="" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
