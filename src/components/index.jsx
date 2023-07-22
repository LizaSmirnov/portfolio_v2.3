import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../actions/userActions';



import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const index = ({currentPath}) => {
useEffect(() => {
    console.log('currentPath:', currentPath);
}, [currentPath]);

switch (currentPath) {
    case 'About':
        return <About />;
    case 'Portfolio':
        return <Portfolio />;
    case 'Contact':
        return <Contact />;
    case 'Resume':
        return <Resume />;
    default:
        return <About />;
}
};   