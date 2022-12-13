import React from "react"
import Navbar from "./components/NavBar"
import simplex from "./assets/projects/simplex.png"

function RLSimplexSolver() {
  return (
    <div>
        <Navbar />
        <div className="project-div">
            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">
                    Reinforcement Learning Simplex Solver
                </h1>
                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    What is the  
                    <span className="highlight"> Simplex Method </span> 
                    and Why build this 
                    <span className="highlight"> Solver?</span>
                </h2>
                <p className="text-[#676767] py-4">
                    The Simplex method is an exterior point algorithm for solving 
                    systems of linear equations. So, what does that exactly mean? 
                    A system of linear equations can be thought of as multiple 
                    constraints applied while trying to maximize a single equation. 
                    In this case all these constraints must be linear, or they can 
                    only be raised to the first power. This may sound confusing so 
                    let’s try to visualize this in 3D. 
                </p>

                <p className="text-[#676767] py-4">
                    Take a look at the image below. The volume within the polygon represents 
                    all the possible solutions to the problem given the constrains. 
                    Yes, the volume is non-zero so there are an infinite number of 
                    possible solutions. But remember we are not trying to find just any 
                    solution. We are trying to find the optimal solution. To find the 
                    optimal solution the Simplex method starts at an arbitrary vertex and 
                    slowly moves towards the optimal point. Because this is a system of 
                    linear equations the optimal solution must be at either a vertex or 
                    along an edge. 
                </p>
                <div className="flex justify-center py-4">
                    <img src={simplex} alt="Simplex Solver Visualization" className="w-80"/>
                </div>

                <p className="text-[#676767] py-4">
                    At this point you may have questions about exactly how the 
                    simplex method works, or why even build a Simplex solver. 
                    I won’t answer the first question in detail here, but if you 
                    are interested in doing a deep dive into the full mechanics 
                    of the simplex method I would recommend starting at the 
                    Wikipedia article. The second question, a good one, why build 
                    a Simplex solver, is a good one. There are other Simplex solvers 
                    out there, but none use reinforcement learning for pivot selection. 
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e]  pt-6">
                    What is  
                    <span className="highlight"> Pivot Selection </span> 
                    and Why use 
                    <span className="highlight"> Reinforcement Learning?</span>
                </h2>

                <p className="text-[#676767] py-4">
                    What is pivot selection? Well, if you took that deep dive into 
                    how the simplex method works you should be able to tell me 
                    but if you didn’t don’t worry about it. Let’s go back to our 
                    3D polygon example above. In this example you can see the red 
                    line (our simplex solution) slowly moving along edges to get 
                    closer and closer to the optimal solution. In many cases you 
                    will notice that at each vertex there are multiple possible 
                    edges to follow to move closer to the optimal solution. The 
                    astute observer may also notice, in this example that it takes 
                    seven steps for this solver to move from the starting point 
                    to the optimal solution, but the shortest path is only five steps! 
                </p>

                <p className="text-[#676767] py-4">
                    This is where reinforcement learning comes in. Each of these moves 
                    along an edge the simplex method makes is call a pivot (mainly 
                    because of how the math is working, but I’ll leave that for your 
                    deep dive). At each pivot or vertex the simplex solver can use one 
                    of three rules to determine which edge to take. The three pivot 
                    rules are bland’s rule, dansig’s rule, and largest increase. I 
                    won’t bore you with the details of how all these rules work, but 
                    the long and short of it is that each of these rules can lead to 
                    different edges being travelled, and in turn faster or slower solves.  
                </p>

                <p className="text-[#676767] py-4">
                    So finally, reinforcement learning, what are we using it for? Well 
                    for pivot selection. And that right there is why this solver is 
                    different to all the other simplex solvers out there. This solver 
                    uses a deep Q-network to determine which pivot rule should be made 
                    at each step resulting in fewer steps and ideally the shortest path.  
                </p>

            </div>
        </div>
    </div>
  )
}

export default RLSimplexSolver