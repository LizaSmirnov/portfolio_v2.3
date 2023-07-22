import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeContext } from "./ThemeProvider";
const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
        <Helmet>
<html lang="en" data-theme={theme} />
</Helmet> 
        <Navbar/>
          
          <Outlet />
          <Footer/>
        </>
      )
    };
    
export default Layout;