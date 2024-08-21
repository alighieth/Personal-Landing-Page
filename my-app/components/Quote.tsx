import React from "react";

const Quote = () => {
  return (
    <section className="flex flex-col justify-center items-center h-auto md:h-[30vh] w-full p-5">
      <span className="self-start text-6xl italic font-serif">''</span>
      <h3 className="text-3xl font-mono">
        Do not go where the path may lead, go instead where there is no path and
        leave a trail.
      </h3>
      <span className="self-end text-6xl italic font-serif">''</span>
      <h3 className="text-3xl font-mono">- Ralph Waldo Emerson</h3>
    </section>
  );
};

export default Quote;
