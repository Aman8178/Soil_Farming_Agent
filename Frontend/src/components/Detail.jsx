import React from "react";
import { Link } from "react-router-dom";
import details from "../../public/details.jpg";

function Detail() {
  return (
    <div className="my-10 navbar bg-base-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-4 md:space-y-8">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-100 rounded-full">
            Smart Agriculture & Soil Health
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Empowering Farmers with <span className="text-green-600">Precision Soil Intelligence</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Manage and monitor soil health with ease. Our platform helps you understand soil classifications, match optimal crops, calculate fertilizer needs, and implement sustainable agricultural practices for higher yields.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/course">
              <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 border-none shadow-md">
                Explore Soil Advisory
              </button>
            </Link>
            <Link to="/aboutus">
              <button className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6">
                Learn More
              </button>
            </Link>
          </div>
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
