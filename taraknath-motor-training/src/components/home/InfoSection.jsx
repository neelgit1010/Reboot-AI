import InfoCard from "../cards/InfoCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const InfoSection = () => {
  const cards = [
    {
      icon: "/global/info1.svg",
      title: "Beginner-Friendly Environment",
    },
    {
      icon: "/global/info2.svg",
      title: "Flexible Class Schedule",
    },
    {
      icon: "/global/info3.svg",
      title: "Expert Driving Instructors",
    },
    {
      icon: "/global/info4.svg",
      title: "Fast License Process",
    },
    {
      icon: "/global/info5.svg",
      title: "Safety-First Driving Approach",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section>
      <div className="hidden md:flex gap-4 p-8 justify-around items-center">
        {cards.map((card, index) => (
          <InfoCard key={index} icon={card.icon} title={card.title} />
        ))}
      </div>

      <div className="md:hidden w-full mx:auto h-auto p-12">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <InfoCard key={index} icon={card.icon} title={card.title} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default InfoSection