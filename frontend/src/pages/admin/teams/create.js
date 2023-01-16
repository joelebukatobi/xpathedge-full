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

export default function index({ token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);

  // handleChange
  const imageChange = (file) => {
    setImage(file[0]);
    setContent(file[0].name);
  };

  // Handles submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form Data
    const body = new FormData();
    body.append('name', name);
    body.append('title', title);
    body.append('image', image);

    const res = await fetch(`${API_URL}/api/teams/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },

      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Position created successfully');
      setTimeout(() => {
        setContent(null);
        navigate.push('/admin/teams');
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
            <h3 className="text-black/90 mr-[1.6rem] capitalize">New Member</h3>
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
              <h5 className="text-black/70 hover:text-black">Teams &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem]">
          <Input
            label={'Name'}
            placeholder={'Name'}
            name={name}
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={'mb-[2.4rem]'}
          />
          <Input
            label={'Title'}
            placeholder={'Title'}
            name={title}
            type={'text'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={'mb-[2.4rem]'}
          />
          <Input
            label={'Image'}
            placeholder={'Thumbnail'}
            name={'image'}
            type={'file'}
            onChange={(e) => imageChange(e.target.files)}
            required={'required'}
            after={content || 'Upload an image'}
            className={'mb-[2.4rem] '}
            classInput={
              'relative after:content-[attr(after)] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-10 after:flex after:items-center after:font-light after:text-[#b9bec7]'
            }
          />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  return {
    props: {
      token,
    },
  };
}
