import Image from "next/image";
import React, { useState } from "react";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { MdCancel, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import EnquiryCard from "../cards/EnquiryCard";

const Footer = () => {

  
  const quickas = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/" },
    { name: "Facebook", path: "/" },
    { name: "Instagram", path: "/" },
  ];


   const [modalOpen, setModalOpen] = useState(false);

     const openModal = () => setModalOpen(true);
     const closeModal = () => setModalOpen(false);
  return (
    <footer className="relative w-full p-6 lg:p-8 border-t-4 text-defined-orange">
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%]">
              <Image
                src="/global/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-[20rem] h-auto object-cover"
              />
              <p className="text-sm font-semibold lg:w-[80%] w-full">
                Experience quality, durability, and style with Window Solution!
                Contact us today for premium UPVC windows, doors, and more.
              </p>

              <div className=" text-defined-brown font-semibold">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-defined-orange" />
                  <Link href="https://wa.me/919749888898">
                    {" "}
                    <span> +91 97498 88898</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile className="text-defined-orange" />
                  <Link href="tel:919749888898">
                    {" "}
                    <span> +91 97498 88898</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-defined-orange" />
                  <Link href="mailto:windowsolution@gmail.com">
                    {" "}
                    <span>windowsolution@gmail.com</span>
                  </Link>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp size={20} className="text-defined-orange" />
                  <a href="https://maps.app.goo.gl/LVYm15mj2FheZrGEA" target="_blank">
                  <span className="w-[80%]">
                    Milestone Building Checkpost, Near Bhaktinagar Thana,
                    Siliguri 734002
                  </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[35%] lg:flex-row">
              {/* Quick as */}
              <div className="w-1/2">
                <h1 className="font-bold text-defined-blue">Quick Links</h1>
                <ul className="text-defined-brown text-sm">
                  {quickas.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 hover:text-defined-orange font-semibold"
                    >
                      <Link href={item.path}>
                        {">  "}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services*/}
              <div className="w-full md:w-[60%]">
                <h1 className="font-bold text-defined-blue">Our Services</h1>
                <ul className="text-defined-brown text-sm">
                  {[
                    "UPVC Window",
                    "UPVC Door",
                    "Interior Design",
                    "SS Steel Railing",
                    "False Ceilling",
                    "False Ceilling",
                    "UPVC Window In Siliguri",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="py-2 hover:text-defined-orange font-semibold"
                    >
                      <Link href="/services">
                        {"> "}
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8192331463188!2d88.43453277482195!3d26.748560567126788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441f13deaa191%3A0x839ee462a747d20e!2sWindow%20Solution%20%7C%20Best%20UPVC%20Windows%20in%20Siliguri!5e1!3m2!1sen!2sin!4v1741075812247!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[15rem]"
              ></iframe>
              <button
                onClick={openModal}
                className="hover:cursor-pointer text-white py-2 px-8 rounded-md font-semibold bg-gradient-to-r from-defined-blue to-defined-orange bg-[length:200%_100%] bg-left transition-all duration-700 hover:bg-right"
              >
                Pay Now
              </button>
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
                         <MdCancel size={30} className="text-defined-orange hover:cursor-pointer" />
                       </button>
           
                         <EnquiryCard />
                     </div>
                   </div>
                 )}
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-defined-gray w-full my-4" />
        <div className="text-sm text-defined-brown flex flex-col md:flex-row justify-between items-center">
          <h1>
            © 2025{" "}
            <span className="font-bold text-defined-blue hover:text-defined-orange">
              <Link href="/">Window Solution</Link>
            </span>{" "}
            - All Rights Reserved
          </h1>
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold text-defined-blue hover:text-defined-orange">
              <a target="_blank" href="https://rebootai.in/">
                Reboot AI Pvt. Ltd.
              </a>
            </span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
