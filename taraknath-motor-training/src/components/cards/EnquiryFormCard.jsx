const EnquiryFormCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
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
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <input
          type="number"
          placeholder="Mobile Number"
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <select
          name="package"
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
          className="bg-defined-white text-defined-black w-full rounded-md p-3 opacity-50 outline-none
          "
        />
        <button className="bg-defined-green text-defined-white w-full rounded-md p-3">Enroll Today!</button>
      </form>
    </div>
  );
}

export default EnquiryFormCard