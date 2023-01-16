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

export default function index({ service, token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  // Handles submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/services/${service.slug}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Service edited successfully');
      setTimeout(() => {
        navigate.push('/admin/services');
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
            <h3 className="text-black/90 mr-[1.6rem] capitalize">{service.name}</h3>
            <figcaption role="button" className="tag" onClick={handleSubmit}>
              <p>Save</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/service">
              <h5 className="text-black/70 hover:text-black">Services &nbsp;</h5>
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

export async function getServerSideProps({ req, query: { service } }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/services/${service}`, {
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
      service: data.service,
    },
  };
}
