import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


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