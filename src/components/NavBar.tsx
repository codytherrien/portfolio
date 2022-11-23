import React from "react"
import Logo from "../assets/10x.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from "react-scroll";

function Navbar() {
    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Work",
        "Contact"
    ]

    //const menuItems = [
    //    <li>Home</li>,
    //    <li>About</li>,
    //    <li>Skills</li>,
    //    <li>Work</li>,
    //    <li>Contact</li>
    //]
    const [nav, setNav] = React.useState(false)
    function handleClick() {
        setNav((prevNav: Boolean) => !prevNav)
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" style={{width: "100px"}}/>
            </div>

            
            {/* menu */}
            <ul className="hidden md:flex">
                {menuItems.map(item => (

                    <li>
                        <Link
                            to={item}
                            smooth={true}
                            offset={0}
                            duration={500} 
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* hamberger */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {nav ? <FaTimes /> : <FaBars />}
                
            </div>
            {/* mobile menu */}
            <ul className={nav ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"}>
                {menuItems.map(item => (
                    <li className="py-6 text-4xl">
                        <Link
                            to={item}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={handleClick}
                        >
                            {item}
                        </Link>
                    </li>
                ))}

            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/cody-therrien-a4609b178/"
                            target="_blank"
                        >
                            LinkedIn<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/codytherrien"
                            target="_blank"
                        >
                            Github<FaGithub size={30} />
                        </a>
                    </li> 
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto: codyrt@umich.edu"
                        >
                            Email<HiOutlineMail size={30} />
                        </a>
                    </li> 
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="/"
                            target="_blank"
                        >
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar