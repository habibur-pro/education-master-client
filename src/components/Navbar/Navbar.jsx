import { NavLink } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled more than a certain amount (e.g., 100px)
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <nav className={`fixed w-full z-50 text-white ${scrolled ? "bg-white" : ""}`}>
            <MyContainer>
                <div className="flex justify-between items-center my-4">
                    <div>
                        <h3 className="text-3xl font-bold">Education Master</h3>
                    </div>
                    <ul className="flex gap-5 items-center text-lg">
                        <li>
                            <NavLink
                                to="/"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/college"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                College
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admission"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                Admission
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my_colleges"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                My colleges
                            </NavLink>
                        </li>

                    </ul>
                    <div >
                        <div className="flex items-center gap-5">
                            {/* <div className="rounded-full bg-white p-2 flex items-center ">

                                <span title="Search" className="text-2xl font-bold">  <CiSearch /></span>
                                <input className=" rounded-full" type="text" />

                                <button className="btn btn-primary rounded-full">Search</button>

                            </div> */}

                            <div className="relative mx-auto text-gray-600 lg:block hidden">
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                                    <span title="Search" className="text-xl font-bold">  <CiSearch /></span>
                                </button>
                            </div>






                            <div className="flex items-center gap-5">
                                <NavLink
                                    to="/login"
                                    className={` text-lg ${({ isActive }) => {
                                        isActive ? "text-red-500" : ""
                                    }}`}
                                >
                                    Login
                                </NavLink>
                                <button className="btn btn-primary rounded-full btn-md px-7">SignUp</button>
                            </div>


                        </div>
                    </div>
                </div>
            </MyContainer>
        </nav>
    );
};

export default Navbar;