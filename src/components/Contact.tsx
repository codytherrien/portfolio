import React from "react"

interface Props {
    source: string
}

function Contact(props: Props) {
    
    return (
        <div id="Contact" className="page-div flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/ed998bd3-437c-4a06-8deb-ec062053bea7" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="title">Contact</p>
                </div>
                {props.source === "project" ? 
                    <div>
                        <p className="text-[#f2fdff] pb-3">
                            This project is under development let me know if you
                            would like more info!
                        </p>
                    </div> :
                    <div></div>
                }
                <input className="p-2 bg-[#676767] text-[#f2fdff]" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#676767] text-[#f2fdff]" type="email" placeholder="Email" name="email" />
                <textarea className="p-2 bg-[#676767] text-[#f2fdff]" name="message" rows={10} placeholder="Message"></textarea>
                <button className="text-[#f2fdff] border-2 hover:bg-[#0a9ef9] hover:border-[#0a9ef9] px-6 py-3 my-8 mx-auto flex items-center">
                    {props.source === "home" ?
                        "Let's Collaborate" :
                        "More Info"
                    }
                </button>
            </form>
        </div>
    )
}

export default Contact