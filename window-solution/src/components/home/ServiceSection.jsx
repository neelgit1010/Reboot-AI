import ServiceCard from "../cards/ServiceCard";

const ServiceSection = () => {

    const services = [
      {
        icon: "/services/window.jpg",
        title: "uPVC Window",
        desc: "Our UPVC windows are durable, energy-efficient, and noise-reducing. Custom designs and weather resistance enhance aesthetics, security, and long-term performance for homes and businesses.",
      },
      {
        icon: "/services/door.jpg",
        title: "uPVC Door",
        desc: "Upgrade your space with stylish and secure UPVC doors. Designed for strength, insulation, and low maintenance, they resist weather damage, termites, and rust, ensuring durability and elegance for years.",
      },
      {
        icon: "/services/ssrailing.jpg",
        title: "SS Railing",
        desc: "Our stainless steel railings provide modern aesthetics, strength, and corrosion resistance. Perfect for balconies, staircases, and terraces, they offer durability, safety, and sleek design for residential and commercial spaces.",
      },
      {
        icon: "/services/falseceiling.jpg",
        title: "False Ceiling",
        desc: "Enhance interiors with our false ceiling solutions, offering thermal insulation, soundproofing, and aesthetic appeal. Designed for homes, offices, and commercial spaces, they improve lighting and add a touch of elegance.",
      },
      {
        icon: "/services/modularkitchen.jpg",
        title: "Moduler Kitchen",
        desc: "Transform your kitchen with our custom modular designs. Featuring efficient storage, premium materials, and stylish finishes, our solutions ensure functionality, durability, and a contemporary look for modern homes.",
      },
    ];

  return (
    <section>
      <div className="w-full h-auto p-8 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold w-max bg-gradient-to-r from-defined-blue to-defined-orange bg-clip-text text-transparent">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection