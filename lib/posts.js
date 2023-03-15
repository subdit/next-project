import { readFile } from 'fs/promises';

// slug is a read file specific loading only a first post
export async function getPost(slug) {
  const data = await readFile(`contents/posts/${slug}.json`, 'utf8');
  return JSON.parse(data);
}
