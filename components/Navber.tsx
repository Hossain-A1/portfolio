"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiCode } from "react-icons/hi";
import { buttonVariance } from "./Button";
const Navber = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-[999] bg-bg_dark '>
      <div className='flex justify-between items-center  h-20 wrapper'>
        <div className='logo flex gap-2 items-center'>
          <span className=''>
            <HiCode className='text-2xl text-blue-500 font-bold ' />
          </span>
          <h2 className='font-medium tracking-wide text-xl'>
            Dev Hossain Ahmed
          </h2>
        </div>

        <ul className='flex gap-10 items-center shadow-sm shadow-blue-900 p-5 rounded-xl'>
          <li>
            <Link href='/' className='text-text_light/40 '>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/#about'
              className='text-text_light/40 '
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className='text-text_light/40'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='text-text_light/40 '
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact-me'
              className='text-text_light/40 '
            >
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <Link href='' className={cn(buttonVariance({variant:"outline"}))}>Download Resume</Link>
          <span>✳️</span>
        </div>
      </div>
    </header>
  );
};

export default Navber;
