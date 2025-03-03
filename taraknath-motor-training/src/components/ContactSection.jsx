import Image from "next/image";
import EnquiryFormCard from "../components/cards/EnquiryFormCard";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Link from "next/link";
const ContactSection = () => {
  const contact = [
    {
      icon: <FaWhatsapp size={20} />,
      text: "+91 82507 42988",
      link: "https://wa.me/918250742988"
    },
    {
      icon: <MdCall size={20} />,
      text: "+91 82507 42988",
      link : "tel:918250742988"
    },
    {
      icon: <MdEmail size={20} />,
      text: "ntmtssiliguri@gmail.com",
      link : "mailto:ntmtssiliguri@gmail.com"
    },
    {
      icon: <FaLocationDot size={20} />,
      text: "Hatir More SBI ATM, Ward 17, Subhaspally, Hatirmore, Siliguri, WB - 734001",
      link: "#"
    },
  ];

  const follow = [
    {
      icon: <FaInstagram size={20} />,
      text: "Instagram",
    },
    {
      icon: <FaFacebook size={20} />,
      text: "Facebook",
    },
    {
      icon: <FaGoogle size={20} />,
      text: "Google",
    },
    {
      icon: <FaYoutube size={20} />,
      text: "Youtube",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-3 w-full h-auto p-8">
        <h1 className="text-3xl font-bold text-defined-black">
          Get in <span className="text-defined-green">Touch</span>
        </h1>
        <p>
          Have questions or need assistance? At New Taraknath Motor Training
          School, we’re here to help! Whether you’re looking to enroll in our
          two-wheeler or four-wheeler training programs, need guidance on
          theoretical exams, or require support with vehicle fitness and
          insurance, our team is just a call or message away. Reach out to us
          via phone, email, or visit our office in Siliguri for personalized
          assistance. We value your trust and are committed to providing prompt
          and reliable responses to ensure your journey with us is smooth and
          hassle-free. Contact us today!
        </p>

        <div className="flex flex-col md:flex-row gap-4 relative">
          <Image
            src="/images/serviceandcontactus-background.jpg"
            width={500}
            height={500}
            alt="service-img"
            className="w-full h-[55rem] md:h-[30rem] object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-center text-defined-white p-10 gap-6">
            <div className="flex flex-col gap-2 w-full md:w-[60%]">
              <div className="flex gap-4 flex-col w-full">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-start">
                    <span className="text-defined-green">Contact</span>{" "}
                    Information
                  </h1>
                  {contact.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center  w-full"
                    >
                      <span className="text-defined-green">{item.icon}</span>
                     <Link href={item.link} target="_blank"><span>{item.text}</span></Link>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold text-start text-defined-green">
                    Folow with us
                  </h1>
                  {follow.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center  w-full"
                    >
                      <span className="text-defined-green">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[40%]">
              <EnquiryFormCard />
            </div>
          </div>

        </div>
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.461208015161!2d88.41107397490107!3d26.725586116762177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4411a8f608017%3A0x6152da09ef547352!2sTaraknath%20Motor%20Traning%20School!5e1!3m2!1sen!2sin!4v1740978028098!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{"border":"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
      </div>
    </section>
  );
};

export default ContactSection;
