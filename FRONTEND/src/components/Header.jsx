import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-400">
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold">
          <NavLink to="/">Auth App</NavLink>
        </h1>
        <ul className="flex gap-4">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/sign-in'>Sign In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
