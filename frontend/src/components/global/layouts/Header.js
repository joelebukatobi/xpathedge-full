import { useEffect } from 'react';
import Container from '@/global//layouts/Container';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Header({ heading, text, children, className }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`${className} bg-black md:py-[24%] lg:py-[16%] lg:mt-[0] flex items-center text-white`}>
      <Container>
        <div className="space-y-[6.4rem] md:space-y-[2.4rem]" cursor-class="overlay">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="text-[3.2rem] md:text-[8rem] lg:text-[6.4rem] xl:text-[8.8rem] font-IBMPlexMono font-bold "
          >
            {heading}
          </h1>
          <h4
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="text-[2.4rem] font-normal md:w-[72.4%;]"
          >
            {text}
          </h4>
        </div>
        {children}
      </Container>
    </section>
  );
}
