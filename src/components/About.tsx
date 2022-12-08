import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"
import { HashLink } from "react-router-hash-link"

function About() {
    return (
        <div id="About" className="page-div">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="title">About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="max-w-[680px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className=" sm:text-right text-3xl font-bold">
                        <p className="text-[#676767]">Hi I'm Cody, a <span className="highlight text-[#2f2f2e]">creative  outside-the-box thinker and doer</span></p>
                    </div>
                    <div>
                        <p className="text-[#f2fdff]">
                            I enjoy working on challenging problems with interesting 
                            people to build innovative and game changing products, 
                            while having a little fun along the way. 
                            If you or your company is working on building exciting 
                            new products let me know!
                        </p>
                    </div>
                    <div>
                        <button 
                            className="text-[#f2fdff] group border-2 my-2 hover:bg-[#0a9ef9] hover:border-[#0a9ef9] float-right"
                        >
                            <HashLink
                                className="px-6 py-3 flex items-center"
                                smooth
                                to="/#Projects"
                            >
                                Check Out Projects 
                                <span className="group-hover:rotate-90 duration-200">
                                    <HiArrowNarrowRight className="ml-3" />
                                </span> 
                            </HashLink>

                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About