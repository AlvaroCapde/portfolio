import React from "react";
import { motion } from "framer-motion";
import ProjectCarousel from "../Projects/ProjectsCarousel";


function FeaturedProjects({ projects }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
        >
            <h3 className="absolute top-20 uppercase md:tracking-[20px] text-black text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
                Projects
            </h3>

            <ProjectCarousel projects={projects} />

            <div className="w-full absolute top-[30%] bg-dracula-pink/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}

export default FeaturedProjects;