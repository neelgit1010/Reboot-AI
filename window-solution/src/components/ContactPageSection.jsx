import { useEffect, useState } from "react";
import useElementHeight from "@/hooks/useElementHeight";
import { AiFillInstagram } from "react-icons/ai";
import { LuAlarmClock } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaGoogle, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPageSection = () => {
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mobileCheck = /iPhone|Android|iPad|iPod/i.test(
        navigator?.userAgent
      );
      setWhatsappLink(
        mobileCheck
          ? "https://wa.me/919749888898"
          : "https://web.whatsapp.com/send?phone=919749888898"
      );
    }
  }, []);

  const contents = [
    {
      icon: <FaWhatsapp size={20} className="text-defined-orange" />,
      text: "+91 97498 88898",
      link: whatsappLink,
    },
    {
      icon: <BiSolidPhoneCall size={20} className="text-defined-orange" />,
      text: "+91 97498 88898",
      link: "tel:+919749888898",
    },
    {
      icon: <MdEmail size={20} className="text-defined-orange" />,
      text: "windowsolution@gmail.com",
      link: "mailto:windowsolution@gmail.com",
    },
    {
      icon: <FaLocationDot size={40} className="text-defined-orange" />,
      text: "Milestone Building Checkpost, Near Bhaktinagar Thana, Siliguri, West Bengal - 734002",
      link: "https://maps.app.goo.gl/LVYm15mj2FheZrGEA",
    },
    {
      icon: <FaGoogle size={20} className="text-defined-orange" />,
      link: "https://g.co/kgs/9WbjX58",
    },
    {
      icon: <FaFacebook size={20} className="text-defined-orange" />,
      link: "#", // Handle null links
    },
    {
      icon: <AiFillInstagram size={20} className="text-defined-orange" />,
      link: "#",
    },
    {
      icon: <FaYoutube size={20} className="text-defined-orange" />,
      link: "#",
    },
  ];

  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="w-full h-auto p-8 flex flex-col md:flex-row gap-8">
        {/* content */}
        <div className="flex flex-col gap-4 w-full md:w-1/2" ref={leftSideRef}>
          <h1 className="text-2xl text-defined-blue font-semibold">
            Get In <span className="text-defined-orange">Touch</span>
          </h1>
          <p className="text-defined-brown">
            We’d love to hear from you! Whether you need UPVC windows, doors, SS
            railings, false ceilings, or modular kitchens, our team is ready to
            assist you with expert advice and tailored solutions. With 12+ years
            of experience, we ensure top-quality products and exceptional
            service for residential and commercial projects. Reach out for
            inquiries, consultations, or quotes. Our dedicated team is always
            available to provide the best solutions for your needs. Let's create
            something amazing together!
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              <h1 className="text-defined-blue text-xl font-bold">
                Contact Information
              </h1>
              {contents.slice(0, 4).map((content, index) => (
                <div
                  className="flex md:flex-row gap-4 items-center text-defined-brown"
                  key={index}
                >
                  {content.icon}
                  {content.link ? (
                    <a
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{content.text}</p>
                    </a>
                  ) : (
                    <p>{content.text}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full md:w-[40%]">
              <h1 className="text-defined-blue text-xl font-bold">
                Follow With Us
              </h1>
              <div className="flex gap-4 items-center text-defined-orange">
                {contents.slice(4, 8).map((content, index) => (
                  <a
                    key={index}
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.icon}
                  </a>
                ))}
              </div>

              <h1 className="text-defined-blue text-xl font-bold">
                Garage Opening Time
              </h1>
              <div className="flex items-center gap-3">
                <LuAlarmClock size={25} className="text-defined-orange" />
                <span className="text-defined-brown">
                  Opening Time 10:00 am
                </span>
              </div>
              <div className="flex items-center gap-3">
                <LuAlarmClock size={25} className="text-defined-orange" />
                <span className="text-defined-brown">
                  Closing Time 08:00 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div
          className="w-full md:w-1/2"
          style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50854.50649111553!2d88.4000497!3d26.7275391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441f13deaa191%3A0x839ee462a747d20e!2sWindow%20Solution%20%7C%20Best%20UPVC%20Windows%20in%20Siliguri!5e1!3m2!1sen!2sin!4v1741254393135!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:"0"}}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;