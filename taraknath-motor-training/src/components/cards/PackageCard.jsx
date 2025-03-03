import Image from "next/image";
import { useState } from "react";

const PackageCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const items = {
    title: item.title,
    features: item.features,
  };

  const handlePackage = (item) => {
    const dest = "+918250742988";
    let message = `Hello! I am interested in the *${item}* package. 
    Can you guide me through the process?`;
    message = encodeURIComponent(message);
    // Check if user is on mobile
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";

    const url = `${baseUrl}?phone=${dest}&text=${message}`;
    window.open(url, "_blank").focus();
  };

  return (
    <div
      className={`flex flex-col gap-4 p-4 ${
        isHovered
          ? "border border-dashed transition-all duration-500"
          : "shadow-lg"
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* package title */}
      <div className="flex gap-2 items-center">
        <Image
          src="/package/star.svg"
          width={200}
          height={200}
          alt="package-img"
          className="w-auto h-[1.5rem] object-cover"
        />
        <h1 className="text-2xl font-bold text-defined-black">{items.title}</h1>
      </div>

      {/* package description */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.features.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center">
            <div className="bg-defined-green p-2 rounded-xl">
              {feature.icon}
            </div>
            <p className="text-defined-brown w-[80%]">{feature.title}</p>
          </div>
        ))}
      </div>
      <button
        className={` text-white py-2 px-4 rounded-lg w-full hover:cursor-pointer ${
          isHovered
            ? "bg-defined-green transition-all duration-500"
            : "bg-defined-black"
        }`}
        onClick={() => handlePackage(items.title)}
      >
        Enroll Today!
      </button>
    </div>
  );
};

export default PackageCard;
