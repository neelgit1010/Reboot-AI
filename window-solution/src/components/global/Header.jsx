import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import EnquiryCard from "../cards/EnquiryCard";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header>
      <div
        className={`fixed w-full z-[60] bg-white shadow-md flex justify-between items-center md:px-6 px-4 lg:px-8 h-[4.5rem] md:h-[5rem]`}
      >
        <Link href="/">
          <Image
            src="/global/logo.svg"
            alt="logo"
            width={220}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-8 lg:items-center font-semibold text-xl">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-defined-orange text-defined-blue transition-all duration-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={openModal}
            className="hover:cursor-pointer text-white py-2 px-8 rounded-md font-semibold bg-gradient-to-r from-defined-blue to-defined-orange bg-[length:200%_100%] bg-left transition-all duration-700 hover:bg-right"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl ml-auto mr-3"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 opacity-85">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={toggleMenu}
                className="hover:text-defined-blue"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={openModal}
              className="bg-defined-green text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800"
            >
              Enquire Now
            </button>
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[1300] flex items-center justify-center bg-black/70" // Increased opacity here
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg z-[1400] rounded-lg p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Image Positioned Behind the Form */}
            <div className="absolute inset-0 w-full h-full z-[-1]">
              <Image
                src="/gallery/gallery2.jpg"
                alt="gallery2img"
                layout="fill" // Makes it cover the entire div
                objectFit="cover" // Ensures it covers without distortion
                priority
                className="object-cover"
              />
            </div>

            <button onClick={closeModal} className="absolute top-1 right-4">
              <MdCancel size={30} />
            </button>

            {/* Form Content with Darker Background */}
            <div className="w-full p-4 bg-black/60 rounded-lg">
              {" "}
              {/* Adjusted opacity */}
              <EnquiryCard />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
