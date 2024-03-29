import Head from 'next/head';
import Footer from 'components/Footer';
import Navbar from 'components/navbar/Navbar';

const Layout = ({ children, isWide }) => {
  return (
    <>
      <Head>
        <title>Ben Schroeder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar isWide={isWide} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
