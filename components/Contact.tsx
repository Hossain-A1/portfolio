"use client";
import { cn } from "@/lib/utils";
import { buttonVariance } from "./Button";
import SectionTitle from "./ui/SectionTitle";
import emailJs from "@emailjs/browser";
import toast from "react-hot-toast";
import { HTMLAttributeReferrerPolicy, useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleContact = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  
    if (!formRef.current) {
      return;
    }
  
    try {
      await emailJs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID
      );
  
      toast.success("Your message sent!");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message!");
    }
  
    // Reset form fields
    formRef.current.reset();
  };
  

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
        <form
          ref={formRef}
          onSubmit={handleContact}
          className='flex flex-col gap-5 w-full'
        >
          <div>
            <input
            required
              name='name'
              type='text'
              placeholder='Your name'
              className='name px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full'
            />
          </div>
          <div>
            <input
                 required
              name='email'
              type='email'
              placeholder='Your email'
              className='email px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full'
            />
          </div>
          <div>
            <textarea
                 required
              name='message'
              rows={6}
              cols={30}
              placeholder='Your message here'
              className='message px-6 py-3 rounded-xl outline-none border-2 text-dark focus:border-blue eq w-full resize-none'
            />
          </div>

          <button
            type='submit'
            className={cn(buttonVariance({ variant: "outline" }))}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
