"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailJs from "@emailjs/browser";
import toast from "react-hot-toast";
import SectionTitle from "./ui/SectionTitle";
import { getTransition } from "./utils/getTransition";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./Button";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    try {
      await emailJs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      );

      toast.success("Your message sent!");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message!");
    }

    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section id='contact' className='wrapper sp space-y-10'>
      <SectionTitle heading='Contact' subHeading='Reach out to me' />

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <div className='space-y-10'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-light/70 font-semibold text-xl'>
              Phone:{" "}
              <span className='font-normal text-light/50'>+9660501747626</span>{" "}
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

          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2)}
            >
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition()}
                className='text-2xl font-semibold md:max-w-lg'
              >{`Let's unlock together the next level of possibilities! Reach out.`}</motion.h3>

              <h3 className='text-2xl font-semibold text-dark/50'>
                Social Media
              </h3>
              <div className='flex flex-wrap gap-x-5 gap-y-1.5'>
                <Link href='https://github.com/shohan-pherones' target='_blank'>
                  GitHub
                </Link>
                <Link href='https://leetcode.com/spectrashohan' target='_blank'>
                  LeetCode
                </Link>
                <Link
                  href='https://www.linkedin.com/in/shohan-pherones'
                  target='_blank'
                >
                  LinkedIn
                </Link>
                <Link href='https://twitter.com/elysianshohan' target='_blank'>
                  Twitter
                </Link>
                <Link
                  href='https://www.facebook.com/spectra.shohan'
                  target='_blank'
                >
                  Facebook
                </Link>
              </div>
            </motion.div>
          </div>
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='overflow-hidden'>
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.4)}
              >
                <h3 className='text-2xl font-semibold text-light/50'>
                  Your email beckons for your swift attention!
                </h3>
                <Link
                  href='mailto:shohan.sub.56@gmail.com'
                  target='_blank'
                  className='link-item-dark'
                >
                  mrhossainahmed7@gmail.com
                </Link>
              </motion.div>
            </div>
            <div className='overflow-hidden'>
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.6)}
              >
                <h3 className='text-2xl font-semibold text-dark/50'>Address</h3>
                <Link
                  href='https://goo.gl/maps/WFSWfFP4WdQNxthCA'
                  target='_blank'
                  className='link-item-dark'
                >
                  Saudi Arab , Dammam
                </Link>
              </motion.div>
            </div>
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

          <button type='submit' className={cn(buttonVariants({variant:"dark"}))} >Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
