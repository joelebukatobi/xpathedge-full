import Header from '@/global//layouts/Header';
import Layout from '@/global//layouts/Layout';
import Careers from '@/global//components/Careers';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ careers, contact }) {
  return (
    <Layout contact={contact} title={'xPathEdge | Career'}>
      <Header
        heading={'Join our team of magicians'}
        text={`Work is more than a desk and can definitely be more than a to-do list. We are creating great things, and we are always looking for great people to join us.`}
        className={'mt-[10vh] pt-[5.6rem] pb-[8rem]'}
      ></Header>
      <Careers careers={careers} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/careers`), fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      careers: data[0].positions,
      contact: data[1].contact,
    },
  };
}
