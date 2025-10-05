import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   // ✅ Access Vite environment variable
  const apiUrl = import.meta.env.VITE_BASE_URL;

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${apiUrl}/user/login`, userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black dark:bg-gray-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-4">Login</h3>

            {/* Email */}
            <div className="mb-4 space-y-1">
              <label htmlFor="email" className="block">
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
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mb-4 space-y-1">
              <label htmlFor="password" className="block">
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
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition"
              >
                Login
              </button>
              <p className="text-center">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 dark:text-blue-400"
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
