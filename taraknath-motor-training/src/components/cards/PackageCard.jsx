import Image from "next/image";
import { useState } from "react";

const PackageCard = ({item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    }

    const items = {
        title: item.title,
        features: item.features
    }

  return (
    <div className="flex flex-col gap-4 shadow-lg p-4">
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
            <p className="text-defined-brown w-[80%]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCard