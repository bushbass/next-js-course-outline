import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>title from next/head</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}