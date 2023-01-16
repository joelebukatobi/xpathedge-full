import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Project from '@/global//components/Projects';
import Services from '@/global//components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ services, projects, contact }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout contact={contact}>
      <Header
        heading={'Imagination is the only limitation'}
        text={`Tailor-made technological solutions, creative expressions, and flawless executions. Let’s disrupt the norm,
            together.`}
        className={'mt-[10vh] pt-[5.6rem] pb-[8rem]'}
      />

      <Container className={'max-width w-[100%]'}>
        <section className="space-y-[8rem] md:space-y-[12rem] py-[8rem] md:py-[18rem] w-[100%] flex flex-col items-center relative">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="flex items-center space-x-[1.6rem] max-w-[114rem] w-[100%]"
            cursor-class="overlay"
          >
            <p className="uppercase text-[1.6rem] md:text-[2.2rem] font-black tracking-[.8rem]">Projects</p>
            <hr className="h-[.2rem] w-[32rem] bg-black border-none" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="flex flex-wrap justify-center lg:justify-between gap-y-[8rem]  max-w-[114rem]"
          >
            {projects.map((project) => {
              return <Project project={project} key={project.id} />;
            })}
          </div>
          <div className="flex justify-center w-[100%]">
            <div className="flex items-center space-x-[1.6rem]">
              <p className="text-[1.8rem]">
                <Link href="/work">View More</Link>
              </p>
              <svg className="w-[2.4rem] h-[2.4rem]">
                <use href="/images/sprite.svg#icon-arrow" />
              </svg>
            </div>
          </div>
        </section>
      </Container>

      <Services services={services} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await Promise.all([
    fetch(`${API_URL}/api/services`),
    fetch(`${API_URL}/api/projects`),
    fetch(`${API_URL}/api/contact/xpathedge`),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      services: data[0].services,
      projects: data[1].projects,
      contact: data[2].contact,
    },
  };
}
