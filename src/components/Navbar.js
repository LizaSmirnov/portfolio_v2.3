import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="dropdown">
        <Link to="/" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </Link>
        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to="/AboutMe">More About Me</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-text">
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >Welcome</MovingComponent>
      </div>
      <div className="navbar-right">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://user-images.githubusercontent.com/122588135/219527503-a46e0315-17dc-4654-920f-dc1a8409df5c.jpg" alt="avatar" />
          </div>
        </label>
        <div className="navbar flex justify-end">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Dark Mode</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === "dark"}
                onChange={() =>
                  theme === "dark" ? changeTheme("corporate") : changeTheme("dark")
                }
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



 

   


