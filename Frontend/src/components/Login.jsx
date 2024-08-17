import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-2">
            <div>
              <span>Email</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 py-1 outline-none border rounded-md"
                placeholder="Enter your Email"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                className="w-80 px-3 py-1 outline-none border rounded-md"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
