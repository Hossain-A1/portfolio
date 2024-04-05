"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { getTransition } from "./utils/getTransition";
const Hero = () => {
  return (
    <main className='wrapper sp t-margin h-auto'>
      <section className=' grid lg:grid-cols-2 grid-cols-1 gap-10  '>
        <div className='flex flex-col h-full w-full  items-center max-lg:text-center mt-10 '>
          <div className=' flex flex-col w-full h-full items-center  lg:w-[30rem]  gap-5  overflow-hidden'>
            <h1>
               Hi, I am <strong className='text-blue-500'>Hossain Ahmed</strong> a
              <u className='text-blue'>Full-Stack</u> dev
            </h1>

            <motion.p
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              {`Hello and thank you for visiting my portfolio! I'm on a mission to
              showcase my passion for developing websites that excel in both
              delivering the best user experience and demonstrating technical
              prowess.`}
            </motion.p>
          </div>

          <motion.div
            className=' flex flex-col gap-2 '
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(1)}
          >
            <span className='text-start'>Follow me</span>

            <div className='flex gap-10 items-center'>
              <Link
                target='_blank'
                href='https://www.linkedin.com/feed/'
                className=' shadow-sm shadow-blue p-2 rounded-xl'
              >
                <FaLinkedinIn className='text-2xl text-light' />
              </Link>
              <Link
                href='https://github.com/Hossain-A1'
                target='_blank'
                className=' shadow-sm shadow-blue p-2 rounded-xl'
              >
                <FaGithub className='text-2xl text-light' />
              </Link>

              <Link
                href='https://www.facebook.com/hossainislam.nur.9/'
                target='_blank'
                className=' shadow-sm shadow-blue p-2 rounded-xl'
              >
                <FaFacebookF className='text-2xl text-light' />
              </Link>
              <Link
                href='https://twitter.com/Hossain08343121'
                target='_blank'
                className=' shadow-sm shadow-blue p-2 rounded-xl'
              >
                <FaTwitter className='text-2xl text-light' />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='  flex justify-center items-center h-full w-full'
          initial={{ y: "-115%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1)}
        >
          <div className='xl:h-[28rem] xl:w-[28rem] lg:h-[22rem] lg:w-[22rem]'>
            <Image
              src='/images/developer.png'
              alt='hero picture'
              height={720}
              width={1080}
              className='h-full w-full '
              priority
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
