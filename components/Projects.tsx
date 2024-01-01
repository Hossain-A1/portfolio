"use client";
import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTransition } from "./utils/getTransition";

const Projects = () => {
  return (
    <main id='projects' className='wrapper sp'>
      <motion.div className='space-y-5'>
        <SectionTitle
          heading='Projects'
          subHeading="Everything I've worked on is right here."
        />

        <div className=' space-y-10'>
          <motion.div
            className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
          >
            <div className='space-y-5 '>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-light text-4xl flex items-center justify-center'>
                  1
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>
                  SkyHawkForge
                </h2>
              </div>
              <div className='space-y-5'>
                <p>It's a website dedicated to E-commerce for drones.</p>

                <span className='text-blue block'>
                  Node.js | Express.js | mongoDB | Next.js | Tailwind CSS |
                  Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-center w-full h-full'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ------------- */}

          <motion.div
            className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
          >
            <div className='space-y-5 '>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-light text-4xl flex items-center justify-center'>
                  2
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>Arina.</h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Arina is a website for a beauty salon and spa offering a
                  variety of packages.
                </p>

                <span className='text-blue block'>
                  Node.js | Express.js | mongoDB | Next.js | Redux | clsx |
                  Tailwind CSS | Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-center w-full h-full'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>
            </div>
          </motion.div>
          {/* --------- */}
          <motion.div
            className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
          >
            <div className='space-y-5 '>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-light text-4xl flex items-center justify-center'>
                  3
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>
                  Aquire.
                </h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Acquire serves as an online platform dedicated to selling
                  courses.
                </p>

                <span className='text-blue block'>
                  Prisma | mongoDB | Next.js | Next-auth | Axios | clsx |
                  Tailwind CSS | Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  href='https://github.com/Hossain-A1/acquire/tree/main/prisma'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href='https://github.com/Hossain-A1/acquire'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href='https://acquire-7vwkhnhyl-hossain-a1.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-center w-full h-full'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>
            </div>
          </motion.div>
          {/* --------- */}
          <motion.div
            className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
          >
            <div className='space-y-5 '>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-light text-4xl flex items-center justify-center'>
                  4
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>Closer</h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Effortlessly streamline project management tasks, ensuring
                  optimal workflow coordination and success.
                </p>

                <span className='text-blue block'>
                  Express.js | mongoDB | React.js | Moment.js | Tailwind CSS
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  href='https://github.com/Hossain-A1/closer-server'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href='https://github.com/Hossain-A1/closer-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href='/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-center w-full h-full'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>
            </div>
          </motion.div>
          {/* ----- */}
          <motion.div
            className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
          >
            <div className='space-y-5 '>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-light text-4xl flex items-center justify-center'>
                  5
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>gobuy</h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Gobuy operates as an online platform specializing in the sale
                  of electronic products.
                </p>

                <span className='text-blue block'>
                  React.js | Redux | Reduxjs/toolkit | axios | Tailwind CSS
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  href='https://github.com/Hossain-A1/react-tech-alpha'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center '>
                    full-stack code
                  </strong>
                </Link>
                <Link
                  href='https://react-tech-alpha.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm  max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-center w-full h-full'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[15rem] w-full'
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project-1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
