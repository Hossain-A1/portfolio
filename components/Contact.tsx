import Button from "./Button";
import SectionTitle from "./ui/SectionTitle";

const Contact = () => {
  return (
    <section id='contact' className=' wrapper sp  space-y-10'>
      <SectionTitle heading='Contact' subHeading='Reach out to me' />

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <div className='space-y-10'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-light/70 font-semibold text-xl'>
              Phone:{" "}
              <span className='font-normal text-light/50'> 0501747626</span>{" "}
            </h3>
            <h3 className='text-light/70 font-semibold text-xl'>
              Email:{" "}
              <span className='font-normal text-light/50'>
                mrhossainahmed7@gmail.com
              </span>
            </h3>
            <h3 className='text-light/70 font-semibold text-xl'>
              Email:{" "}
              <span className='font-normal text-light/50'>
                hossainmedia626@gmail.com
              </span>
            </h3>
          </div>

          <div className='flex flex-col gap-5 w-20'>
            <strong className='capitalize text-blue hover:underline eq'>
              LinkedIn
            </strong>
            <strong className='capitalize text-blue hover:underline eq'>
              instagram
            </strong>
            <strong className='capitalize text-blue hover:underline eq'>
              Facebook
            </strong>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full'>
          <div>
            <input
              type='text'
              placeholder='Your name'
              className='px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full'
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Your email'
              className='px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full'
            />
          </div>
          <div>
            <textarea
              rows={6}
              cols={30}
              placeholder='Your message here'
              className='px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full resize-none'
            />
          </div>

          <Button type='submit' variant='outline'>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
