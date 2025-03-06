import { useEffect, useRef } from "react";

const HomeBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        width="320"
        height="240"
        loop
        autoPlay
        muted
        className="w-full h-full"
      >
        <source src="/videos/slider.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeBanner;
