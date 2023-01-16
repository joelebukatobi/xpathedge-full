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

export default function Contact({ token, contact }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [address, setAddress] = useState(contact.address);
  const [email, setEmail] = useState(contact.email);
  const [linkedin, setLinkedIn] = useState(contact.linkedin);
  const [twitter, setTwitter] = useState(contact.twitter);
  const [facebook, setFacebook] = useState(contact.facebook);
  const [instagram, setInstagram] = useState(contact.instagram);
  const [behance, setBehance] = useState(contact.behance);
  // Handles submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/contact/xpathedge`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: address,
        email: email,
        linkedin: linkedin,
        twitter: twitter,
        facebook: facebook,
        instagram: instagram,
        behance: behance,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Contacts saved successfully');
      setTimeout(() => {
        navigate.push('/admin/contacts');
      }, 5000);
    } else {
      toast.error(`Error: ${data.message}`);
    }
  };
  return (
    <Layout>
      <div className="w-2/3">
        <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem] capitalize">Contact Details</h3>
            <figcaption role="button" className="tag" onClick={handleSubmit}>
              <p>Save</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/contacts">
              <h5 className="text-black/70 hover:text-black">Contacts &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem]">
          <div className="flex gap-x-[2.4rem] justify-between">
            <Input
              label={'Email'}
              placeholder={'Email'}
              type={'text'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
            <Input
              label={'LinkedIn'}
              placeholder={'LinkedIn'}
              type={'text'}
              value={linkedin}
              onChange={(e) => setLinkedIn(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
          </div>{' '}
          <div className="flex gap-x-[2.4rem] justify-between">
            <Input
              label={'Twitter'}
              placeholder={'Twitter'}
              type={'text'}
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
            <Input
              label={'Facebook'}
              placeholder={'Facebook'}
              type={'text'}
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
          </div>
          <div className="flex gap-x-[2.4rem] justify-between">
            <Input
              label={'Instagram'}
              placeholder={'Instagram'}
              type={'text'}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
            <Input
              label={'Behance'}
              placeholder={'Behance'}
              type={'text'}
              value={behance}
              onChange={(e) => setBehance(e.target.value)}
              required
              className={'mb-[2.4rem]'}
            />
          </div>
          <div className="flex gap-x-[2.4rem] justify-between">
            <Textarea
              label={'Address'}
              placeholder={'Address'}
              type={'text'}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className={'mb-[2.4rem]'}
              classTextArea={'mt-[.8rem]'}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/contact/xpathedge`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log(res);
  return {
    props: {
      token,
      contact: data.contact,
    },
  };
}
