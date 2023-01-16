import { useEffect } from 'react';
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Project from '@/global//components/Projects';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ heading, projects, contact }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout contact={contact} title={'xPathEdge | Work'}>
      <Header
        heading={'Let’s create great things together'}
        className={'mt-[10vh] pt-[5.6rem] pb-[4rem] md:pb-[8rem] lg:pb-[8rem]'}
      ></Header>
      <section className="bg-black text-white">
        <Container className={'max-width w-[100%]'}>
          <section className="space-y-[12rem] pb-[8rem] w-[100%] flex flex-col items-center relative">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="flex flex-wrap justify-center lg:justify-between gap-y-[8rem]  max-w-[114rem]"
            >
              {projects.map((project) => {
                return <Project project={project} />;
              })}
            </div>
          </section>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/projects`), fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  // console.log(res);
  return {
    props: {
      projects: data[0].projects,
      contact: data[1].contact,
    },
  };
}
