// import logo from '../assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner'
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import BasicMenu from './ProfileMenu';

export default function Navbar() {
    return (
        <div>
            <Banner />
            <div className='container p-5'>
                <nav className='navbar d-flex justify-content-between align-items-center'>
                    <div className="left logo">
                        <h1>S-Mart</h1>
                        {/* <img src={logo} alt="Logo" /> */}
                    </div>
                    <div className="nav-links">
                        <ul className='d-flex align-items-center gap-5'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Sign Up</a></li>
                        </ul>
                    </div>
                    <div className="right d-flex align-items-center justify-content-center">
                        <div className="search-field d-flex align-items-center">
                            <input type="text" placeholder='What are you looking for ?' />
                            <span className='search-icon'>
                                <BiSearch size={22} />
                            </span>
                        </div>
                        <div className='right-icons d-flex'>
                            <a href=""><BiHeart size={22} /></a>
                            <a href=""><BiCart size={22} /></a>
                            <div className='profile-div'>
                                <BasicMenu />
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

