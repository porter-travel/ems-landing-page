import Link from 'next/link';
import { getContentfulClient } from '@/lib/contentful';

export const revalidate = 60;

type BlogPostFields = {
  title: string;
  slug: string;
};

export default async function BlogPage() {
  const client = getContentfulClient();
  const res = await client.getEntries<BlogPostFields>({ content_type: 'blogPost' });
  const posts = res.items;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link
              href={`/blog/${post.fields.slug}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
