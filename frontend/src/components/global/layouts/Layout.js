import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/global//layouts/Navbar';
import Footer from '@/global//layouts/Footer';

export default function Layout({ title, description, keywords, children, contact }) {
  return (
    <div id="global">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://xpathedge.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Script src="/js/index.js" />
      <Navbar contact={contact} />
      <div id="cursor">
        <div className="cursor__circle"></div>
      </div>
      {children}
      <Footer contact={contact} />
    </div>
  );
}

Layout.defaultProps = {
  title: 'xPathEdge',
  description:
    'Tailor-made technological solutions, creative expressions, and flawless executions. Let’s disrupt the norm, together.',
  keywords:
    'web development, web design, software development, branding, identity branding, mobile app development, mobile app design, ui/ux design, IT consultancy,',
};
