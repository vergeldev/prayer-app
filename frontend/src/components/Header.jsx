import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 py-4 px-6">
      <div className="font-bold text-xl">
        <Link to="/">Prayer Creation</Link>
      </div>
      <ul className="flex items-center justify-center gap-4">
        {/* {user ? ( */}
        <li>
          <button className="btn">
            <FaSignOutAlt /> Logout
          </button>
        </li>
        {/* ) : ( */}
        <>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </>
        {/* )} */}
      </ul>
    </header>
  );
}
export default Header;
