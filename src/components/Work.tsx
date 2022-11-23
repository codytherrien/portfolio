import React from "react"

function Work() {
    return (
        <div id="Work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[680px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p>Check out some of my projects</p>
                </div>

                <div className="grid sm:grid-cols-2 mdgrid-cols-3 gap-4">
                    <div className="shadow-lg shaow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div">
                        <div>    
                            <span>

                            </span>
                            <div>
                                <a href="">
                                    <button>

                                    </button>
                                </a>
                                <a href="">
                                    <button>

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Work