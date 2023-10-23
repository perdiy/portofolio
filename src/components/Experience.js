import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-1xl xs:text-lg">{position}&nbsp;<a href={companyLink}
                target="_blank"
                className="text-primary dark:text-primaryDark capitalize "

            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experince = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start" ]
        }
    )

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text4xl md:mb-16">
                Experience
            </h2>

            <div  ref={ref} className="w-[75%] mx-auto relative lg:w-[90] md:w-full">
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    < Details
                        position="IOS Developer"
                        company="PhinCon"
                        companyLink="https://phincon.com"
                        time="07/2023-09/2023"
                        address="Jakarta Pusat"
                        work="During my Bootcamp training, I successfully developed an e-commerce
                    application using the UIKit framework in the Swift programming language. In this project, I effectively implemented the MVVM (Model- View-ViewModel) architectural pattern. Furthermore, the project is seamlessly integrated with a backend API, enabling us to dynamically retrieve essential data for our application."
                    />

                    < Details
                        position="Full Stack Developer"
                        company="Piarea"
                        companyLink="https://piarea.co.id"
                        time="08/2021-11/2021"
                        address="Bogor"
                        work="On Job Traning (OJT) at PiareaThis project provides a website look that showing several animated videos made by the company and also introducing the company's products such as animation design."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experince 