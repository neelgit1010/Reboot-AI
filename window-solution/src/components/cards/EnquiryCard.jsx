import Image from "next/image";

const EnquiryCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="w-auto h-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full p-3 border border-gray-200 rounded-md"
            />
            <input
              type="mobile"
              placeholder="Mobile Number"
              name="mobile"
              className="w-full p-3 border border-gray-200 rounded-md"
            />
            <select
              name="service"
              id=""
              className="w-full p-3 border border-gray-200 rounded-md"
            >
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="upvc-windows">UPVC Windows</option>
              <option value="ss-Railing">SS Railing</option>
              <option value="false-ceiling">False Ceiling</option>
              <option value="moduler-kitchen">Moduler Kitchen</option>
            </select>
            <input
              type="text"
              placeholder="Message"
              name="message"
              className="w-full p-3 border border-gray-200 rounded-md"
            />
            <button
              type="submit"
              className="w-full hover:cursor-pointer text-white py-2 px-8 rounded-md font-semibold bg-gradient-to-r from-defined-blue to-defined-orange bg-[length:200%_100%] bg-left transition-all duration-700 hover:bg-right"
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default EnquiryCard