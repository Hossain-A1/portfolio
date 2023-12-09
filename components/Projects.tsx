import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";

const Projects = () => {
  return (
    <main id='projects' className='wrapper sp'>
      <div className="space-y-5">
        <SectionTitle
          heading='Projects'
          subHeading="Everything I've worked on is right here."
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='flex flex-col gap-5 col-span-2'>
            <div className='space-y-5'>
              <div className='   flex  gap-5 items-center '>
                <strong className=' w-12 h-12 rounded-full text-center bg-blue text-text_light text-4xl flex items-center justify-center'>
                  1
                </strong>
                <h2 className="text-2xl font-semibold text-text_light/60">SkyHawkForge</h2>
              </div>
             <div className="space-y-5">
             <p>It's a website dedicated to E-commerce for drones.</p>

              <span className='text-blue block'>
                Node.js | Express.js | mongoDB | Next.js | Tailwind CSS | Stripe
              </span>
             </div>

              <div className='flex gap-5'>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-text_light/50 uppercase font-medium text-xl '>
                    back-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-text_light/50 uppercase font-medium text-xl '>
                    front-end code
                  </strong>
                </Link>
                <Link
                  href=''
                  className='border border-blue py-2 px-4 rounded-full  hover:bg-blue eq '
                >
                  <strong className='text-text_light/50 uppercase font-medium text-xl '>
                    live-site
                  </strong>
                </Link>
              </div>
            </div>
            <div className=""></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='flex flex-col gap-5 items-center col-span-1 bg-red-600'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
