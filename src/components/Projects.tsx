import React from "react"
import {Navigate} from "react-router-dom"
import simplex from "../assets/projects/simplex.png"
import duckHunt from "../assets/projects/duck_hunt.png"
import doom from "../assets/projects/doom.jpg"
import clusterBot from "../assets/projects/cluster_bot.jpg"
import wordle from "../assets/projects/wordle.png"
import operatingSystem from "../assets/projects/operating_system.jpg"


function Projects() {
    const [projects, setProjects] = React.useState([
        {
            name: "RL Simplex Solver",
            image: simplex,
            github: "https://github.com/codytherrien/RL_simplex_solver",
            demo: "/underConstruction",
            navigate: false
        },
        {
            name: "Duck Hunt CV Agent",
            image: duckHunt,
            github: "https://github.com/codytherrien/duck_hunt_cv",
            demo: "/underConstruction",
            navigate: false
        },
        {
            name: "Doom RL Agent",
            image: doom,
            github: "https://github.com/codytherrien/doom_rl",
            demo: "/underConstruction",
            navigate: false
        },
        {
            name: "Automated Trading Bot",
            image: clusterBot,
            github: "https://github.com/codytherrien/cluster_bot",
            demo: "/underConstruction",
            navigate: false
        },
        {
            name: "Wordle in C++",
            image: wordle,
            github: "https://github.com/codytherrien/wordle_cpp",
            demo: "/underConstruction",
            navigate: false
        },
        {
            name: "Operating System",
            image: operatingSystem,
            github: "https://github.com/codytherrien/operating_system",
            demo: "/underConstruction",
            navigate: false
        }
    ])

    function handleClick(projectName: string) {
        setProjects(prevProjects => {
            return prevProjects.map(prevProject => {
                if (prevProject.name === projectName) {
                    return ({
                        ...prevProject,
                        navigate: true
                    })
                } else {
                    return prevProject
                }
            })
        })
    }

    for (let i in projects) {
        if (projects[i].navigate) {
            return (
                <Navigate to={projects[i].demo} replace={true} />
            )
        }
    }

    const projectElements = projects.map(project => (
        //{/* Grid Item */}
        <div 
            style={{backgroundImage: `url(${project.image})`}}
            className="shadow-lg shaow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
        >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  text-center">    
               <span className="text-2xl fond-bold text-[#f2fdff] tracking-wider">
                   {project.name}
               </span>
               <div className="pt-8 text-center">
                    <button
                        id={project.name} 
                        className="text-center rounded-lg px-4 py-3 m-2 bg-[#f2fdff] text-[#2f2f2e] fond-bold text-lg"
                        onClick={() => handleClick(project.name)}
                    >Demo</button>
                   <a href={project.github} target="_blank">
                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#f2fdff] text-[#2f2f2e] fond-bold text-lg">Code</button>
                   </a>
               </div>
            </div>
       </div>
    ))

    return (
        <div id="Projects" className="page-div">
            <div className="max-w-[680px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="title">Projects</p>
                </div>

                {/* Container */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {projectElements}
                    
                </div>
            </div>
        </div>
    )
} 

export default Projects