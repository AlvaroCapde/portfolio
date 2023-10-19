import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


function ProjectCard({ project }) {
    // Make them swipeable

    return (
        <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen gap-2 px-10 m-10 snap-center md:justify-items-center md:justify-center md:p-44">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-24 h-24 my-5 md:h-36 md:w-36 lg:h-40 lg:w-40 unselectable"
            >
                <Image
                    src={project.image}
                    alt={`${project.title} Logo`}
                    width={400}
                    height={400}
                    className="w-24 h-24 rounded-full md:h-36 md:w-36 lg:h-40 lg:w-40"
                />
            </motion.div>

            <div className="max-w-6xl px-0 space-y-2 md:px-10">
                <h4 className="text-3xl font-semibold text-center md:text-4xl">
                    {project.title}
                </h4>
                <p className="text-base text-center lg:text-xl lg:text-left xs:text-xs md:pb-5">
                    {project.description}
                </p>
            </div>
            <div className="flex items-center my-10 mt-5 space-x-5">
                {project.link && (
                    <a
                        href={project.link ?? ""}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center px-4 py-2 space-x-2 text-sm text-white justify-center transition-all rounded-md bg-white hover:bg-dracula-light hover:text-dracula"
                    >
                        <span className='text-black'>Learn more</span>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;