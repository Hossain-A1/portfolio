import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";

const Projects = () => {
  return (
    <main id='projects' className='wrapper sp'>
      <div className='space-y-5'>
        <SectionTitle
          heading='Projects'
          subHeading="Everything I've worked on is right here."
        />

        <div className=' space-y-5'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'>
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
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
           <div className="flex gap-5 items-center">
           <div className='h-[12rem] w-[15rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>

            <div className='h-[12rem] w-[15rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>
           </div>

          </div>

          {/* ------------- */}

          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'>
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
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='h-[20rem] w-[30rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          {/* --------- */}
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'>
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
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href='https://github.com/Hossain-A1/acquire'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href='https://acquire-7vwkhnhyl-hossain-a1.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='h-[20rem] w-[30rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          {/* --------- */}
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'>
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
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href='https://github.com/Hossain-A1/closer-client'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href='/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='h-[20rem] w-[30rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          {/* ----- */}
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-10'>
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
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    full-stack code
                  </strong>
                </Link>
                <Link
                  href='https://react-tech-alpha.vercel.app/'
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-light/70 uppercase font-medium text-sm '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className='h-[20rem] w-[30rem]'>
              <Image
                src='/images/project-1.png'
                alt=''
                height={600}
                width={400}
                priority
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
