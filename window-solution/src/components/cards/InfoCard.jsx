import Image from "next/image";


const InfoCard = ({icon, title}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 w-full 
      transform transition-all duration-1000 ease-out
      `}
    >
      {/* Icon */}
      <div className="w-[3.5rem] h-[3.5rem] rounded-2xl bg-defined-orange flex justify-center items-center p-2">
        <Image
          src={icon}
          alt="icon"
          width={100}
          height={100}
          className="w-[2rem] h-[2rem] object-contain"
        />
      </div>

      {/* Text */}
        <h1 className="text-xl font-semibold w-[70%] text-defined-blue">
          {title}
        </h1>
    </div>
  );
};

export default InfoCard;
