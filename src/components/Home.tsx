import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"
import { HashLink } from "react-router-hash-link"

function Home() {

    return (
        <div id="Home" className=" page-div">

            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#f2fdff]">Hey, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">Cody Therrien</h1>
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]"
                >I’m a <span className="highlight">Data Scientist</span> & <span className="highlight">Machine Learning Engineer</span>
                </h2>
                <p className="text-[#676767] py-4">
                    If you’re tired of living in a world where someone else is 
                    making the world a better place better than you, you’ve 
                    come to the right place. Lets make the world a better 
                    place together!
                </p>
                <div>
                    <button 
                        className="text-[#f2fdff] group border-2 my-2 hover:bg-[#0a9ef9] hover:border-[#0a9ef9]"
                    >
                        <HashLink
                            className="px-6 py-3 flex items-center"
                            smooth
                            to="/#Contact"
                        >
                            Contact Cody 
                            <span className="group-hover:rotate-90 duration-200">
                                <HiArrowNarrowRight className="ml-3" />
                            </span> 
                        </HashLink>
                         
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Home