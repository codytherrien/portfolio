import React from "react"
import bash from "../assets/skills/bash_logo.png"
import cpp from "../assets/skills/cpp_logo.png"
import gcp from "../assets/skills/gcp_logo.png"
import git from "../assets/skills/git_logo.png"
import python from "../assets/skills/python_logo.png"
import pytorch from "../assets/skills/pytorch_logo.png"
import sql from "../assets/skills/sql_logo.png"
import tensorflow from "../assets/skills/tensorflow_logo.png"



function Skills() {
    const skills = [
        {
            name: "Python",
            image: python
        },
        {
            name: "C++",
            image: cpp
        },
        {
            name: "TensorFlow",
            image: tensorflow
        },
        {
            name: "PyTorch",
            image: pytorch
        },
        {
            name: "SQL",
            image: sql
        },
        {
            name: "Bash",
            image: bash
        },
        {
            name: "GCP",
            image: gcp
        },
        {
            name: "Git",
            image: git
        },
    ]

    const skillsElements = skills.map(skill => (
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between">
            <img src={skill.image} alt={`${skill.name} logo`} className="w-20 mx-auto"/>
            <p className="my-4 text-[#f2fdff]">{skill.name}</p>
        </div>
    ))

    return (
        <div id="Skills" className="page-div">
            <div className="max-w-[680px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="title">Skills</p>
                    <p className="py-4 text-[#f2fdff]"> These are some of the tools I use frequently</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skillsElements}
                </div>
            </div>
        </div>
    )
}

export default Skills