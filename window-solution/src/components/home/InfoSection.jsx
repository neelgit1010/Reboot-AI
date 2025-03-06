import InfoCard from "../cards/InfoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfoSection = () => {

  const info = [
    {
      icon: "/global/electric_bolt.svg",
      title: "Energy-Efficient for Lower Bills",
    },
    {
      icon: "/global/bookmark_star.svg",
      title: "Durable and Long-Lasting Material",
    },
    {
      icon: "/global/stylus_fountain_pen.svg",
      title: "Stylish Designs, Customize Options",
    },
    {
      icon: "/global/noise_control_off.svg",
      title: "Better Insulation, Noise Reduction",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
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
        {info.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} />
        ))}
      </div>

      <div className="md:hidden w-full mx:auto h-auto p-8">
        <Slider {...settings}>
          {info.map((item, index) => (
            <InfoCard key={index} icon={item.icon} title={item.title} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default InfoSection