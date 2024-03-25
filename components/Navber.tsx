"use client";
import Link from "next/link";
import { HiCode } from "react-icons/hi";
import { buttonVariance } from "./Button";
import { useState } from "react";
import { RESUME_LINK } from "./resume/resume";
import { CgClose, CgMenu } from "react-icons/cg";
import { cn } from "@/lib/utils";

const Navber = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  return (
    <header className='fixed  left-0 right-0 top-0 z-[992] bg-dark '>
      <div className='flex justify-between items-center   h-20 wrapper relative'>
        <div className='logo flex gap-2 items-center max-lg:absolute max-lg:z-[999] left-5'>
          <span className=''>
            <HiCode className='text-2xl text-blue max-lg:text-light font-bold' />
          </span>
          <h2 className='font-medium tracking-wide text-xl'>
            Dev Hossain Ahmed
          </h2>
        </div>

        <div
          className={`${
            openMenu
              ? " max-lg:hidden "
              : "max-lg:absolute max-lg:bg-blue z-[99] max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:right-0 max-lg:min-h-screen visible block"
          }`}
        >
          <div className='max-lg:relative max-lg:h-full max-lg:w-full'>
            <ul
              className='lg:flex max-lg:flex-col gap-10 items-center justify-center 
            max-lg:absolute max-lg:bottom-0 max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2  '
            >
              <li className='max-lg:text-center max-lg:my-5'>
                <Link
                  href='/'
                  className='text-light/40 hover:text-light eq'
                  onClick={() => setOpenMenu(true)}
                >
                  Home
                </Link>
              </li>
              <li className='max-lg:text-center max-lg:my-5'>
                <Link
                  href='/#about'
                  className='text-light/40 hover:text-light eq'
                  onClick={() => setOpenMenu(true)}
                >
                  About
                </Link>
              </li>

              <li className='max-lg:text-center max-lg:my-5'>
                <Link
                  href='/#projects'
                  className='text-light/40 hover:text-light eq'
                  onClick={() => setOpenMenu(true)}
                >
                  Projects
                </Link>
              </li>
              <li className='max-lg:text-center max-lg:my-5'>
                <Link
                  href='/#skills'
                  className='text-light/40 hover:text-light eq'
                  onClick={() => setOpenMenu(true)}
                >
                  Skills
                </Link>
              </li>
              <li className='max-lg:text-center max-lg:my-5'>
                <Link
                  href='/#blog'
                  className='text-light/40 hover:text-light eq'
                  onClick={() => setOpenMenu(true)}
                >
                  Blog
                </Link>
              </li>
              <li className='max-lg:text-center max-lg:my-5 '>
                <Link
                  href='/#contact'
                  className='text-light/40 hover:text-light eq '
                  onClick={() => setOpenMenu(true)}
                >
                  Contact me
                </Link>
              </li>
              <li className='list-none'>
                <Link
                  href={RESUME_LINK}
                  target='_blank'
                  className={cn(buttonVariance({ variant: "outline" }))}
                  onClick={() => setOpenMenu(true)}
                >
                  Download Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={` ${
            openMenu
              ? "absolute  right-6 top-6 px-1 py-1 cursor-pointer border border-light rounded-full lg:hidden flex items-center justify-center"
              : "active"
          }`}
        >
          <div className='mobile-navber-btn relative'>
            <CgMenu
              name='menu-outline'
              className='mobile-navber-icon text-xl'
              onClick={() => setOpenMenu(false)}
            />
            <CgClose
              name='close-outline'
              className='mobile-navber-icon close-outline '
              onClick={() => setOpenMenu(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navber;
