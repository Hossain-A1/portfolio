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
                <h2 className='text-2xl font-semibold text-light/60'>Altura</h2>
              </div>
              <div className='space-y-5'>
                <p>
                  {` Altura Shoes' website offers premium footwear solutions
                  blending style and performance for modern lifestyles.`}
                </p>

                <span className='text-blue block'>
                  React.js | Node.js | Tailwind CSS | mongodb
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/altura-server'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/altura-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://altura-client-sdr3.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 justify-between max-md:flex-col items-center w-full h-full overflow-hidden'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project1.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project11.png'
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
                  2
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>
                  SkyHawkForge
                </h2>
              </div>
              <div className='space-y-5'>
                <p>{`It's a website dedicated to E-commerce for drones.`}</p>

                <span className='text-blue block'>
                  Next.js | TypeScript | Node.js | Tailwind CSS | Stripe |
                  mongodb
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/skyhewkforge-api'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/skyhawkforge-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://skyhawkforge-client.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 justify-between  max-md:flex-col items-center w-full h-full overflow-hidden'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project-2.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project22.png'
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
                  3
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>Arina.</h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Arina is a website for a beauty salon and spa offering a
                  variety of packages.
                </p>

                <span className='text-blue block'>
                  Node.js | Express.js | mongoDB | Next.js | TypeScript | Redux
                  | Tailwind | Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/arina-server'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/arina-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://arina-client.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 justify-between max-md:flex-col items-center w-full h-full overflow-hidden'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project3.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project33.png'
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
                <h2 className='text-2xl font-semibold text-light/60'>
                  Nur-Store
                </h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Nur-store is an e-commerce platform offering a diverse range
                  of products catering to various needs, providing convenience
                  and quality service to online shoppers.
                </p>

                <span className='text-blue block'>
                  Next.js | TypeScript | Node.js | SWR | Tailwind CSS | Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/store-server'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/store-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://store-client-five.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 justify-between max-md:flex-col items-center w-full h-full overflow-hidden'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project4.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project44.png'
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
                  5
                </strong>
                <h2 className='text-2xl font-semibold text-light/60'>
                  Acquire
                </h2>
              </div>
              <div className='space-y-5'>
                <p>
                  Acquire: Your premier destination for online courses,
                  providing top-quality education to advance your skills and
                  career conveniently from anywhere.
                </p>

                <span className='text-blue block'>
                  Next.js | Prisma | Axios | Tailwind CSS | Stripe
                </span>
              </div>

              <div className='flex gap-5'>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/acquire/tree/main/prisma'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    back-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://github.com/Hossain-A1/acquire'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    front-end code
                  </strong>
                </Link>
                <Link
                  target='_blank'
                  href='https://acquire-7vwkhnhyl-hossain-a1.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm max-lg:text-xs text-center'>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='flex gap-3 justify-between max-md:flex-col items-center w-full h-full overflow-hidden'>
              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.85)}
              >
                <Image
                  src='/images/project5.png'
                  alt=''
                  height={600}
                  width={400}
                  priority
                  className='h-full w-full object-cover'
                />
              </motion.div>

              <motion.div
                className='h-[13rem] xl:w-[20rem] lg:w-[18rem] w-full'
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.9)}
              >
                <Image
                  src='/images/project55.png'
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
