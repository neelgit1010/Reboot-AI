import { FaStar } from "react-icons/fa6";

const CustomerCard = ({ review, name }) => {
  return (
    <div
      style={{ backgroundImage: "url('/PatientCard.png')" }}
      className="relative w-full h-full bg-cover bg-center border border-[#F0F0F0] mx-2"
    >
      <div className="absolute top-0 right-4 flex justify-center items-center gap-4">
        <img src="/global/des1.svg" alt="des1" />
        <img src="/global/des2.svg" alt="des2" />
      </div>
      <div className="flex flex-col gap-4 items-center justify-between flex-grow px-5 py-6">
        <h1 className="text-center text-defined-brown">
          {review}
        </h1>
        <div className="flex justify-center items-center gap-4 w-[40%]">
          <hr className="w-[15%] bg-defined-orange h-1" />
          <hr className="w-[70%] bg-defined-orange h-1" />
          <hr className="w-[15%] bg-defined-orange h-1" />
        </div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="flex items-center gap-2">
          <FaStar className="text-defined-orange" />
          <FaStar className="text-defined-orange" />
          <FaStar className="text-defined-orange" />
          <FaStar className="text-defined-orange" />
          <FaStar className="text-defined-orange" />
          <h1>Google</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
