import React from 'react'
import SectionTitle from './SectionTitle'
import { amazon, shoeStore, weather } from "../public/assets"
import Image from 'next/image'
import {TbBrandGithub} from "react-icons/tb"
import {RxOpenInNewWindow} from "react-icons/rx"

const Projects = () => {
    return (
        <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title='Some Things I have built' titleNo='03.' />
            {/* ProjectOne */}
           <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
           <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href='https://shoe-store-frontend-nu.vercel.app/' target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain" src={shoeStore} alt="shoestore" />
                        </div>
                    </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end
                 text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold -mt-4'>Shoe Store</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md -mt-4'>
                        An Shoe Store website for visualizing personalized Shoe
                        Store website. View your products, Add your account with{" "}
                        <span className='text-textGreen'>O-auth</span> and then make 
                        the purchase using <span className='text-textGreen'>stripe</span>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
                    gap-2 md:gap-5 justify-between text-textDark -mt-4'>
                        <li>Nextjs</li>
                        <li>JavaScript</li>
                        <li>Strapi</li>
                        <li>Render.com</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className='text-2xl flex gap-4 -mt-4'>
                        <a href="https://github.com/"
                            className='hover:text-textGreen duration-300'
                            target="_blank">
                            <TbBrandGithub />
                        </a>
                        <a href="https://shoe-store-frontend-nu.vercel.app/"
                            className='hover:text-textGreen duration-300'
                            target="_blank">
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            {/* secondproject */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row-reverse gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href='https://ramangupta1602.github.io/weather/' target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain" src={weather} alt="weather" />
                        </div>
                    </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end
                 text-right  z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold -mt-4'>Shoe Store</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md -mt-4'>
                        An Shoe Store website for visualizing personalized Shoe
                        Store website. View your products, Add your account with{" "}
                        <span className='text-textGreen'>O-auth</span> and then make 
                        the purchase using <span className='text-textGreen'>stripe</span>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex 
                    gap-2 md:gap-5 justify-between text-textDark -mt-4'>
                        <li>Nextjs</li>
                        <li>JavaScript</li>
                        <li>Strapi</li>
                        <li>Render.com</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className='text-2xl flex gap-4 -mt-4'>
                        <a href="https://github.com/"
                            className='hover:text-textGreen duration-300'
                            target="_blank">
                            <TbBrandGithub />
                        </a>
                        <a href="https://shoe-store-frontend-nu.vercel.app/"
                            className='hover:text-textGreen duration-300'
                            target="_blank">
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
                </div>
            </div>
           </div>
        </section>
    )
}

export default Projects