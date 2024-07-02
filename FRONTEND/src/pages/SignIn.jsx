import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError(null);

    dispatch(signInStart());
    const response = await fetch(
      "https://mern-auth-backend-xi.vercel.app/api/auth/signin",
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    // setLoading(false);

    console.log(data);
    if (data.title) {
      // setError(data.title);
      dispatch(signInFailure(data.message));
      toast.error(data.message, {
        position: "top-right",
      });
      return;
    }
    toast.success(`Welcome! ${data.data.username.toUpperCase()}`, {
      position: "top-right",
    });
    dispatch(signInSuccess(data));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="mx-auto max-w-sm m-40 rounded-lg bg-gradient-to-tr from-cyan-400 to-red-500 p-1 shadow-2xl shadow-violet-800">
      <div className="bg-white p-6 rounded-lg shadow-2xl">
        <h1 className="bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent text-3xl text-center font-semibold my-7 uppercase">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className="bg-slate-200 p-3 mx-6 rounded-lg shadow-xl"
          />
          <button
            disabled={loading}
            className="bg-gradient-to-r from-red-500 to-yellow-400 hover:from-yellow-400 hover:to-red-500
           text-white font-extrabold p-3 mx-6 rounded-lg uppercase disabled:opacity-80 shadow-xl"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-3 mt-6 mx-7 mb-3">
          <p>Dont have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-600">Sign Up</span>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;
