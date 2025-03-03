import Image from "next/image";
import React, { useState } from "react";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { MdCancel, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import EnquiryFormCard from "../cards/EnquiryFormCard";

const Footer = () => {

  const quickas = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Packages", path: "/packages" },
    { name: "Testimonial", path: "/?scrollTo=feedback" },
    { name: " Motor Training School", path: "/packages" },
    { name: "Vehicle Institute", path: "/packages" },
    { name: "Contact Us", path: "/contact" },
    { name: "Gallery", path: "/packages" },
  ];


   const [modalOpen, setModalOpen] = useState(false);

     const openModal = () => setModalOpen(true);
     const closeModal = () => setModalOpen(false);
  return (
    <footer className="relative w-full p-6 lg:p-8 border-t-4 bg-defined-white text-defined-brown">
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
                Drive with confidence! Join New Taraknath Motor Training School
                Siliguri’s most trusted driving institute for expert training,
                safety, and success on the road.
              </p>
              <h1 className="font-bold text-xl text-defined-black">
                Contact Information
              </h1>
              <div className=" text-defined-brown font-semibold">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-defined-black" />
                  <Link href="https://wa.me/919563500112">
                    {" "}
                    <span> +91 95635 00112</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile className="text-defined-black" />
                  <Link href="tel:919563500112">
                    {" "}
                    <span> +91 95635 00112</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-defined-black" />
                  <Link href="mailto:ntmtssiliguri@gmail.com">
                    {" "}
                    <span>ntmtssiliguri@gmail.com</span>
                  </Link>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp size={20} className="text-defined-black" />
                  <span className="w-[80%]">
                    NH-31, Bypass Road, Beside City Hospital, Prakash Nagar,
                    Near Gandhi Maidan, Ward No. 43, Siliguri, WB - 734003
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[35%] lg:flex-row">
              {/* Our Services*/}
              <div className="w-full md:w-[60%]">
                <h1 className="font-bold text-defined-black">Our Services</h1>
                <ul className="text-defined-brown text-sm">
                  {[
                    "Best Motor Training In Siliguri",
                    "Motor Training In Siliguri",
                    "Motor Training In Siliguri",
                    "Two Wheeler Training",
                    "Four Wheeler Training",
                    "Two Wheeler Training",
                    "Two Wheeler Training",
                    "Two Wheeler Training",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="py-2 hover:text-defined-black font-semibold"
                    >
                      <Link href="/packages">
                        {"> "}
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick as */}
              <div className="w-1/2">
                <h1 className="font-bold text-defined-black">Quick Links</h1>
                <ul className="text-defined-brown text-sm">
                  {quickas.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 hover:text-defined-black font-semibold"
                    >
                      <Link href={item.path}>
                        {">  "}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.9062198542492!2d88.43126057482058!3d26.7096496687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44130ae00188d%3A0xaf550ab84ff3a30d!2sNew%20Taraknath%20Motor%20training%20school!5e1!3m2!1sen!2sin!4v1740819003671!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-[16rem]"
              ></iframe>
              <button
                onClick={openModal}
                className="bg-defined-green hover:cursor-pointer text-white font-bold px-4 py-2 rounded w-full"
              >
                Pay Now
              </button>
            </div>
            {modalOpen && (
              <div
                className="fixed inset-0 z-[1300] flex items-center justify-center bg-black/60"
                onClick={closeModal}
              >
                <div
                  className="relative w-full max-w-lg z-[1400] rounded-lg p-6 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Background Image Positioned Behind the Form */}
                  <div className="absolute inset-0 w-full h-full z-[-1]">
                    <Image
                      src="/images/serviceandcontactus-background.jpg"
                      alt="serviceandcontactus-background"
                      layout="fill" // Makes it cover the entire div
                      objectFit="cover" // Ensures it covers without distortion
                      priority
                    />
                  </div>

                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-4 text-defined-white"
                  >
                    <MdCancel size={30} />
                  </button>

                  {/* Form Content */}
                  <div className="w-full p-4 bg-opacity-90 rounded-lg">
                    <EnquiryFormCard />
                  </div>
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
            <span className="font-bold hover:text-defined-black">
              <Link href="/">New Taraknath Moror Training School</Link>
            </span>{" "}
            - All Rights Reserved
          </h1>
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold hover:text-defined-black">
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
