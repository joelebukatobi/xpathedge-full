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

export default function index({ project, token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [image, setImage] = useState(null);
  const [link, setLink] = useState(project.link);
  const [content, setContent] = useState(project.image);

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
    body.append('description', description);
    body.append('image', image);
    body.append('link', link);

    const res = await fetch(`${API_URL}/api/projects/${project.slug}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Project edited successfully');
      setTimeout(() => {
        setContent(null);
        navigate.push('/admin/projects');
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
            <h3 className="text-black/90 mr-[1.6rem] capitalize">{project.name}</h3>
            <figcaption role="button" className="tag" onClick={handleSubmit}>
              <p>Save</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/projects">
              <h5 className="text-black/70 hover:text-black">Projects &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem]">
          <Input
            label={'Name'}
            placeholder={'Name'}
            name={'name'}
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={'mb-[2.4rem]'}
          />
          <Input
            label={'Project Link'}
            placeholder={'Project Link'}
            name={'link'}
            type={'text'}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className={'mb-[2.4rem]'}
          />
          <Input
            label={'Image'}
            placeholder={'Image'}
            name={'image'}
            type={'file'}
            onChange={(e) => imageChange(e.target.files)}
            required={'required'}
            after={`${content.substring(0, 35)}...` || 'Upload an image'}
            className={'mb-[2.4rem] '}
            classInput={
              'relative after:content-[attr(after)] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-10 after:flex after:items-center after:font-light after:text-[#b9bec7]'
            }
          />
          <Textarea
            label={'Description'}
            placeholder={'Description'}
            type={'text'}
            name={'description'}
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

export async function getServerSideProps({ req, query: { project } }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/projects/${project}`, {
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
      project: data.project,
    },
  };
}
