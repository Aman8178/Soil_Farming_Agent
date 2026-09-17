import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';

function Contactus() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    toast.success("Thank you! Your agricultural query has been received.");
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 md:pt-36 pb-16 px-4 md:px-8 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-700/80">
          <div className="text-center mb-8">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 rounded-full mb-3">
              Agronomist Support
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Have questions about soil classifications, crop rotation, or platform features? Send us a message.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white rounded-xl focus:border-emerald-500 focus:outline-none"
                placeholder="e.g. Aman Sharma"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white rounded-xl focus:border-emerald-500 focus:outline-none"
                placeholder="e.g. farmer@example.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="query">
                Your Farming or Soil Query
              </label>
              <textarea
                id="query"
                rows={4}
                className="textarea textarea-bordered w-full dark:bg-slate-700 dark:text-white rounded-xl focus:border-emerald-500 focus:outline-none"
                placeholder="Describe your soil condition, crop concern, or question..."
                {...register("query", { required: "Query is required" })}
              />
              {errors.query && <span className="text-red-500 text-xs mt-1 block">{errors.query.message}</span>}
            </div>

            <div className="flex items-center justify-between pt-4 gap-4">
              <Link to="/" className="btn btn-ghost text-slate-600 dark:text-slate-300 rounded-xl">
                ← Return Home
              </Link>
              <button
                type="submit"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 rounded-xl border-none shadow-md"
              >
                Submit Query
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contactus;
