"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiCode } from "react-icons/hi";
import { buttonVariance } from "./Button";
import { useState } from "react";
const Navber = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className='fixed left-0 right-0 top-0 z-[999] bg-dark '>
      <div className='flex justify-between items-center  h-20 wrapper relative'>
        <div className='logo flex gap-2 items-center'>
          <span className=''>
            <HiCode className='text-2xl text-blue font-bold' />
          </span>
          <h2 className='font-medium tracking-wide text-xl'>
            Dev Hossain Ahmed
          </h2>
        </div>

        <div
          className={` ${
            openMenu === false
              ? " max-lg:hidden "
              : "max-lg:absolute max-lg:h-[20rem] max-lg:w-1/2  max-lg:bottom-0 max-lg:right-10 max-lg:top-20 "
          }`}
        >
          <ul className='lg:flex max-lg:flex-col max-lg:h-full gap-10 justify-between shadow-sm shadow-blue p-5 rounded-xl'>
            <li className='max-lg:text-right max-lg:my-5'>
              <Link href='/' className='text-light/40 '>
                Home
              </Link>
            </li>
            <li className='max-lg:text-right max-lg:my-5'>
              <Link href='/#about' className='text-light/40 '>
                About
              </Link>
            </li>

            <li className='max-lg:text-right max-lg:my-5'>
              <Link href='/#projects' className='text-light/40 '>
                Projects
              </Link>
            </li>
            <li className='max-lg:text-right max-lg:my-5'>
              <Link href='/#blog' className='text-light/40'>
                Blog
              </Link>
            </li>
            <li className='text-right '>
              <Link href='/#contact' className='text-light/40 '>
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        <div className=' flex items-center gap-5 '>
          <Link href='' className={cn(buttonVariance({ variant: "outline" }))}>
            Download Resume
          </Link>
          <span
            onClick={() => setOpenMenu(true)}
            className='max-lg:absolute max-lg:top-20 max-lg:right-10 cursor-pointer'
          >
            ✳️
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navber;
