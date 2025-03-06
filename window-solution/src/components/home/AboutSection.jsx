import Image from "next/image";
import { useEffect, useState } from "react";
import useElementHeight from "@/hooks/useElementHeight";
import BoxCards from "../cards/BoxCards";
const AboutSection = () => {
  const content = [
    {
      icon: <BoxCards icon="/global/encrypted.svg" />,
      title: "Secure – Strong Locks, Enhanced Safety Features.",
      desc: "Our UPVC windows and doors come with robust locking systems and advanced safety features, ensuring maximum security for your home or business. Built with high-quality materials, they provide tamper-resistant protection, keeping your space safe from intruders while offering peace of mind.",
    },
    {
      icon: <BoxCards icon="/global/engineering.svg" />,
      title: "Low Maintenance – No Painting, Easy Cleaning.",
      desc: "Say goodbye to frequent maintenance! Our UPVC solutions require no painting and are resistant to rust, termites, and moisture. Simply wipe with a cloth to keep them looking new. Their durable finish ensures long-lasting performance, making them a cost-effective and hassle-free choice.",
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4 p-8">
        {/* content */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2" ref={leftSideRef}>
          <h1 className="font-semibold text-defined-blue text-xl tracking-wider">
            About Us
          </h1>
          <h1 className="text-defined-blue font-bold text-3xl">
            <span className="text-defined-orange">Window Solution</span> – Your
            Trusted Window Partner!
          </h1>
          <p className="text-defined-brown">
            <span className="text-defined-orange">Window Solution</span> is one
            of the most trusted and experienced UPVC window dealers in Siliguri,
            serving customers for over 12+ years. We specialize in high-quality
            UPVC windows, UPVC doors, SS steel railings, false ceilings, and
            modular kitchens for both domestic and commercial spaces. With a
            strong commitment to durability, aesthetics, and functionality, we
            ensure that our products enhance the beauty and security of your
            home or business. Our team of experts is dedicated to providing
            customized solutions, professional installation, and top-notch
            after-sales service to meet the unique needs of every client.
            Whether you're renovating your home or upgrading your commercial
            space, <span className="text-defined-orange">Window Solution</span>{" "}
            guarantees premium quality, timely delivery, and customer
            satisfaction. Experience innovation and excellence with{" "}
            <span className="text-defined-orange">Window Solution</span> - your
            reliable partner for modern and durable utility solutions.
          </p>
          {content.map((c, i) => {
            return (
              <div
                key={i}
                className="flex gap-4 font-semibold justify-center items-start"
              >
                {c.icon}
                <div className="flex flex-col gap-2">
                  <h1 className="text-defined-blue font-bold text-xl">
                    {c.title}
                  </h1>
                  <p className="text-defined-brown font-normal">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Images */}
        <div
          className="relative w-full lg:w-1/2 flex gap-4"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <Image
            src="/global/aboutus.jpg"
            alt="about"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute left-0 bottom-0 flex justify-center items-center w-[60%]">
            <Image
              src="/global/Rectangle.png"
              alt="about"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
            <h1 className="absolute text-white font-semibold text-lg md:text-3xl">12+ Years of Trust</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
