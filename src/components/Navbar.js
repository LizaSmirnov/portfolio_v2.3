import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div class = "navabr bg-base-100">
  <div class="navbar">
    <div class="dropdown">
      <Link to ="/" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </Link>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a><Link to="/AboutMe">More About Me</Link></a></li>
        <li><a><Link to="/Portfolio">Portfolio</Link></a></li>
        <li><a><Link to="/Resume">Resume</Link></a></li>
        <li><a><Link to="/Contact">Contact</Link></a></li>
      </ul>  
       </div>
       <div className="navbar text-accent felx justify-end text-6xl" >
         <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >
          Welcome
        </MovingComponent>
      </div>
    <div class="navbar flex display-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://user-images.githubusercontent.com/122588135/219527503-a46e0315-17dc-4654-920f-dc1a8409df5c.jpg" />
        </div>
      </label>
      <div className="navbar flex justify-end">
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
  </div>
</div>
  );
};







 

   

export default Navbar;
