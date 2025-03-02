import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

    const router = useRouter();
      const pageData = {
        "/contact": { title: "Contact Us" },
        "/about": { title: "About Us" },
        "/services": { title: "Our Car Services" },
      };

    const {title} = pageData[router.pathname] || { title: "" };

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        width="320"
        height="240"
        loop
        autoPlay
        muted
        className="w-full h-full"
      >
        <source src="/videos/subheader.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 flex justify-center items-center flex-col text-white z-10">
        <h1 className="text-base md:text-4xl font-semibold">{title}</h1>
      </div>
    </div>
  );
}

export default Banner