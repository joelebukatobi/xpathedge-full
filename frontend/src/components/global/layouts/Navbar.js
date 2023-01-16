import { useState } from 'react';
import Container from '@/global//layouts/Container';
import Link from 'next/link';

export default function Navbar({ contact }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Container className={'max-w-[100vw] fixed top-[0rem] z-[50] py-[1.6vh] bg-black  px-[0]'}>
      <Container className={'max-width w-[100%] px-[0]'}>
        <section
          className={open ? `h-[100vh] [w-100%] px-[3.2rem] py-[.8rem]` : `px-[3.2rem] h-[auto] w-[100%] py-[.8rem]`}
        >
          <div className="flex items-center justify-between h-[8.8vh]">
            <Link href="/">
              <img
                src="/images/icon-logo.svg"
                className="h-[6.16rem] w-[7.76rem] md:h-[8.8rem] md:w-[10.4rem]  ml-[-.4rem] lg:ml-0 cursor-pointer"
                alt=""
                cursor-class="no-border"
              />
            </Link>
            <div onClick={toggle} className="flex items-center cursor-pointer" cursor-class="navmenu">
              <p className={open ? `hidden` : `font-medium text-[1.6rem] text-white text- mr-[.8rem]`}>Menu</p>
              <svg className="h-[2.4rem] w-[2.4rem]">
                <use href={open ? `/images/sprite.svg#icon-global-close` : `/images/sprite.svg#icon-menu`} />
              </svg>
            </div>
          </div>
        </section>
        <section
          className={
            open
              ? `fixed md:h-[91.2vh] top-[16vh] md:top-[0] left-0 w-[100%] flex items-center md:mt-[8.8vh] text-white `
              : `hidden`
          }
        >
          <Container className={'h-[100%] w-[100%]'}>
            <div className="flex flex-col-reverse md:flex-row md:items-center h-[100%] w-[100%] justify-between ">
              <div className="md:w-[38.59%] space-y-[3.2rem] md:space-y-[8rem] xl:space-y-[16rem] mt-[4rem] md:mt-[0]">
                <div className="hidden md:block space-y-[5.6rem]">
                  <svg className="h-[13.4rem] w-[11.3rem] cursor-pointer">
                    <use href="/images/sprite.svg#logo-large-transition" />
                  </svg>
                  <div className="w-[71.59%] space-y-[1.6rem]" cursor-class="overlay">
                    <h4 className="text-[2.4rem] font-bold font-Mulish">{contact.email}</h4>
                    <h5 className="text-[2rem]">{contact.address}</h5>
                  </div>
                </div>
                <p className="text-[1.6rem] md:hidden">Follow Us:</p>
                <ul className="flex gap-x-[3.2rem] md:gap-x-[10.4rem] gap-y-[4rem] flex-wrap" cursor-class="overlay">
                  <li className="text-[2rem] md:w-[15%]">
                    <a href={`${contact.linkedin}` ?? ''}>LinkedIn</a>
                  </li>
                  <li className="text-[2rem] md:w-[15%]">
                    <a href={`${contact.twitter}` ?? ''}>Twitter</a>
                  </li>
                  <li className="text-[2rem] md:w-[15%]">
                    <a href={`${contact.behance}` ?? ''}>Behance</a>
                  </li>
                  <li className="text-[2rem] md:w-[15%]">
                    <a href={`${contact.instagram}` ?? ''}>Instagram</a>
                  </li>
                  <li className="text-[2rem] md:w-[15%]">
                    <a href={`${contact.facebook}` ?? ''}>Facebook</a>
                  </li>
                </ul>
              </div>
              <div className="relative h-[100%] flex items-center md:block md:h-auto " cursor-class="overlay">
                <ul className="space-y-[4.8rem]">
                  <li className="capitalize font-bold font-IBMPlexMono text-[4.4rem] md:text-[7.8rem]">
                    <Link href="/work">Work</Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[4.4rem] md:text-[7.8rem]">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[4.4rem] md:text-[7.8rem]">
                    <Link href="/careers">Career </Link>
                  </li>
                  <li className="capitalize font-bold font-IBMPlexMono text-[4.4rem] md:text-[7.8rem]">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </Container>
  );
}
