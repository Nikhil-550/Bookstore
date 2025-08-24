import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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
    await axios
      .post(`${process.env.REACT_APP_API_URL}/user/signup`, userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="modal-box bg-white text-black dark:bg-gray-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-4">Signup</h3>

            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullname" className="block mb-1">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md outline-none bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                {...register("fullname", { required: true })}
                aria-label="Full name"
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                {...register("email", { required: true })}
                aria-label="Email address"
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                {...register("password", { required: true })}
                aria-label="Password"
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition"
              >
                Signup
              </button>
              <p className="text-center text-sm">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 dark:text-blue-400"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
