import { useState, useEffect } from 'react';
import Layout from '@/global//layouts/Layout';
import Container from '@/global//layouts/Container';
import Success from '@/global//components/Success';
import AOS from 'aos';

import 'aos/dist/aos.css';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ contact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'support@xpathedge.com',
        from: 'support@xpathedge.com',
        subject: 'xPathEdge Contact Form',
        html: `<!DOCTYPE>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
        
            <title>xPathEdge Mail</title>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <link
              href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;600&display=swap"
              rel="stylesheet"
            />
            <style>
            * {
            font-family: "Mulish";
            color: #191919;
          }

          a,
          a:link,
          a:visited,
          a:focus {
            text-decoration: none;
            outline: none;
          }
    
          .heading {
            background-color: #191919;
          }
    
          .heading h3 {
            color: #ffffff;
          }
    
          .content {
            font-size: 16px;
          }
    
          .contact {
            font-size: 16px;
            margin-bottom: 16px;
          }
          p {
            margin: 0;
          }
    
          .footer-links {
            background-color: #191919;
            border-radius: 2px;
            padding: 16px;
            color: #ffffff;
          }
    
          .footer-links a,
          .footer-links p {
            color: #ffffff;
          }
            </style>
          </head>
        
          <body>
            <div class="container">
              <div class="heading">
                <h3>
                  You've got a new mail from ${name}
                </h3>
              </div>
              <hr/>
              <div class="content">
                <h4>Message:</h4>
                <p>
                  ${message}
                  <br />
                  You can reach out to me via my contact details below
                </p>
                <br />
              </div>
              <div class="contact">
              <p>
                Email -
                <a href="mailto:${email}"> ${email}</a>
              </p>
              <p>
                Phone - 
                <a href="tel:${phone}"> ${phone}</a>
              </p>
                <p>Company - ${company}</p>
              </div>
              <div class="footer-links">
                <p>
                  <a href="https://www.xpathedge.com">xPathEdge</a> | 110 W Randol Mill Rd Suite 230 Arlington, TX 76011
                </p>
              </div>
            </div>
          </body>
        </html>
        `,
      }),
    });

    if (res.status === 200) {
      setOpen(true);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout contact={contact} title={'xPathEdge | Contact'}>
        <section className="bg-black text-white pt-[16%] md:pt-[32%] lg:pt-[16%] pb-[5%]">
          <Container>
            <div cursor-class="overlay">
              <h3 className="mt-[12vh] md:mt-[0] text-[2rem] uppercase fold-bold font-IBMPlexMono">
                Let’s bring your ideas to life.
              </h3>
              <h1 className="text-[3.2rem] md:text-[6.4rem] lg:text-[8.8rem]  font-bold mb-[8rem] md:mb-[12rem] font-IBMPlexMono">
                Get in touch.<span className="text-red"></span>
              </h1>
            </div>
            <div className="flex flex-col space-y-[4rem] md:space-y-[0] md:flex-row justify-between">
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[33.94%] text-[1.8rem]"
                cursor-class="overlay"
              >
                Our Team is geared towards solving even the most complex ideas. Talk to us about your needs
              </p>
              <form
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="md:w-[57.63%]"
                onSubmit={handleSubmit}
                cursor-class="no-border"
              >
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="border-[.1rem] border-white w-[100%] outline-none bg-black bg-transparent h-[6.4rem] text-[1.6rem] px-[3.2rem] mb-[2.4rem]"
                  type="text"
                  placeholder="Company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <textarea
                  className="border-[.1rem] border-white w-[100%] bg-black bg-transparent h-[24rem] text-[1.6rem] p-[3.2rem] mb-[2.4rem]"
                  placeholder="Tell us about the project"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className="flex items-center w-[100%] xl:w-[40%] justify-end mx-auto relative h-[4.8rem] mt-[16rem]">
                  <div className="flex items-center absolute">
                    <h3 className="w-[100%] text-[2.4rem] mr-[4.8rem]">Send Message</h3>
                  </div>
                </button>
              </form>
            </div>
          </Container>
        </section>
      </Layout>
      <Success toggle={toggle} className={open ? '' : 'hidden'} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([fetch(`${API_URL}/api/contact/xpathedge`)]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      contact: data[0].contact,
    },
  };
}
