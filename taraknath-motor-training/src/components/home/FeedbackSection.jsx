import Image from "next/image";
import FeedbackCard from "../cards/FeedbackCard";
import { useEffect, useState } from "react";
import {useRouter} from "next/router"
import useElementHeight from "@/hooks/useElementHeight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useScroll } from "@/store/ScrollContext";
const FeedbackSection = () => {
  const { aboutRef } = useScroll();
    const items = [
      {
        name: "Priya Ghosh",
        desc: "Learning to drive at NTMT School has been a wonderful journey. Priya ma'am provided personalized attention and ensured I grasped every concept thoroughly. From clutch control to navigating busy streets, they covered everything. The insurance guidance they offered saved me a lot of hassle later. Their professionalism and dedication set them apart from other schools. Thank you.",
        img: "/images/1.png",
      },
      {
        name: "Abir Agarwal",
        desc: "New Taraknath Motor Training School is simply the best! As a woman learner, I felt safe and supported throughout my four-wheeler training. Anjali ma'am made sure I mastered driving in all conditions - city traffic, highways, and parking. The staff is friendly, and their vehicle health check advice was incredibly helpful. Thanks to them, I passed my driving test on the first attempt. Truly a trusted name in Siliguri!",
        img: "/images/2.png",
      },
      {
        name: "Anjon Roy",
        desc: "I had zero knowledge about cars before joining NTMT School, but Amit sir turned me into a confident driver! The training sessions were well-structured, focusing on practical skills and road discipline. Their support during the theoretical exam preparation was exceptional. What impressed me most was their honesty - they never overcharged or pushed unnecessary services. If you're looking for reliable motor training, this is the place to go!",
        img: "/images/1.png",
      },
      {
        name: "Rahul Das",
        desc: "I joined New Taraknath Motor Training School for my two-wheeler training, and it was an incredible experience. The instructors are patient, skilled, and focus on building confidence. They also helped me with my theoretical exam preparation. Thanks to their guidance, I passed with flying colors! Highly recommend this school to anyone looking for reliable motor training.",
        img: "/images/3.png",
      },
    ];
      const [rightSideHeight, leftSideRef] = useElementHeight();
      const [isSmallScreen, setIsSmallScreen] = useState(false);

      useEffect(() => {
          const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
          };
      
          handleResize();
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);

        
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      pauseOnHover: false,
    };
    const router = useRouter();
     useEffect(() => {
       const handleRouteChange = () => {
         setTimeout(() => {
           if (router.query.scrollTo) {
             const section = document.getElementById(router.query.scrollTo);
             if (section) {
               section.scrollIntoView({ behavior: "smooth", block: "end"});
             }
           }
         }, 100); // Small delay ensures the DOM is ready
       };

       handleRouteChange(); // Scroll on first load
       router.events.on("routeChangeComplete", handleRouteChange); // Scroll on every click

       return () => {
         router.events.off("routeChangeComplete", handleRouteChange);
       };
     }, [router.query.scrollTo, router.events]);
  return (
    <section id="feedback" ref={aboutRef}>
      <div className="flex flex-col lg:flex-row gap-4 p-8">
        <div
          className="w-full lg:w-1/2"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <Image
            src="/images/feedbackimage.jpg"
            width={200}
            height={200}
            alt="feedback-img"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2 mx:auto flex flex-col gap-4"
          ref={leftSideRef}
        >
          <h1 className="text-2xl font-bold text-defined-black">
            See Our Valuable{" "}
            <span className="text-defined-green">Feedback</span>
          </h1>
          <Slider {...settings}>
            {items.map((slide, index) => (
              <FeedbackCard
                key={index}
                name={slide.name}
                desc={slide.desc}
                img={slide.img}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection