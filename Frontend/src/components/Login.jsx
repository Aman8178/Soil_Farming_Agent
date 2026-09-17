import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../config/api";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const [, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(`${API_BASE_URL}/user/login`, userInfo);
      if (res.data && res.data.user) {
        toast.success("Login successful!");
        localStorage.setItem("users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);

        // Close the modal
        const modal = document.getElementById("my_modal_2");
        if (modal && typeof modal.close === "function") {
          modal.close();
        }

        // Navigate to home page
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Login failed. Please verify your credentials.");
      }
    }
  };

  const handleClose = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal && typeof modal.close === "function") {
      modal.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 dark:text-white">
          <button
            type="button"
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <span className="text-sm font-medium">Email</span>
              <br />
              <input
                type="email"
                className="w-full px-3 py-2 outline-none border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 mt-1"
                placeholder="Enter your Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
              )}
            </div>
            <div>
              <span className="text-sm font-medium">Password</span>
              <br />
              <input
                type="password"
                className="w-full px-3 py-2 outline-none border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 mt-1"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-xs text-red-500 mt-1 block">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bg-green-600 text-white rounded-md px-5 py-2 hover:bg-green-700 duration-200 font-medium"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link
                  to="/signup"
                  onClick={handleClose}
                  className="underline text-green-600 font-medium cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
