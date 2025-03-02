import { useEffect, useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

  return (
    <section className="w-full h-auto">
      <video
        ref={videoRef}
        width="320"
        height="240"
        loop
        autoPlay
        muted
        className="w-full h-auto"
      >
        <source src="/video/slider.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoComponent;
