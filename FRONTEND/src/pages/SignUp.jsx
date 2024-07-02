import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const response = await fetch(
      "https://mern-auth-backend-xi.vercel.app/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    setLoading(false);
    console.log(data);
    if (data.title) {
      setError(data.title);
    }
    navigate("/sign-in");
  };
  return (
    <div className="mx-auto max-w-sm m-40 rounded-lg bg-gradient-to-tr from-cyan-400 to-red-500 p-1 shadow-2xl  shadow-violet-800">
      <div className="bg-white p-6 rounded-lg shadow-2xl">
        <h1 className="text-3xl text-center font-semibold my-7 uppercase bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="bg-slate-200 p-3 mx-6 rounded-lg shadow-xl"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="bg-slate-200 p-3 mx-6 rounded-lg shadow-xl"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="bg-slate-200 p-3  mx-6 rounded-lg shadow-xl"
          />
          <button
            disabled={loading}
            className="bg-gradient-to-r from-red-500 to-yellow-400 hover:from-yellow-400 hover:to-red-500
            text-white font-extrabold p-3 mx-6 rounded-lg uppercase disabled:opacity-80 shadow-xl"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-3 mt-6 mx-7 mb-3">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-600">Sign In</span>
          </Link>
        </div>
        <p className="text-red-700">{error && "Something went wrong!"}</p>
      </div>
    </div>
  );
};

export default SignUp;
