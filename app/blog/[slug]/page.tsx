import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getContentfulClient } from '@/lib/contentful';

export const revalidate = 60;

type BlogPostFields = {
  title: string;
  slug: string;
  content: unknown;
};

export async function generateStaticParams() {
  const client = getContentfulClient();
  const res = await client.getEntries<BlogPostFields>({ content_type: 'blogPost' });
  return res.items.map((post) => ({ slug: post.fields.slug }));
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const client = getContentfulClient();
  const res = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    limit: 1,
    'fields.slug': params.slug,
  });
  const post = res.items[0];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{post.fields.title}</h1>
      <div className="prose">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          documentToReactComponents(post.fields.content as any)
        }
      </div>
    </article>
  );
}
