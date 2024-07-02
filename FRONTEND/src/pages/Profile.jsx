import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOut,
} from "../redux/user/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      hanldeFileUpload(image);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const hanldeFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());
    const res = await fetch(
      `https://mern-auth-backend-cyan.vercel.app/api/user/update/${currentUser.data._id}`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.title) {
      dispatch(updateUserFailure(data.message));
      return;
    }
    dispatch(updateUserSuccess(data));
    toast.success(`Updated Successfully`, {
      position: "top-right",
    });
  };

  const handleDeleteAccount = async () => {
    dispatch(deleteUserStart());
    const res = await fetch(
      `https://mern-auth-backend-cyan.vercel.app/api/user/delete/${currentUser.data._id}`,
      {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await res.json();
    if (data.title) {
      dispatch(deleteUserFailure(data.message));
      return;
    }
    dispatch(deleteUserSuccess(data));
  };

  const handleSignOut = async () => {
    try {
      await fetch(
        "https://mern-auth-backend-cyan.vercel.app//api/auth/signout",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch(signOut());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3 max-w-sm m-40 mx-auto bg-white rounded-3xl shadow-2xl shadow-gray-950  border-4 border-purple-600">
      <h1 className="text-3xl font-semibold text-center my-7">
        {currentUser.data.username}
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.profilePicture || currentUser.data.profilePicture}
          alt="Profile Picture"
          className="h-30 w-28 self-center rounded-full cursor-pointer object-cover mt-2 shadow-lg shadow-gray-900 border-b-4"
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">Error Uploading Image</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-700">{`Uploading : ${imagePercent}%`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-700 font-semibold">
              Image Uploaded Successfully
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          defaultValue={currentUser.data.username}
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          className="bg-slate-200 rounded-lg p-3 mx-10 shadow-lg"
        />
        <input
          defaultValue={currentUser.data.email}
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-slate-200 rounded-lg p-3 mx-10 shadow-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-slate-200 rounded-lg p-3 mx-10 shadow-lg"
        />
        <button
          disabled={loading}
          className="bg-gradient-to-r from-red-500 to-yellow-400 hover:from-yellow-400 hover:to-red-500 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80 mx-10 font-extrabold uppercase"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5 mx-10">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer font-semibold"
        >
          Delete Account
        </span>
        <span
          onClick={handleSignOut}
          className="text-red-700 font-semibold cursor-pointer"
        >
          Sign Out
        </span>
      </div>
      <ToastContainer />
      <p className="text-red-700 mt-5">
        {error ? error || "Something went wrong!" : ""}
      </p>
    </div>
  );
};

export default Profile;
