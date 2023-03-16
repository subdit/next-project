import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const {
    data: { date, title },
    content
  } = matter(source);
  const body = marked(content);
  return { date, title, body };
}

// function to getPosts of slugs and push each slug into getPosts
export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }
}

// use filter file that end with .md and map out the extra caracters by .slice(0, -3);
// eturn files
//     .filter(file => file.endsWith('.md'))
//     .map(file => file.slice(0, -3));

export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir('content/posts');
  return files
    .filter(file => file.endsWith(suffix))
    .map(file => file.slice(0, -suffix.length));
}
