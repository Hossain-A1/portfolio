const AboutPage = () => {
  return (
    <section id='about' className='wrapper section-padding'>
      <div className='grid grid-cols-2'>
        <div className='details flex flex-col gap-2'>
          <u className='text-text_light/40 tracking-[0.3rem] underline-offset-4 uppercase font-medium'>
            About
          </u>
          <h2>Unmasking My Journey and Essence</h2>

          <p>
            Hey there, I'm Hossain Ahmed—a passionate full-stack web developer
            deeply engaged in the MERN stack. My proficiency spans Next.js,
            React.js, TypeScript, Node.js, Express.js, and Tailwind CSS, as
            evidenced by the diverse range of projects I've undertaken.
          </p>
        </div>

        <div className='pic'></div>
      </div>
    </section>
  );
};

export default AboutPage;
