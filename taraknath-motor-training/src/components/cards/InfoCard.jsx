import Image from "next/image";

const InfoCard = ({ icon, title }) => {
  return (
    <div
      className="group aspect-auto flex flex-col gap-2 justify-center items-center border-2 border-dashed border-defined-green p-4 
      bg-defined-green text-white md:bg-transparent md:text-inherit md:hover:bg-defined-green md:hover:text-white transition-all duration-500 h-[10rem]"
    >
      <Image
        src={icon}
        width={200}
        height={200}
        alt="info-img"
        className="w-full h-[2.5rem] transition-all duration-500 invert md:invert-0 md:group-hover:invert"
      />
      <p className="w-[60%] text-center">{title}</p>
    </div>
  );
};

export default InfoCard;
