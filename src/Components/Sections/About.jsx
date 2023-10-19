'use client'
import { motion } from 'framer-motion'
import Image from "next/image";
import personalPicture from '../../assets/alvaroBuda.JPG'
export default function About(){
    return (
        <motion.div
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="absolute top-20 uppercase text-black md:tracking-[20px] text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
                About me
            </h3>
            <motion.div
                className='flex flex-col md:flex-row justify-center items-center w-full'
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
            >
            <div className="w-full pt-24 md:pt-0 text-center flex flex-col justify-center lg:text-left">
                <h4
                    className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                >
                    I'm Alvaro Capdevila, a Student and Web Developer
                </h4>
                <p className="pt-6 font-body leading-relaxed text-grey-20">
                    I'm a  software engineer undergrad at Universidad Panamericana. I'm a team work person and a quick learner. I'm competitive, passionate and love a good challenge. I'm always looking for new opportunities to learn and grow as a person and as a professional.
                </p>
                <div
                    className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
                >
                    <div className="flex items-center justify-center sm:justify-start">
                        <p className="font-body text-lg font-semibold uppercase text-grey-20">
                            Connect with me
                        </p>
                        <div className="hidden sm:block">
                            <i className="bx bx-chevron-right text-2xl text-primary"></i>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                    >
                        <a target="_blank" href="https://github.com/AlvaroCapde">
                            <i
                                className="bx bxl-github text-2xl text-primary hover:text-yellow"
                            ></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/AlvaroCapde94" className="pl-4">
                            <i
                                className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
                            ></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/alvaro-capdevila-45214319b/" className="pl-4">
                            <i
                                className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                            ></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/alvarocapde/" className="pl-4">
                            <i
                                className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center pl-0 pt-10 lg:pl-12 lg:pt-0">
                <Image className='object-cover w-96 h-96 rounded-full' src={personalPicture}/>
            </div>
            </motion.div>
        </motion.div>
    )
}