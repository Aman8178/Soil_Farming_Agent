import React from "react";
import details from "../../public/details.jpg";

function Detail() {
  return (
    <div className="my-10 navbar bg-base-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-4 md:space-y-12">
          <h1 className="text-4xl font-bold">
            Welcome to the <span className="text-green-500">Soil Farming Agent</span>!
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Manage and monitor soil health with ease. Our platform helps you track soil conditions, connect with distributors, and optimize farming practices. Whether you're an admin or a user, we provide the tools you need to make informed decisions and enhance agricultural productivity.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
      <div className="order-1 w-full md:w-1/2 mt-12 md:mt-0 bg-gray-100 p-4 rounded-lg">
        <img
          src={details}
          alt="Soil Farming"
          className="w-full h-auto object-cover rounded-lg shadow-lg filter brightness-95 contrast-105"
        />
      </div>
    </div>
  );
}

export default Detail;
