import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="https://glowing-duckanoo-ff2344.netlify.app/" className="text-2xl font-bold text-gradient">
                <a href="https://glowing-duckanoo-ff2344.netlify.app/" className="text-2xl font-bold text-gradient">Create Resume - HireLogic</a>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
