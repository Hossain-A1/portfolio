import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <section className='wrapper mt-20 h-[calc(100vh-5rem)] grid grid-cols-2 gap-20  '>
      <div className='flex flex-col justify-evenly  items-center'>
        <div className=' flex flex-col w-full   lg:w-[30rem]  gap-2  '>
          <h1 className=''>
            Hi, I'm <strong className='text-blue-500'>Hossain Ahmed</strong> a{" "}
            <u>ReactJs</u> dev{" "}
          </h1>
          <h3 className=''>
            Transforming coding fervor into purposeful creations.
          </h3>
          <p>
            Hello and thank you for visiting my portfolio! I'm on a mission to
            showcase my passion for developing websites that excel in both
            delivering the best user experience and demonstrating technical
            prowess.
          </p>
        </div>

        <div className=' flex flex-col gap-2 '>
          <span className='text-start'>Follow me</span>
          <div className='flex gap-10 items-center '>
            <Link
              href='https://www.linkedin.com/feed/'
              className=' shadow-sm shadow-blue-900 p-2 rounded-xl'
            >
              <FaLinkedinIn className='text-2xl text-text_light' />
            </Link>
            <Link href='' className=' shadow-sm shadow-blue-900 p-2 rounded-xl'>
              <FaGithub className='text-2xl text-text_light' />
            </Link>

            <Link href='' className=' shadow-sm shadow-blue-900 p-2 rounded-xl'>
              <FaFacebookF className='text-2xl text-text_light' />
            </Link>
            <Link href='' className=' shadow-sm shadow-blue-900 p-2 rounded-xl'>
              <FaTwitter className='text-2xl text-text_light' />
            </Link>
          </div>
        </div>
      </div>

      <div className='h-full w-full'>
        <Image
          src='/images/hero.jpeg'
          alt='hero picture'
          height={720}
          width={1080}
          className='h-full w-full '
        />
      </div>
    </section>
  );
};

export default Hero;
