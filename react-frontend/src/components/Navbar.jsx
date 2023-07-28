// import logo from '../assets/logo.svg'
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import BasicMenu from "./ProfileMenu";

export default function Navbar() {
  return (
    <div>
      <header className="header ">
        <nav className="navbar  ">
          <div className="logo">
            <h1>S-Mart</h1>
            {/* <img src={logo} alt="Logo" /> */}
          </div>
          <div className="nav-links">
            <ul className="">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="search-field">
              <input type="text" placeholder="What are you looking for ?" />
              <span className="search-icon">
                <BiSearch size={22} />
              </span>
            </div>
            <div className="right-icons ">
              <a href="">
                <BiHeart size={22} />
              </a>
              <a href="">
                <BiCart size={22} />
              </a>
              <div className="profile-div">
                <BasicMenu />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
