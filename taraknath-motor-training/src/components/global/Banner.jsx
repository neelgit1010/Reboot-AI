import { useRouter } from "next/router";
import Image from "next/image";

const BannerComponent = () => {
  const router = useRouter();

  const pageData = {
    "/contact": { title: "Contact Us" },
    "/about": { title: "About Us" },
    "/packages": { title: "Our Packages"},
  };

  // this is default for home page only
  const { title } = pageData[router.pathname] || { title: "" };

  return (
    <div className="w-full h-auto relative">
      <Image
        src="/images/subbanner.jpg"
        alt="banner"
        width={1920}
        height={500}
        className="w-full h-[10rem] object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex justify-center items-center flex-col text-white z-10">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default BannerComponent;
