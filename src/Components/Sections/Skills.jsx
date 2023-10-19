'use client'
import React from "react";
import { motion } from "framer-motion";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const skills = ['Javascript', 'Svelte', 'React', 'Next.js', 'Firebase', 'MongoDB', 'Capacitor', 'Swift', 'Ionic','Node JS', 'JSDB', 'Figma', 'Flutter', 'Unity', 'TailwindCSS','MUI','Python', 'Git', 'Webstorm']

function Skills() {
    return (
        <motion.div
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="absolute top-20 uppercase md:tracking-[20px] text-black text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
                Skills
            </h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-10">
                Here are some of the technologies I&apos;ve been working with recently:
            </h3>

            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
            >
                <TagCloud
                    className="pt-24 text-sm text-dracula md:pt-0"
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    })}
                >
                    {[...skills]}
                </TagCloud>
            </motion.div>
        </motion.div>
    );
}

export default Skills;