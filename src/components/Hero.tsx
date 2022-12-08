import React from "react"
import xyz from "../assets/xyz.png"

function Hero() {
    return (
        <div id="Hero" className=" shadow-2xl">
            <div className="max-w-[680px] mx-auto px-8 flex flex-col items-center justify-around h-full">
                <div>
                    <img src={xyz} alt="10xer logo" width="400px"/>
                </div>
                <div className="py-20">
                    <h2 
                        className="text-2xl sm:text-3xl font-bold text-[#333333] py-10"
                        style={{textShadow: "1px 1px 1px #ff9922"}}
                    >"I don't wanna live in a world where someone else makes the world a better place better than we do."
                    </h2>
                    <h2 
                        className="font-bold text-[#ccd6f6] text-right px-10"
                        style={{textShadow: "0px 0px 8px black"}}
                    >- Gavin Bellson</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Hero
/*
<div 
            id="Hero" 
            className="w-full h-screen bg-[#0a192f]"
        >
            <img src={earth} alt="Eath from space" className="w-full"/>
            <div className="max-w-[680px] mx-auto px-8 py-10 flex flex-col justify-center">
                <h2 
                    className="text-2xl sm:text-3xl font-bold text-[#ccd6f6]"
                >"I don't wanna live in a world where someone else makes the world a better place beter than we do."
                </h2>
                <h2 className="font-bold text-[#8892b0] text-right px-10 py-5">- Gavin Bellson</h2>
            </div>
        </div>
*/