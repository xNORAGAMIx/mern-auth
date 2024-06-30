import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-400">
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold">
          <NavLink to="/">Auth App</NavLink>
        </h1>
        <ul className="flex gap-4">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/profile">
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="Profile Picture" className="h-7 w-7 rounded-full object-cover"/>
            ) : (
              <li>Sign In</li>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
