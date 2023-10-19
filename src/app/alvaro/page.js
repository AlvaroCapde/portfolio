'use client'
import Skills from "@/Components/Sections/Skills";
import About from "@/Components/Sections/About";
import { motion } from "framer-motion";
import  ChevronDownIcon from "@/Components/icons/ChevronDownIcon";
import FeaturedProjects from "@/Components/Sections/Projects";
import {projectsInfo} from "@/data/ProjectsInfo";
import { useInView } from "react-intersection-observer";
import {Experience} from "@/Components/Sections/Experience";


export default function Page() {
    const { ref: footerRef, inView: hasFullyScrolled } = useInView();
    return (
        <>
        <main>
            <section id="about" className="snap-start snap-always">
                <About/>
            </section>

            <section id="skills" className="snap-start">
                <Skills  />
            </section>

            <section id="projects" className="snap-start">
                <FeaturedProjects projects={projectsInfo}  />
            </section>
            <section id="experience" className="snap-start">
                <Experience/>
            </section>
        </main>
            <footer
                ref={footerRef}
                className="z-10 py-5 text-sm text-center text-dracula-light-50 bg-dracula-darker snap-start snap-always "
            >
                Built using Next.js TailwindCSS & Framer Motion.
            </footer>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
            >
                <ChevronDownIcon
                    className={`fixed bottom-0 left-3 right-0 flex justify-center mb-5 animate-bounce h-10 w-10 text-dracula-darker-50 transition-all duration-500 ease-in-out    ${
                        hasFullyScrolled ? "opacity-0" : "opacity-75"
                    } md:left-1/2 md:transform md:-translate-x-1/2`}
                />
            </motion.div>
            </>
    )
}