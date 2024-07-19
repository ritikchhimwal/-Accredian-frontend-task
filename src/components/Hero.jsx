import React, { useState } from "react";
import FormModel from './FormModel';

const Hero = () => {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center gap-16 bg-sky-200 px-20 py-4 rounded-full shadow-2xl">
          <a href="#" className="text-blue-600">
            Refer
          </a>
          <a href="#" className="text-gray-600">
            Benefits
          </a>
          <a href="#" className="text-gray-600">
            FAQs
          </a>
          <a href="#" className="text-gray-600">
            Support
          </a>
        </div>
      </div>
      <div className="flex mx-32 my-12 mt-2 justify-center bg-sky-100 rounded-[80px] gap-40 items-stretch shadow-2xl">
        <div className="p-2 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4">
            Let's Learn <br />& Earn
          </h2>
          <p className="text-lg mb-4">
            Get a chance to win up-to{" "}
            <span className="text-blue-600">Rs. 15,000</span>
          </p>
          <button onClick={handleShowForm} className="bg-blue-600 text-white px-6 py-3 rounded-[80px]">
            Refer Now
          </button>
          {showForm && <FormModel onClose={handleCloseForm} />}
        </div>
        <img src="./hero.svg" alt="Hero" className="w-1/2 h-full "/>
      </div>
    </div>
  );
};

export default Hero;
