import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

import { API_URL } from '@/config/index';

import 'aos/dist/aos.css';

export default function Projects({ project }) {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="space-y-[4.8rem] md:w-[75%] lg:w-[44.56%]"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className="w-[100%] bg-[#DBE8E9] relative" cursor-class="no-border">
        <div className="h-[100] w-[100]  overflow-hidden">
          <img src={`${API_URL}/storage/${project.image}`} alt="" className="w-[100%]" />
        </div>
        {active && (
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="h-[10.4rem] w-[10.4rem] md:h-[16rem] md:w-[16rem] absolute  z-10 rounded-[100%] right-[unset] left-[-3.2rem] md:right-[unset] md:left-[-6.4rem] lg:right-[unset] lg:left-[-3.2rem] xl:left-[unset] xl:right-[88.77%] bottom-[6.4rem] flex items-center justify-center cursor-pointer bg-[#AA0000]"
          >
            <p className="text-white text-[2rem]">
              <Link href={`${project.link}`}>View</Link>
            </p>
          </div>
        )}
      </div>
      <div className="space-y-[1.6rem]" cursor-class="overlay">
        <h4 className="text-[2.4rem] font-bold capitalize ">{project.name}</h4>
        <p className="text-[1.6rem]">{project.description}</p>
      </div>
    </div>
  );
}
