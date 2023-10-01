import Navbar from "./components/NavBar"
import wordle from "./assets/projects/wordle.png"
import YoutubeEmbed from "./components/YoutubeEmbed"

function Wordle() {
  return (
    <div>
        <Navbar />
        <div className="project-div">
            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">
                    Wordle in C++
                </h1>
                <div className="flex justify-center py-4">
                    <img src={wordle} alt="Wordle logo" className="w-80"/>
                </div>
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    Building 
                    <span className="highlight"> Wordle </span> 
                    using 
                    <span className="highlight"> C++ </span>
                    and
                    <span className="highlight"> SFML</span>
                </h2>
                <p className="text-[#676767] py-4">
                    If you miss the days of web1.0 where there was no way to run in browser web applications, 
                    and you had to download applications to run them locally, then you’ll love this project! 
                    You can now download the popular browser-based game that everyone loves. Wordle! 
                </p>
                <p className="text-[#676767] py-4">
                    So why build this project in C++? Well, despite C++’s short comings (and there are a 
                    lot of them), C++ is still the leading language when building performant 2D and 3D games. 
                    Now the graphics of this Wordle game won’t impress like a 3D open-world game built with 
                    Unreal Engine 5, but it shows the amount of quality code needed to develop a game in C++ 
                    using the SFML library.  
                </p>
                <p className="text-[#676767] py-4">
                    What is the SFML library? Good question. SFML or Simple and Fast Multimedia Library is a 
                    cross-platform software development library designed to provide a simple API for developers 
                    in multiple languages.  
                </p>
                <p className="text-[#676767] py-4">
                    Instead of boring you with a drawn-out description of how this game works check out the demo 
                    below, the GiHub link 
                    <a 
                        className="highlight" 
                        href="https://github.com/codytherrien/wordle_cpp"
                        target="_blank"
                        rel="noreferrer"> here</a>
                    , or play it on your own system!
                </p>
                <YoutubeEmbed embedId="rM0lFUB2lBFk" />
            </div>
        </div>
    </div>
  )
}

export default Wordle