import Link from 'next/link';
import Head from 'next/head'; // add Head element as a page title and add Meta tag for the search engine.
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}

function Homepage(props) {
  console.log('[HomePage] render:', props);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name='decriptiton' value='This is my blog' />
      </Head>
      <main>
        <h2>My blog Home Page build by Next.js.!</h2>
        <ul>
          <li>
            <Link href='./posts/{slug}'>First Post</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
export default Homepage;
