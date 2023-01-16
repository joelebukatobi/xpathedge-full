import Link from 'next/link';
import Container from '@/global//layouts/Container';

export default function Success({ className, toggle }) {
  return (
    <section
      onClick={toggle}
      className={`fixed z-[50] flex justify-center items-center bg-black/80 top-0 left-0 h-[100vh] w-[100vw] ${className}`}
    >
      <Container className={'flex justify-center items-center'}>
        <div className="md:w-[40%] bg-white p-[3.2rem] md:px-[4rem] md:py-[8rem] rounded-[.8rem] space-y-[1.6rem] flex flex-col items-center">
          <div className="h-[6.4rem] w-[6.4rem] rounded-[100%] border-[.4rem] flex items-center justify-center border-purple bg-red">
            <svg className="h-[4rem] w-[4rem] fill-orange">
              <use href="/images/sprite.svg#icon-check" />
            </svg>
          </div>
          <h5 className="font-bold text-[2.1rem]">Your e-mail has been sent</h5>
          <p className="text-center text-[1.6rem]">
            Thank you for reaching out to us. Someone from our team will reach out to you as soon as possible. Click
            <a href="/" className="cursor-pointer font-bold text-orange">
              {' '}
              here{' '}
            </a>
            to back to the Homepage
          </p>
        </div>
      </Container>
    </section>
  );
}
