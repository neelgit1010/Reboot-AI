import Link from "next/link";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import EnquiryCard from "../cards/EnquiryCard";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex md:hidden justify-between bg-white items-center p-4 h-[4rem] rounded-lg border-site-main border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          href="https://wa.me/919749888898"
          className="flex flex-col items-center gap-2 text-sm text-site-typo-secondary font-semibold"
        >
          <span className="text-xl">
            <TbBrandWhatsappFilled
              size={20}
              className="text-site-primary text-defined-orange"
            />
          </span>
          <span>Whasts App</span>
        </Link>
        <button
          onClick={() => openModal()}
          className="flex flex-col gap-2 items-center h-[4rem] text-sm text-site-typo-secondary font-semibold"
        >
          <span className="absolute -top-7 bg-white w-[4rem] h-[4rem] border-t-[1px] border-site-main rounded-full justify-center items-center flex">
            <span className="flex w-[3rem] h-[3rem] text-xl bg-white rounded-full justify-center items-center">
              <HiOutlineCurrencyRupee
                size={30}
                className="text-site-primary text-defined-orange"
              />
            </span>
          </span>
          <span className="relative top-8">Enroll Today!</span>
        </button>
        <Link
          href="tel:+919749888898"
          target="_Blank"
          className="flex flex-col gap-2 items-center text-sm text-site-typo-secondary font-semibold"
        >
          <span className="text-xl">
            <FaPhone
              size={20}
              className="text-site-primary text-defined-orange"
            />
          </span>
          <span>Call Now </span>
        </Link>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 z-[1300] flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg z-[1400] rounded-lg p-6 bg-black/80" // Added bg-black/80
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Image Positioned Behind the Form */}
            <div className="absolute inset-0 w-auto h-auto z-[-1]">
              <Image
                src="/gallery/gallery8.jpg"
                alt="gallery2img"
                layout="fill"
                objectFit="cover"
                priority
                className="object-cover"
              />
            </div>

            <button onClick={closeModal} className="absolute top-1 right-4">
              <MdCancel
                size={30}
                className="text-defined-orange hover:cursor-pointer"
              />
            </button>

            <EnquiryCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlyMobile;