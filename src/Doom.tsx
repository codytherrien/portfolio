import Navbar from "./components/NavBar"
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
                    Doom, the classic 1993 first-person shooter was developed by id Software for MS-DOS 
                    systems. Over 30 years later the same game has been recreated to run in a Python 
                    environment with ViZDoom. VizDoom also allows to integrate Doom with Open-AI Gym to 
                    allow for reinforcement learning agents to interact with the game environment. In this 
                    case I used stable baselines3, a python library that includes many popular reinforcement 
                    learning algorithms, as the framework for the reinforcement learning agent. The Proximal 
                    Policy Optimization (PPO) algorithm was selected as the model for these Doom agents 
                    because it regularly produces state-of-the-art results while maintaining relative simplicity 
                    with regards to model setup and tuning.
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">
                    Basic  
                    <span className="highlight"> Doom </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    The first level trained and tested on was the basic firing range level. In each episode 
                    the goal is to shoot the monster at the far end of the firing range as fast as possible. 
                    The monster cannot shoot back, and the agent receives a reward at the end of the episode 
                    based on how fast it shot the monster. Shoot the monster faster, gain more reward. Simple.
                </p>
                <YoutubeEmbed embedId="pZJPr0W4b2k" />

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Defend Center </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    The second level the agent was let loos on was the defend the center level. Unfortunately, 
                    in this level there is no way to win the level. Monsters continually spawn at the edges of 
                    the level and slowly approach. The goal is to kill as many monsters as possible before dying. 
                    The only catch is you have limited ammo.
                </p>
                <YoutubeEmbed embedId="xo1vtENegyM" />

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">  
                    <span className="highlight">Deadly Corridor </span>
                    Demo
                </h2>
                <p className="text-[#676767] py-4">
                    The deadly corridor. This is where things got tricky, and I recommend checking out the code 
                    <a 
                        href="https://github.com/codytherrien/doom_rl" 
                        className="highlight"
                        target="_blank"
                        rel="noreferrer"> here</a>
                    . For this level any attempts to simply train the agent on the level failed. In this 
                    level the agent receives reward at each timestep relative to how close they are to the health 
                    pack at the end of the corridor. The closer they are, the more reward. Based on this, with no 
                    reward shaping, the agent runs forward, gets shot, and dies. Using this strategy, the agent 
                    never makes it to the health pack and never wins.
                </p>
                <p className="text-[#676767] py-4">
                    To beat this level two reinforcement learning tricks were used: reward shaping and curriculum 
                    learning. Reward shaping is the process of changing how the agent is rewarded for different 
                    actions in the environment. Since the agent will need to maintain health while killing the 
                    enemies on the way to the health pack, negative reward was given for losing health and 
                    positive reward was given for dealing damage and killing enemies. 
                </p>
                <p className="text-[#676767] py-4">
                    The second trick, curriculum learning, involves altering the environment to improve an 
                    agent’s ability to learn. Given the difficulty of the level, if an agent with no experience, 
                    or nearly no experience interacts with this level with near random actions it will die almost 
                    instantly. These early deaths would make learning nearly impossible for the agent. To change 
                    this the agent was trained on five different levels of difficulty. Starting with the easiest 
                    level of difficulty and working up to the hardest level. This gave the agent a chance to 
                    explore more in the easier versions of the level to find the optimal path to victory! 
                </p>
                <YoutubeEmbed embedId="Ukqr77-LOXo" />
            </div>
        </div>
    </div>
  )
}

export default Doom