import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/pr.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='Genered by create next app'></meta>

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0  md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='CodeBucks' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes='(max-widht: 768px) 100vw,
              (max-widht: 1200px) 50vw, 
              33vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:self-center'>
              <AnimatedText text="I am Front End Developer." className=' !text-4xl !text-left 
              xl-!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
              ' />
              <p className='my-5 text-base font-medium md:text-sm sm:text-xs '>
              Hello World, my name is Perdi Yansyah also known as Perdiy. I am a Computer Scientist college graduate. frontend developer specialized in Mobile and Website. Passionate in delivering apps that are usable and get things done without sacrificing the quality, integrity and values of apps.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Perdi's Resume.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                '
                  download={true}
                >Resume</Link>
                <Link
                  href="mailto:perdiyansyah111@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark border-b-4 border-black hover:border-primary transition duration-300 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
