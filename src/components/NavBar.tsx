import React from "react"
import Logo from "../assets/10x.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import { HashLink } from "react-router-hash-link"

function Navbar() {
    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ]

    const [nav, setNav] = React.useState(false)
    function handleClick() {
        setNav((prevNav: Boolean) => !prevNav)
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#191919] text-[#f2fdff]">
            <div className="cursor-pointer"> 
                <HashLink smooth to="/#Hero">
                    <img src={Logo} alt="10xer Logo" style={{width: "100px"}}/>
                </HashLink>
            </div>

            
            {/* menu */}
            <ul className="hidden md:flex">
                {menuItems.map(item => (
                    <li>
                        <HashLink smooth to={`/#${item}`}>
                            {item}
                        </HashLink>
                    </li>
                ))}
            </ul>

            {/* hamberger */}
            <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
                {nav ? <FaTimes /> : <FaBars />}
                
            </div>
            {/* mobile menu */}
            <ul className={nav ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"}>
                {menuItems.map(item => (
                    <li className="py-6 text-4xl">
                        <HashLink smooth to={`/#${item}`}>
                            <p onClick={handleClick}>{item}</p>
                        </HashLink>
                    </li>
                ))}

            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/cody-therrien-a4609b178/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/codytherrien"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github<FaGithub size={30} />
                        </a>
                    </li> 
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a9ef9]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto: codyrt@umich.edu"
                        >
                            Email<HiOutlineMail size={30} />
                        </a>
                    </li> 
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#676767]">
                        <a 
                            className="flex justify-between items-center w-full text-gray-300"
                            href="/cody_therrien_resume.pdf"
                            target="_blank"
                            rel="noreferrer"
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