import { getPost } from '../../lib/posts';
import Head from 'next/head';

// using async to loading data and return as a object to call for callback to getStaticProps function.
export async function getStaticProps() {
  console.log('[FirstPostPage] getStaticProps()');

  const post = await getPost('first-post');
  return {
    props: { post }
  };
}

function FirstPostPage({ post }) {
  console.log('[FirstPostPage] render', post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' value='first post'></meta>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body} </p>
        <span>{post.description}</span>
      </main>
    </>
  );
}
export default FirstPostPage;
