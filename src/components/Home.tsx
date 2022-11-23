import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"

function Home() {
    return (
        <div id="Home" className="w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Cody Therrien</h1>
                <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">I’m a Data Scientist / Machine Learning Engineer</h2>
                <p className="text-[#8892b0] py-4">
                    I enjoy working on challenging problems with interesting 
                    people to build innovative and game changing products, 
                    while having a little fun along the way. 
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        View Work 
                        <span className="group-hover:rotate-90 duration-200">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home