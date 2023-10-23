import AnimatedText from "@/components/AnimatedText";
import Image from 'next/image';
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import picProfile from "../../public/images/profile/perdiy.jpg";
import { useSpring, useMotionValue, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experince from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const AnimatedTextNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="my-4 font-medium">
                                Hello, my name is Perdi Yansyah also known as Perdiy. I am a Computer Scientist college graduate.
                            </p>
                            <p className="font-medium">
                                Frontend developer specialized in Flutter, React.JS, and Swift. Passionate in delivering apps that are usable and get things done without sacrificing the quality, integrity and values of apps. I'm a team player that always keen to learn new things.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                        ">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light " />
                            <Image src={picProfile} alt="Codebucks" className='w-full h-auto rounded-2xl' 
                             priority
                             sizes='(max-widht: 768px) 100vw,
                             (max-widht: 1200px) 50vw, 
                             33vw'
                             />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedTextNumbers value={10} />+
                                </span>
                                <h2 className="text-1xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm
                                ">Project completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedTextNumbers value={2} />+
                                </span>
                                <h2 className="text-1xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm
                                
                                ">Year experience Web</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedTextNumbers value={1} />+
                                </span>
                                <h2 className="text-1xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm
                                ">Year experience Mobile</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experince />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about