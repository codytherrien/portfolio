import React from "react"
import Navbar from "./components/NavBar"
import operatingSystem from "./assets/projects/operating_system.jpg"

function OperatingSystem() {
  return (
    <div>
        <Navbar />
        <div className="project-div">
            {/* Container */}
            <div className="max-w-[680px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a9ef9]">
                    Operating System Project
                </h1>
                <div className="flex justify-center py-8">
                    <img src={operatingSystem} alt="Simplex Solver Visualization" className="w-80"/>
                </div>
                <p className="text-[#676767] py-4">
                    Operating System!?! If you came here expecting to see a full working demo of an 
                    operating system written in C by a data scientist than you’re going to be sorely 
                    disappointed. What you are going to find here is three smaller projects that mimic 
                    important parts of any modern-day operating system. 
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    <span className="highlight">Package </span> 
                    Manager
                </h2>
                <p className="text-[#676767] py-4">
                    Every modern-day operating system runs multiple processes concurrently. This simple 
                    command line tool allows users to create, stop, start, kill, and list all background 
                    processes. In windows this is similar to how the task manager allows users to monitor 
                    the tasks currently running on their machine. To see the full details on how to compile 
                    and run this program on your machine check out 
                    <a 
                        className="highlight" 
                        href="https://github.com/codytherrien/operating_system/tree/main/package_manager"
                        target="_blank"> the repo</a>
                    .
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    <span className="highlight">Thread </span> 
                    Runner
                </h2>
                <p className="text-[#676767] py-4">
                    Many applications currently running on any machine use multi-threading capabilities to 
                    perform multiple tasks simultaneously or perform individual tasks faster. This thread 
                    runner application simulates this process by simulating an airport check-in system. 
                    The airport check-in system has five queues and manages both priority and economy customers. 
                    Priority customers will be processed before economy customers who have arrived before them 
                    and are still waiting to check in. Each customer object includes the customer priority, 
                    customer arrival time, and processing time.  
                </p>

                <h2 
                    className="text-2xl sm:text-5xl font-bold text-[#2f2f2e] pt-6">
                    <span className="highlight">File </span> 
                    Manager
                </h2>
                <p className="text-[#676767] py-4">
                    The most complex of the three operating system subprojects here is the file manager. 
                    This subproject consists of four command line tools that mimic how a file system runs 
                    on a modern operating system. These four command line tools accomplish this by using 
                    a virtual disk on your local machine The four command line tools are as follows: 
                </p>
                <ul className="text-[#f2fdff]">
                    <li><span className="highlight text-[#676767]">diskinfo -{'>'}</span> prints the information about the virtual disk</li>
                    <li><span className="highlight text-[#676767]">disklist -{'>'}</span> prints the information about the directories and files on the virtual disk</li>
                    <li><span className="highlight text-[#676767]">diskget -{'>'}</span> copies a file from the root directory of the disk to the local directory</li>
                    <li><span className="highlight text-[#676767]">diskput -{'>'}</span> copies a file from the local directory to any directory on the disk</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OperatingSystem