import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios";
import toast from 'react-hot-toast';
import { API_BASE_URL } from '../config/api';
import { useAuth } from '../context/AuthProvider';

function Signup() {
  const [, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${API_BASE_URL}/user/signup`, userInfo);
      if (res.data && res.data.user) {
        toast.success("Account created successfully!");
        localStorage.setItem("users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Signup failed. Please verify your details or network connection.");
      }
    }
  };

  const handleOpenLogin = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    }
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center bg-gray-50 dark:bg-slate-900 px-4'>
        <div className='w-full max-w-md'>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 relative">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
              ✕
            </Link>
            <h3 className="font-bold text-2xl text-slate-800 dark:text-white">Create Account</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Join the Soil Farming Agent platform
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Full Name</span>
                <input
                  type="text"
                  className="w-full px-3 py-2 outline-none border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 mt-1"
                  placeholder="Enter your full name"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.fullname.message}</span>
                )}
              </div>

              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email Address</span>
                <input
                  type="email"
                  className="w-full px-3 py-2 outline-none border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 mt-1"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
                <input
                  type="password"
                  className="w-full px-3 py-2 outline-none border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 mt-1"
                  placeholder="Create a password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.password.message}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg px-4 py-2.5 duration-200 shadow-md"
                >
                  Create Account
                </button>
              </div>

              <div className="text-center pt-2">
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-green-600 font-semibold cursor-pointer"
                    onClick={handleOpenLogin}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Login />
    </>
  );
}

export default Signup;
