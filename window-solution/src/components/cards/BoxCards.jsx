import Image from "next/image"

const BoxCards = ({icon}) => {
  return (
    <div
          className={`flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 w-auto
          `}
        >
          {/* Icon */}
          <div className="w-[2.5rem] h-[2.5rem] rounded-2xl bg-defined-orange flex justify-center items-center p-2">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="w-[2rem] h-[2rem] object-contain"
            />
          </div>
    </div>
  )
}

export default BoxCards