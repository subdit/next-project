import { getPost, getSlugs } from '../../lib/posts';
import Head from 'next/head';

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map(slug => ({
      params: { slug }
    })),
    fallback: false
  };
}

// using async to loading data and return as a object to call for callback to getStaticProps function.
export async function getStaticProps({ params: { slug } }) {
  console.log('[PostPage] getStaticProps()', slug);

  const post = await getPost(slug);
  return {
    props: { post }
  };
}

function PostPage({ post }) {
  console.log('[PostPage] render', post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' value='first post'></meta>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>

        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}
export default PostPage;
