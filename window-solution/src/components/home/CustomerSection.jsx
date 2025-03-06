import CustomerCard from "../cards/CustomerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerSection = () => {
  const reviews = [
    {
      desc: "Window Solution provided excellent UPVC windows for my home. The quality is outstanding, and their service was professional and timely. Highly recommended!",
      name: "Rahul A.",
    },
    { desc: "I love my new UPVC doors! They are sturdy,stylish, and require zero maintenance. The installation team was efficient and friendly.Great experience!", name: "Pooja V." },
    { desc: "The SS railing installation was flawless. It looks sleek and modern while providing great durability. Window Solution truly delivers high-quality products and services.", name: "Ankur D." },
    {
      desc: "Got a modular kitchen designed, and it’s perfect! The storage is well-planned, and the materials are top-notch. Absolutely love the transformation.",
      name: "Sonal M.",
    },
    {
      desc: "Their false ceiling work transformed my office. It looks elegant, and the insulation has improved indoor comfort. Reliable service with great attention to detail.",
      name: "Vikram R.",
    },
    { desc: "Excellent UPVC windows and doors! They enhance my home’s aesthetics while being strong and easy to maintain. Great value for money. Highly satisfied!", name: "Noopur S." },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="flex flex-col gap-4 justify-center items-center p-8">
        <h1 className="text-3xl font-bold w-max bg-gradient-to-r from-defined-blue to-defined-orange bg-clip-text text-transparent">
          Our Customer Feedback
        </h1>
        <div key={reviews.length} className="w-full mx-auto p-8 h-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <CustomerCard
                key={index}
                review={review.desc}
                name={review.name}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
