import Link from 'next/link';
import Head from 'next/head'; // add Head element as a page title and add Meta tag for the search engine.
import NavBar from '../components/NavBar';

function Homepage() {
  console.log('[Homepage] rendering.!!');
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name='decriptiton' value='This is my blog' />
      </Head>
      <main>
        <h2>My blog Home Page build by Next.js.!</h2>
      </main>
    </>
  );
}
export default Homepage;
