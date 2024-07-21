import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white">Starships</Link>
                </li>
                <li>
                    <Link to="/characters" className="text-white">Characters</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
