import { useState } from "react";

const EnquirySection = ({heading}) => {
     const [form, setForm] = useState({});
     const handleSubmit = (e) => {
       e.preventDefault();

       if (!form.name || !form.mobile || !form.service || !form.message) {
         alert("Please fill all the fields");
         return;
       }

       if (form.mobile.length !== 10) {
         alert("Please enter a valid mobile number");
         return;
       }

       const dest = "+919749888898";
       let message = `*Name:* ${form.name}
*Phone:* ${form.mobile}
*Service needed:* ${form.service}
*Message:* ${form.message}
  `;
       message = encodeURIComponent(message);
       // Check if user is on mobile
       const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
       const baseUrl = isMobile
         ? "https://api.whatsapp.com/send"
         : "https://web.whatsapp.com/send";

       const url = `${baseUrl}?phone=${dest}&text=${message}`;
       window.open(url, "_blank").focus();
     };
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
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  name="mobile"
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-md"
                />
                <select
                  name="service"
                  id=""
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
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