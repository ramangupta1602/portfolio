import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBd from './works/ReactBd';
import Google from './works/Google';
import Apple from './works/Apple';
import LinkedIn from './works/LinkedIn';
import Slack from './works/Slack';


const Exprience = () => {
    const [workReactbd, setWorkReactbd] = useState(true)
    const [workGoogle, setWorkGoogle] = useState(false)
    const [workApple, setWorkApple] = useState(false)
    const [workLinkedIn, setWorkLinkedIn] = useState(false)
    const [workSlack, setWorkSlack] = useState(false)

    const handleReactbd = () => {
        setWorkReactbd(true)
        setWorkApple(false)
        setWorkGoogle(false)
        setWorkLinkedIn(false)
        setWorkSlack(false)
    }
    const handleGoogle = () => {
        setWorkReactbd(false)
        setWorkGoogle(true)
        setWorkApple(false)
        setWorkLinkedIn(false)
        setWorkSlack(false)
    }
    const handleApple = () => {
        setWorkReactbd(false)
        setWorkGoogle(false)
        setWorkApple(true)
        setWorkLinkedIn(false)
        setWorkSlack(false)
    }
    const handleLinkedIn = () => {
        setWorkReactbd(false)
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkLinkedIn(true)
        setWorkSlack(false)
    }
    const handleSlack = () => {
        setWorkReactbd(false)
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkLinkedIn(false)
        setWorkSlack(true)
    }

    return (
        <section id='experience'
            className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4 '>
            <SectionTitle title='Where I have Worked ' titleNo='02.' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col '>
                    <li onClick={handleReactbd} 
                    className={`${workReactbd 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 test-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBD</li>
                    <li onClick={handleGoogle} 
                    className={`${workGoogle
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 test-sm cursor-pointer duration-300 px-8 font-medium`}>Google</li>
                    <li onClick={handleApple} 
                    className={`${workApple 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 test-sm cursor-pointer duration-300 px-8 font-medium`}>Apple</li>
                    <li onClick={handleSlack} 
                    className={`${workSlack
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 test-sm cursor-pointer duration-300 px-8 font-medium`}>Slack</li>
                    <li onClick={handleLinkedIn} 
                    className={`${workLinkedIn
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"}  border-l-2 bg-transparent
                    hover:bg-[#112240] py-3 test-sm cursor-pointer duration-300 px-8 font-medium`}>LinkedIn</li>
                </ul>
                {workReactbd && <ReactBd />}
                {workGoogle && <Google />}
                {workApple && <Apple />}
                {workLinkedIn && <LinkedIn />}
                {workSlack && <Slack />}
            </div>
        </section>
    )
}

export default Exprience