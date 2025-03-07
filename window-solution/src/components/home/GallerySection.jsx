import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Added for manual controls

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const GallerySection = () => {
  const images = [
    "/gallery/gallery10.jpg",
    "/gallery/gallery1.jpg",
    "/gallery/gallery0.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
    "/gallery/gallery4.jpg",
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold w-max bg-gradient-to-r from-defined-blue to-defined-orange bg-clip-text text-transparent">
        Our Gallery
      </h1>

      <div className="w-full max-w-5xl px-6">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} 
          loop={true} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          navigation={true} 
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 }, 
            768: { slidesPerView: 2, spaceBetween: 30 }, 
            1024: { slidesPerView: 3, spaceBetween: 40 }, 
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={image}
                alt={`Gallery Image ${index}`}
                width={350}
                height={350}
                className="w-[22rem] h-[22rem] object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
