import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contactus() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
    alert("Form submitted successfully!");
  };

  return (
    <div className='px-8 justify-center items-center'>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
              Query
            </label>
            <textarea
              id="query"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your query"
              {...register("query", { required: "Query is required" })}
            />
            {errors.query && <span className="text-red-500 text-xs italic">{errors.query.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
        </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
