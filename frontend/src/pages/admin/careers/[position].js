// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Input from '@/admin//element/Input';
import Textarea from '@/admin//element/Textarea';
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';

export default function index({ position, token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState(position.name);
  const [description, setDescription] = useState(position.description);
  const [category, setCategory] = useState('');
  // Handles submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/careers/${position.slug}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        description: description,
        category: category,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Service edited successfully');
      setTimeout(() => {
        navigate.push('/admin/careers');
      }, 5000);
    } else {
      toast.error(`Error: ${data.message}`);
    }
  };
  return (
    <Layout>
      <div className="w-1/2">
        <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem] capitalize">{position.name}</h3>
            <figcaption role="button" className="tag" onClick={handleSubmit}>
              <p>Save</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/careers">
              <h5 className="text-black/70 hover:text-black">Careers &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem]">
          <Input
            label={'Name'}
            placeholder={'Name'}
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={'mb-[2.4rem]'}
          />
          <div className="w-full">
            <label className="text-black/70" htmlFor="role">
              Category
            </label>
            <section className="!w-full border-[.16rem] !h-[4.8rem] border-[#ECECEC] rounded-[.4rem] mt-[.8rem] pr-[.8rem] mb-[2.4rem] flex items-center">
              <select
                name="role"
                className="w-full bg-white outline-none rounded-[.4rem] pl-[.8rem] mb-0"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value={'design'}>Design</option>
                <option value={'engineering'}>Engineering</option>
                <option value={'operation'}>Operations</option>
              </select>
            </section>
          </div>
          <Textarea
            label={'Description'}
            placeholder={'Description'}
            type={'text'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={'mb-[2.4rem]'}
            classTextArea={'mt-[.8rem]'}
          />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { position } }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/careers/${position}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return {
    props: {
      token,
      position: data.position,
    },
  };
}
