import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import Image from 'next/legacy/image';
import Design from '../public/perico.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import carnivoraz from '../public/ProyectoCarnivorazViews.png';
import japon from '../public/JapanViews.png';
import refugio from '../public/ProyectoRefugioViews.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Martin M Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px20 lg:px-40 dark:bg-gray-900'>
       <section className='min-h-screen'>
        <nav className='p-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons dark:text-white'>Welcome</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill 
              onClick={() =>setDarkMode(!darkMode)} 
              className='cursor-pointer text-2xl
              dark:text-white' />
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="">Resume</a>
              </li>
          </ul>
        </nav>
        <div className=' text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Martin M</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Developer</h3>
          <p className='text-md py-5 text-amber-700 leading-8 md:text-xl max-w-lg mx-auto'>
            Javascript - React - SQL - Git - Java 
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-80 md:w-80' >
           <Image src={Design} layout='fill'/>
        </div>
       </section>

       <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Skills</h3>
          <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
            Here you can see the spoken and programming languages I know, but also some design tools.
          </p>
        </div>

        <div className='lg:flex gap-10 justify-center'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Spoken Languages
            </h3>
            <p className='py-2 max-w-md mx-auto'>
              Foreign languages I have used for personal, academic and professional purposes. 
            </p>
            <h4 className='py-4 text-teal-600'>Proficiency</h4>
            <p className='text-gray-800 py-1'>English C1 - Advanced</p>
            <p className='text-gray-800 py-1'>French B1 - Intermediate</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Software Development
            </h3>
            <p className='py-2 max-w-md mx-auto'>
               Languages and tools I have use with academic and personal purpose in order to build portfolio.
            </p>
            <h4 className='py-4 text-teal-600'>Programming languages and resources</h4>
            <p className='text-gray-800 py-1'>Javascript, React, Next Js</p>
            <p className='text-gray-800 py-1'>Java, SQL, C</p>
            <p className='text-gray-800 py-1'>Bootstrap, Css</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={consulting} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Design
            </h3>
            <p className='py-2 max-w-md mx-auto'>
              Desing toolS I have used in order to create wireframes and mockups before code. 
            </p>
            <h4 className='py-4 text-teal-600'>Desing tools used</h4>
            <p className='text-gray-800 py-1'>Gimp</p>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Balsamic</p>
          </div>
        </div>
       </section>
       <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
            Here you can see some of the personal projects I've created. Tools and languages used are described below each image.
          </p>
        </div>
        <div className='justify-center flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white'>
          <div className='basis-1/3 flex-1 text-center'>
            <Image src={japon} rounded-lg object-cover />
            <p>
            Figma- HTML - Css - Vanilla Javascript
            </p>
          </div>
          <div className='basis-1/3 flex-1 text-center'>
            <Image src={refugio} rounded-lg object-cover />
            <p>
            Figma- HTML - Css - Vanilla Javascript
            </p>
          </div>
          <div className='basis-1/3 flex-1 text-center'>
            <Image src={carnivoraz} rounded-lg object-cover />
            <p>
              Figma- HTML - Css - Vanilla Javascript
            </p>
          </div>
        </div>
       </section>
      </main>
    </div>
  );
}
