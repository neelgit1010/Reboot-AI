import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

const FeedbackCard = ({ name, desc, img }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} // Added here!
      style={{ backgroundImage: "url(/images/testimonialbg.jpg)" }}
      className="flex flex-col gap-3 w-[98%] md:h-[20rem] h-[20rem] p-8 relative"
    >
      <div
        className={`absolute inset-0 w-full h-full flex flex-col justify-center gap-5 md:gap-1 p-3 transition-all duration-300 ${
          hovered ? "bg-defined-green" : "bg-defined-black"
        } opacity-70`}
      >
        <p className={`text-sm font-semibold ${hovered ? "text-defined-black" : "text-defined-white"}`}>
          {desc}
        </p>
        <div className="flex gap-2 items-center">
          <div className={`w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden border-2 ${hovered ? "border-defined-black" : "border-defined-green"}`}>
            <Image
              src={img}
              width={200}
              height={200}
              alt="info-img"
              className="w-full h-[2.5rem]"
            />
          </div>
          <div className="flex flex-col gap-1 text-defined-white">
            <p className={`font-semibold ${hovered ? "text-defined-black" : "text-defined-white"}`}>{name}</p>
            <div className="flex gap-1">
              <FaStar size={10} className={`${hovered ? "text-defined-black" : "text-defined-green"}`} />
              <FaStar size={10} className={`${hovered ? "text-defined-black" : "text-defined-green"}`} />
              <FaStar size={10} className={`${hovered ? "text-defined-black" : "text-defined-green"}`} />
              <FaStar size={10} className={`${hovered ? "text-defined-black" : "text-defined-green"}`} />
              <IoIosStarOutline size={10} className={`${hovered ? "text-defined-black" : "text-defined-green"}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
