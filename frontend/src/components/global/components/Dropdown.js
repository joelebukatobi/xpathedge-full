import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Dropdown({ className, options, name }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(null);

  const toggle = () => setOpen(!open);

  const onOptionClicked = (value) => () => {
    setOption(value);
    setOpen(false);
    console.log(option);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      className={`${className} flex flex-col`}
      cursor-class="overlay"
    >
      <button
        onClick={toggle}
        className="flex items-center space-x-[1.6rem] uppercase text-[2.2rem] font-bold tracking-[.8rem] mb-[1.6rem]"
      >
        {name}
        <svg className={open ? 'rotate-180 w-[4rem] h-[4rem]' : 'w-[4rem] h-[4rem]'}>
          <use href="/images/sprite.svg#icon-chevron-down" />
        </svg>
      </button>
      {open && (
        <ul className="flex flex-col space-y-[.8rem] ml-[1.6rem]">
          {options.map((option) => (
            <li className="uppercase text-[1.6rem] cursor-pointer font-semibold" onClick={onOptionClicked(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
