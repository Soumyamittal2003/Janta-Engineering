import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoding] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoding(true); // Corrected typo here
  
    try {
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/users/loginAdmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensure the content type is set to JSON
          },
          body: JSON.stringify({ email, password }), // Pass the necessary data
        }
      );
  
      const result = await response.json();
      console.log("result", result);
  
      if (result.success) {
        // Handle success scenario
        setLoding(false);
        alert(result.message);
        
        // Optionally, handle further actions here, e.g., storing token, redirecting
        // localStorage.setItem('token', result.token);
        // navigate('/dashboard');
      } else {
        // Handle failure scenario
        setLoding(false);
        alert(result.message);
        console.error("Failed to login:", result.message);
      }
    } catch (error) {
      // Handle any other errors
      setLoding(false);
      console.error("Error logging in:", error);
    }
  };
  
  return (
    <>
      {" "}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto dark:hidden"
                src="/path/to/logo.svg"
                alt="Logo"
              />
              <img
                className="mx-auto h-12 w-auto hidden dark:block"
                src="/path/to/logo-dark.svg"
                alt="Logo"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
           
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="admin@gmail.com"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
{/* 
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div> */}

            <div>
              {
                loading?
                <button
                className=" text-center w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Spinner/>
              </button>: <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
              }
             
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/admin/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
