const EnquirySection = ({heading}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <section>
      <div className="w-full h-auto p-6">
        <div className="w-full flex flex-col gap-5 h-auto p-8 bg-[#F5F5F5] rounded-xl">
          <h1 className="text-2xl font-bold text-defined-blue">
            {heading}
          </h1>

          {/* form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-2">
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
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="w-full md:w-3/4 p-3 border border-gray-200 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full md:w-1/4 hover:cursor-pointer text-white py-2 px-8 rounded-md font-semibold bg-gradient-to-r from-defined-blue to-defined-orange bg-[length:200%_100%] bg-left transition-all duration-700 hover:bg-right"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnquirySection