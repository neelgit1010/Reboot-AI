import { useState } from "react";

const EnquiryCard = () => {
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
    <div className="w-full h-full p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 text-black">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border border-black rounded-md"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="w-full p-3 border border-black rounded-md"
            />
            <select
              name="service"
              id=""
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full p-3 border border-black rounded-md"
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
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border border-black rounded-md"
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