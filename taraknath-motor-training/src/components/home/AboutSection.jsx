import Image from "next/image";
import { useEffect, useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import useElementHeight from "@/hooks/useElementHeight";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const AboutSection = () => {
  const content = [
    {
      title: "Experienced Instructors",
      desc: "Our certified trainers have years of experience in motor training, ensuring personalized guidance for beginners and experienced drivers alike. We focus on building confidence and road awareness to help you become a skilled and responsible driver.",
    },
    {
      title: "Insurance & Legal Support",
      desc: "We help you secure vehicle insurance, guiding you through the paperwork and policy selection process. Our team ensures you get the best coverage options for your vehicle, keeping you protected on the road.",
    },
  ];
  const [rightSideHeight, leftSideRef] = useElementHeight();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
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
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4 p-8">
        {/* Images */}
        <div
          className="w-full lg:w-[60%] flex gap-4"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <div className="w-full h-auto">
            <Image
              src="/about/about1.jpg"
              alt="about-1"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-auto flex flex-col gap-4">
            <div className="w-full h-3/4">
              <Image
                src="/about/about2.jpg"
                alt="about-2"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              ref={ref}
              className="flex flex-col h-1/4 justify-center items-center bg-defined-green rounded-lg text-white"
            >
              <h1 className="text-3xl font-semibold">
                {inView ? <CountUp end={20} duration={3} /> : 0}+
              </h1>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
        {/* content */}
        <div
          className="flex flex-col gap-4 w-full lg:w-[40%]"
          ref={leftSideRef}
        >
          <h1 className="font-semibold text-defined-black text-xl">About Us</h1>
          <h1 className="text-defined-black font-bold text-3xl">
            Drive Safe, Drive Smart - Let’s Join The{" "}
            <span className="text-defined-green">New Tarakhnath Motor Training School!</span>
          </h1>
          <p className="text-defined-brown">
            <span className="text-defined-black font-semibold">
              {" "}
              New Taraknath Motor Training School
            </span>{" "}
            is one of the oldest and most trusted motor training schools in
            Siliguri, dedicated to providing comprehensive driving education.
            With 20+ years of experience, we have trained thousands of confident
            drivers, ensuring road safety and responsible driving habits. Our
            expert instructors offer personalized motor training for both
            two-wheelers and four-wheelers, guiding learners through practical
            and theoretical lessons. We also assist with theoretical exam
            preparation, vehicle health fitness certification, and insurance
            services, making us a one-stop destination for all motor training
            needs. Whether you’re a beginner or looking to refine your driving
            skills, we provide a structured learning experience with a focus on
            safety and efficiency. At
            <span className="text-defined-black font-semibold">
              {" "}
              New Taraknath Motor Training School
            </span>
            , we are committed to helping you drive with confidence. Join us
            today and take the first step towards becoming a skilled driver!
          </p>
          {content.map((c, i) => {
            return (
              <div key={i} className="flex gap-2 font-semibold justify-center items-start">
                <Image
                  src="/global/done.svg"
                  alt="done"
                  width={20}
                  height={20}
                  className="w-auto h-auto object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-defined-black text-xl">{c.title}</h1>
                  <p className="text-defined-brown font-normal">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
