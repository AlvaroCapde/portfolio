import {motion} from "framer-motion";


export function Experience() {
    return (
        <motion.div
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="absolute top-20  uppercase md:tracking-[20px] text-black text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
                Experience
            </h3>
            <motion.div
                className='flex flex-col md:flex-row justify-center pt-40 items-center w-full'
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
            >
                <div className="container mx-auto w-full h-full">
                    <div className=" wrap overflow-hidden p-10 h-full">
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">Finance Director in the Students Council</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    Managed the finances and communication with providers and sponsors for student events throught the year including:
                                    NEXT: Summit aimed to help the youth with international speakers (2,000 attendees)
                                    Student Race: yearly event (400 attendees)</p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div className="order-1 bg-blue-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Junior Dev @ IsoTalent</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Software developer of a global ATS (applicant tracking system) service for the recruiting industry.
                                    Start up environment with a team of 10 developers from 4 different countries. </p>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="order-1 bg-green-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">Freelance and Junior Dev @ Healthtree </h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Developed a fitness app available in iOS and Android for a non-profit that helps cancer patients wanting to have a healthy lifestyle. Currently working as a Junior Dev.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}