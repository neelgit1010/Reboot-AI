import Image from "next/image";
import EnquiryFormCard from "../cards/EnquiryFormCard";
import Link from "next/link";

const ServiceSection = () => {
  const items = [
    {
      title:
        "New Driving License - 4 Wheeler - 2500 With Exam, Without Exam - 4500",
      link: "/",
    },
    {
      title: "2 Wheeler - 2000 With Exam, Without Exam - 4000",
      link: "/",
    },
    {
      title: "Duplicate Driving License - 1500",
      link: "/",
    },
    {
      title: "Driving License Renewal - 1200",
      link: "/",
    },
    {
      title: "Re-Registration - Call for more details",
      link: "tel:918250742988",
    },
    {
      title: "Name Transfer - Call for more details",
      link: "tel:918250742988",
    },
    {
      title: "Vehicle fitness  - Call for more details",
      link: "tel:918250742988",
    },
    {
      title: "Permit details - Call for more details",
      link: "tel:918250742988",
    },
    {
      title: "Car Authorization Letter - Online 300 Offline 400",
      link: "/",
    },
    {
      title: "All Vehicle",
      link: "/",
    },
  ];
  return (
    <section>
      <div className="p-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-defined-black">
          Our Driving <span className="text-defined-green">Services</span>
        </h1>
        <p className="text-defined-black tracking-widest font-semibold">
          Safe. Professional. Reliable. Skilled.
        </p>

        <div className="flex flex-col md:flex-row gap-4 relative">
          <Image
            src="/images/serviceandcontactus-background.jpg"
            width={500}
            height={500}
            alt="service-img"
            className="w-full h-[70rem] md:h-[30rem] object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center text-defined-white p-10 gap-6">
            <div className="flex flex-col gap-2 w-full md:w-[60%]">
                <div className="flex gap-2 items-center  w-full">
                  <Image
                    src="/package/star-g.svg"
                    width={200}
                    height={200}
                    alt="package-img"
                    className="w-auto h-[1.2rem] object-cover"
                  />
                  <h1 className="text-2xl font-bold text-start">
                    Driving License 24 Wheelers
                  </h1>
                </div>
                {items.map((item, index) => (
                  <div key={index} className="flex gap-2 md:items-center w-full">
                    <Image
                      src="/global/done-r.svg"
                      alt="done"
                      width={20}
                      height={20}
                      className="w-auto h-[1rem] object-cover"
                    />
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[40%]">
                <EnquiryFormCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
