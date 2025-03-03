import { useState } from "react";

const EnquiryFormCard = () => {

  const [form, setForm] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.name || !form.mobile || !form.package || !form.message) {
          alert("Please fill all the fields");
          return;
        }

        if (form.mobile.length !== 10) {
          alert("Please enter a valid mobile number");
          return;
        }

        const dest = "+918250742988";
        let message = `*Name:* ${form.name}
  *Phone:* ${form.mobile}
  *Package needed:* ${form.package}
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
      
    }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-defined-white">
        Ready to <span className="text-defined-green">Drive?</span> Book Your
        Lesson Today!{" "}
      </h1>
      <p className="text-defined-white tracking-widest font-semibold">
        Fast. Friendly. Helpful.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <input
          type="number"
          placeholder="Mobile Number"
          name="mobile"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <select
          name="package"
          onChange={(e) => setForm({ ...form, package: e.target.value })}
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none"
          id=""
        >
          <option value="package" disabled>
            Select Package
          </option>
          <option value="Standard Package">Standard Packagee</option>
          <option value="Home Service Package">Home Service Package</option>
          <option value="Special Package">Special Package</option>
          <option value="Scooty Package">Scooty Package</option>
          <option value="Bike Package">Bike Package</option>
        </select>
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <button type="submit" className="bg-defined-green text-defined-white w-full rounded-md p-3">Enroll Today!</button>
      </form>
    </div>
  );
}

export default EnquiryFormCard