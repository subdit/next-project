import Head from 'next/head';
import NavBar from '../components/NavBar';

function AboutPage() {
  console.log('[AboutPage] render');
  return (
    <>
      <Head>
        <title>About - My Blog</title>
        <meta name='description' value='find out about us'></meta>
      </Head>
      <main>
        <h1>About Page!</h1>
      </main>
    </>
  );
}
export default AboutPage;
