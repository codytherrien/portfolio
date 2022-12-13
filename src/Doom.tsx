import Navbar from "./components/NavBar"
import duckhunt from "./assets/projects/duck_hunt.png"
import YoutubeEmbed from "./components/YoutubeEmbed"

function Doom() {
  return (
    <div>
        <Navbar />
        <div className="project-div">
            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">
                    Reinforcement Learning Doom Agent
                </h1>
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    Using  
                    <span className="highlight"> ViZDoom </span> 
                    and 
                    <span className="highlight"> Stable Baselines </span>
                    to build Doom Agent
                </h2>
                <p className="text-[#676767] py-4">
                    Duck Hunt is a classic shooter originally designed for the 
                    Nintendo Entertainment System. The version of Duck Hunt used 
                    in this project is a little different though. As you can 
                    see from the demo below the background changes and the ducks 
                    can fly in all directions. This makes this version of Duck 
                    Hunt a much more difficult computer vision problem than the 
                    original version of Duck Hunt designed for the NES. 
                </p>

                <p className="text-[#676767] py-4">
                    You Only Look Once (YOLO)v5 is a popular object detection model 
                    that has many modern applications. YOLOv5 has risen in popularity 
                    mainly due to its unmatched combination of speed and accuracy. 
                    This cutting-edge combination of speed an accuracy makes YOLOv5 
                    a lethal model for duck hunt when fine-tuned on a substantial dataset.  
                </p>
                
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">
                    Basic  
                    <span className="highlight"> Doom </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    In this case we fine-tuned a pretrained version of YOLOv5 
                    on 500 Duck Hunt gameplay images across multiple levels. 
                    In these levels both ducks and killed ducks were labelled 
                    as distinct objects for YOLOv5 to detect. Both ducks and 
                    dead ducks were labelled as separate classes because we 
                    didn’t want the agent continuing to shoot ducks after they 
                    have been shot. Given both ducks and dead ducks have similar 
                    features in duck hunt it is likely that the model would label 
                    dead ducks as live ducks if they were not labelled separately.  
                </p>
                <YoutubeEmbed embedId="rokGy0huYEA" />

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Defend Center </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    In this case we fine-tuned a pretrained version of YOLOv5 
                    on 500 Duck Hunt gameplay images across multiple levels. 
                    In these levels both ducks and killed ducks were labelled 
                    as distinct objects for YOLOv5 to detect. Both ducks and 
                    dead ducks were labelled as separate classes because we 
                    didn’t want the agent continuing to shoot ducks after they 
                    have been shot. Given both ducks and dead ducks have similar 
                    features in duck hunt it is likely that the model would label 
                    dead ducks as live ducks if they were not labelled separately.  
                </p>
                <YoutubeEmbed embedId="rokGy0huYEA" />

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Deadly Corridor </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    In this case we fine-tuned a pretrained version of YOLOv5 
                    on 500 Duck Hunt gameplay images across multiple levels. 
                    In these levels both ducks and killed ducks were labelled 
                    as distinct objects for YOLOv5 to detect. Both ducks and 
                    dead ducks were labelled as separate classes because we 
                    didn’t want the agent continuing to shoot ducks after they 
                    have been shot. Given both ducks and dead ducks have similar 
                    features in duck hunt it is likely that the model would label 
                    dead ducks as live ducks if they were not labelled separately.  
                </p>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
        </div>
    </div>
  )
}

export default Doom