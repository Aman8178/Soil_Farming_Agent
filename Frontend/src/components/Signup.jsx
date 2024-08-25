import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onSubmit =async (data) => {
    // Handle form submission logic here
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup succesfull!');
      }
      localStorage.setItem("users", JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      }
    })
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center border-shadow'>
        <div className='w-[600px]'>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  className="w-80 px-3 py-1 outline-none border rounded-md"
                  placeholder="Enter your Full Name"
                  {...register("fullname", { required: "Name is required" })}
                />
                <br />
                {errors.fullname && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              <div className="mt-4 space-y-2">
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
                  Signup
                </button>
                <p className='text-xl'>
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </button>
                  {" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showLoginModal && <Login />}
    </>
  );
}

export default Signup;
