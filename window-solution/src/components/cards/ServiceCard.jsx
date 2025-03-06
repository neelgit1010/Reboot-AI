import Image from "next/image"

const ServiceCard = ({icon, title, desc}) => {
  return (
    <div className="w-full h-auto flex flex-col justify-between flex-grow">
      <div>
        <Image
          src={icon}
          alt="service-img"
          width={200}
          height={200}
          className="w-full h-auto object-cover"
        ></Image>
      </div>
      <div className="flex flex-col gap-2 p-6 bg-gradient-to-r from-defined-orange to-defined-orange bg-[length:200%_100%] bg-left hover:bg-gradient-to-r hover:from-defined-orange hover:to-defined-blue transition-all duration-700 hover:bg-[50%] w-full h-full">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>
         {desc}
        </p>
        <div className="flex justify-between items-center">
          <p>Get more details</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12 9.4V10.65C12 10.9333 12.0958 11.1708 12.2875 11.3625C12.4792 11.5542 12.7167 11.65 13 11.65C13.2833 11.65 13.5208 11.5542 13.7125 11.3625C13.9042 11.1708 14 10.9333 14 10.65V7C14 6.71667 13.9042 6.47917 13.7125 6.2875C13.5208 6.09583 13.2833 6 13 6H9.35C9.06667 6 8.82917 6.09583 8.6375 6.2875C8.44583 6.47917 8.35 6.71667 8.35 7C8.35 7.28333 8.44583 7.52083 8.6375 7.7125C8.82917 7.90417 9.06667 8 9.35 8H10.575L6.2 12.375C6.01667 12.5583 5.925 12.7875 5.925 13.0625C5.925 13.3375 6.01667 13.575 6.2 13.775C6.4 13.975 6.6375 14.075 6.9125 14.075C7.1875 14.075 7.425 13.975 7.625 13.775L12 9.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard