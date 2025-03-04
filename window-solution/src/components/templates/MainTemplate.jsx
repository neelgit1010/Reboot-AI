import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import OnlyMobile from "./OnlyMobile";

const MainTemplate = ({ children }) => {
  return (
    <div className="flex w-full h-full flex-col overflow-x-hidden">
      <div className=" z-[1000] w-full">
        <Header />
      </div>

      {/* Main Content */}
      <div className=" lg:mt-[5rem] md:mt-[5rem] mt-[4rem]"> {children}</div>

        <OnlyMobile />
      <Footer />
    </div>
  );
};

export default MainTemplate;
