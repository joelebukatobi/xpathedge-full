import { useEffect } from 'react';
import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Services from '@/global//components/Services';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ heading, text, contact, services }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout contact={contact} title={'xPathEdge | About'}>
      <Header heading={`Together, let's create magic`} className={'mt-[10vh] pt-[5.6rem] pb-[8rem]'}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="flex flex-col md:flex-row space-y-[1.6rem] md:space-y-[0] justify-between mt-[10%]"
        >
          <h5 className="text-[1.8rem] uppercase  font-bold tracking-[.8rem]">our mission</h5>
          <p className="text-[1.6rem] md:text-[2.4rem] md:w-[56.49%]">
            We believe every organization should have a competitive edge for increased value. We collaborate with you to
            deliver quality work while helping you achieve a competitive advantage in your industry.
          </p>
        </div>
      </Header>

      <Services services={services} />
      <section className="bg-black text-white py-[18rem]">
        <Container>
          <div className="space-y-[8.8rem]">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex items-center space-x-[1.6rem]"
            >
              <p className="uppercase text-[2.2rem] font-bold tracking-[.8rem]">Why Choose Us?</p>
              <hr className="h-[.2rem] w-[32rem] bg-white border-none" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="flex flex-col md:flex-row justify-between space-y-[3.2rem] md:space-y-[0]"
            >
              <p className="text-[1.8rem] md:w-[49.12%]">
                At Xpathedge, our approach to conceptualizing ideas and creating solutions is specific to every client.
                We are consistently innovating with every brief in a bid to create processes that ease your workflow in
                the realization of your bottom line.
              </p>
              <ul
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[40.52%] space-y-[2.4rem] "
              >
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    Our team comprises the most experienced professionals poised to deliver tailor-made solutions to
                    your business at all times
                  </p>
                </li>
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    We offer various unique services to suit your every need. We are committed to building long-lasting
                    relationships and ensuring you remain top of mind at all times.
                  </p>
                </li>
                <li className="flex space-x-[3.2rem]">
                  <div className="h-[2.8rem] w-[2.8rem] rounded-[100%] bg-[#AA0000] flex items-center justify-center">
                    <svg className="h-[3.2rem] w-[3.2rem]">
                      <use href="/images/sprite.svg#icon-check" />
                    </svg>
                  </div>
                  <p className="text-[1.8rem]">
                    Our mission to create a competitive edge for you remains unwavering and this is evident in our
                    commitment to ensuring your business objectives are always met.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/services`), fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  // console.log(res);
  return {
    props: {
      services: data[0].services,
      contact: data[1].contact,
    },
  };
}
