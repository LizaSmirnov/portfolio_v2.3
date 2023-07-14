import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import MovingComponent from "react-moving-text";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="navbar bg-primary rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
          </label>
          <ul
            tabIndex={0}
            data-theme="light"
            className="menu menu-l dropdown-content mt-4 z-[1] p-2 shadow rounded-box w-40 text-xl"
          >
            <li>
              <a href="#AboutMe">About</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Portfolio">Resume</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center text-accent text-6xl" >
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >
          Liza Smirnov
        </MovingComponent>
      </div>
      <div className="navbar-end">
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Dark Mode</span>
            <input
              type="checkbox"
              class="toggle toggle-primary"
              checked
              onClick={() =>
                theme === "dark"
                  ? changeTheme("corporate")
                  : changeTheme("dark")
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
