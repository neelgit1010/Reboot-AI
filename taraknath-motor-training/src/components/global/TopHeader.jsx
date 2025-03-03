"use client";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const TopHeader = () => {
  return (
    <div className="z-[60] w-full ">
      <div className=" bg-defined-green h-[3rem] hidden md:flex justify-between sm:gap-2 md:gap-0 items-center  text-white">
        <div className="flex gap-4 w-full  sm:rounded-br-0 md:rounded-br-[4rem]  sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex md:gap-2 sm:gap-1 items-center sm:text-[10px] lg:text-sm xlg:text-base font-medium text-defined-black">
            <BiSolidPhoneCall size={20} />
            <Link href="tel:+919563500112">+91 95635 00112</Link>
            <FaWhatsapp size={20} />
            <Link href="https://wa.me/919563500112">
              <span>+91 95635 00112</span>{" "}
            </Link>
          </div>
        </div>
        <div className="flex gap-4 sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex gap-2 w-full text-defined-black">
            <IoLocationSharp size={20} />
            <span className="font-medium text-sm text-nowrap">
              Hatir More SBI ATM, Ward 17, Subhaspally, Hatirmore, Siliguri, WB
              - 734001
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
