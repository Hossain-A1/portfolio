import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";

const AboutPage = () => {
  return (
    <section id='about' className='wrapper t-margin sp'>
      <div className='  grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <div className='pic space-y-5'>
          <SectionTitle
            heading='About'
            subHeading='Unmasking My Journey and Essence'
          />
          <div className='lg:h-[35rem] lg:w-[35rem] hover:scale-110 eq  flex justify-center items-center '>
            <Image
              src='/images/about-1.jpg'
              alt='hossain'
              priority
              height='720'
              width='1280'
              className='h-full w-full object-fill'
            />
          </div>
        </div>

        <div className='ditails lg:mt-20 '>
          <div className='space-y-5'>
            <div>
              <p>
                Hey there, I'm Hossain Ahmed—a passionate full-stack web
                developer deeply engaged in the MERN stack. My proficiency spans
                Next.js, React.js, TypeScript, Node.js, Express.js, and Tailwind
                CSS, as evidenced by the diverse range of projects I've
                undertaken.
              </p>
            </div>

            <div className=''>
              <p>
                My venture into the realm of web development commenced in June
                2022, marking the inception of an exciting and transformative
                journey. From the outset, my passion for JavaScript has been a
                driving force, compelling me to delve into its nuances with
                unbridled enthusiasm. Eager to broaden my understanding and
                proficiency, I consistently engage in immersive learning
                experiences, exploring the multifaceted aspects of this
                versatile programming language. This dynamic pursuit not only
                fuels my knowledge but also propels me to stay abreast of the
                ever-evolving landscape of web development.
              </p>
            </div>

            <div>
              <p>
                In a nutshell, I'm a motivated web developer who's always
                looking for chances to learn and come up with new solutions. I
                have a solid background in MERN stack development, love working
                with JavaScript, and am committed to delivering top-notch
                results. I'm excited to use my skills in meaningful projects and
                work with others who share my passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
