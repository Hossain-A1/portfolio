import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
   <main className="wrapper sp mt-20 h-auto">
     <section className=' grid lg:grid-cols-2 grid-cols-1 gap-10  '>
      <div className='flex flex-col  gap-5 items-center'>
        <div className=' flex flex-col w-full  lg:w-[30rem]  gap-2  '>
          <h1 className=''>
            Hi, I'm <strong className='text-blue-500'>Hossain Ahmed</strong> a{" "}
            <u className="text-blue">Full-Stack</u> dev{" "}
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
              className=' shadow-sm shadow-blue p-2 rounded-xl'
            >
              <FaLinkedinIn className='text-2xl text-light' />
            </Link>
            <Link href='' className=' shadow-sm shadow-blue p-2 rounded-xl'>
              <FaGithub className='text-2xl text-light' />
            </Link>

            <Link href='' className=' shadow-sm shadow-blue p-2 rounded-xl'>
              <FaFacebookF className='text-2xl text-light' />
            </Link>
            <Link href='' className=' shadow-sm shadow-blue p-2 rounded-xl'>
              <FaTwitter className='text-2xl text-light' />
            </Link>
          </div>
        </div>
      </div>

      <div className='  flex justify-center items-center h-full w-full'>
        <div className='h-[28rem] w-[28rem]'>
          <Image
            src='/images/developer.png'
            alt='hero picture'
            height={720}
            width={1080}
            className='h-full w-full '
          />
        </div>
      </div>
    </section>
   </main>
  );
};

export default Hero;
