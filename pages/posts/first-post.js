import { readFile } from 'fs/promises';
import Head from 'next/head';

// slug is a read file specific loading only a first post
async function getPost(slug) {
  const data = await readFile(`contents/posts/${slug}.json`, 'utf8');
  return JSON.parse(data);
}

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
