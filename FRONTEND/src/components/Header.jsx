import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-500 to-pink-500 m-1 rounded-md shadow-2xl sticky top-0 z-50">
      <div className="flex justify-between items-center p-3">
        <h1 className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-500 inline-block text-transparent bg-clip-text font-bold text-2xl">
          <NavLink to="/">Auth App</NavLink>
        </h1>
        <ul className="flex gap-4">
          <NavLink to="/">
            <li className="text-white font-extrabold hover:opacity-90 uppercase">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="text-white font-extrabold hover:opacity-90 uppercase">About</li>
          </NavLink>
          <NavLink to="/profile">
            {currentUser ? (
              <img src={currentUser.data.profilePicture} alt="DP" className="h-7 w-7 rounded-full object-cover"/>
            ) : (
              <li className="text-white font-extrabold hover:opacity-90 uppercase">Sign In</li>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
