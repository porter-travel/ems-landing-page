import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";

export const revalidate = 60;

type BlogPost = {
  fields: {
    title: string;
    slug: string;
    content: unknown;
  };
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const entries = await client.getEntries({ content_type: "blogPost" });
  const items = (entries as unknown as { items: BlogPost[] }).items;
  return items.map((post: BlogPost) => ({ slug: post.fields.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  const post = (entries as unknown as { items: BlogPost[] }).items[0];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{post.fields.title}</h1>
      <div className="prose">
        {documentToReactComponents(post.fields.content)}
      </div>
    </article>
  );
}

