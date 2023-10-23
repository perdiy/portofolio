import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import project1 from "../../public/images/projects/kresa.png";
import project2 from "../../public/images/projects/kresa2.png";
import project3 from "../../public/images/projects/safety.png";
import project4 from "../../public/images/projects/fruit.png";
import project5 from "../../public/images/projects/shoe.png";
import project6 from "../../public/images/projects/Laza.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <div className="w-full h-auto relative group">
                    <Image src={img} alt={title} className="w-full h-auto group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-center pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                <div className="w-10 h-10 relative group">
                    <Link href={github} target="_blank" className="w-10"> <GithubIcon className="w-full h-auto group-hover:scale-110 transition-transform duration-300 ease-in-out dark:text-light"/></Link>
                    </div>
                    <Link href={link} target="_blank"
                       className='ml-4 flex items-center bg-dark text-light p-2.5 px-6
                       rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                       border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
                       sm:px-4 sm:text-base
                       '
                    >Visit Project</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <div className="w-full h-auto relative group">
                    <Image src={img} alt={title} className="w-full h-auto group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">{title}</h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                        className="text-lg font-semibold hover:underline underline-offset-2 dark:text-light md:text-base"
                    >Visit</Link>
                    <div className="w-8 h-8 relative group">
                    <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon className="w-full h-auto group-hover:scale-110 transition-transform duration-300 ease-in-out dark:text-light"/></Link>
                    </div>
                </div>
            </div>
        </article>

    )
}


const projects = () => {
    return (
        <>
            <Head>
                <title>Projects page</title>
                <met name='description" content="any description' />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center darK:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Kresa | Website"
                                img={project1}
                                summary="Create UI design and prototype for Web with Axure RP Develop Website for customer with React.JS and Laravel create backend with Laravel
                                Develop Website with React.JS"
                                link="/"
                                github="https://github.com/perdiy/KRESA"
                                type="Featured Project"

                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Kresa | Website"
                                img={project2}
                                summary=""
                                link="/"
                                github="https://github.com/perdiy/KRESA"
                                type="Featured Project"

                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Safety Driving Asisstance | Mobile"
                                img={project3}
                                summary="an application for final college assignments with application features for marking accident-prone locations and a driving companion application."
                                link="/"
                                github="https://github.com/perdiy/safety-driving-assistance"
                                type="Featured Project"

                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title=" Shop Fruit | Mobile"
                                img={project4}
                                summary=""
                                link="/"
                                github="https://github.com/perdiy/fruitShop"
                                type="Mobile Apps"

                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Shoe | Mobile"
                                img={project5}
                                summary=""
                                link="/"
                                github="https://github.com/perdiy/Shop-Shoes"
                                type="Mobile Apps"

                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Laza Mall | Mobile IOS"
                                img={project6}
                                summary="Develop Mobile app service with Swift UIKIT,
                                calling api for app data from backend,
                                implementation of the mvvm structure for the project."
                                link="/"
                                github="https://github.com/perdiy/Laza-learn"
                                type="Featured Project"

                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects