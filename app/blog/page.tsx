import Link from "next/link";
import { client } from "@/lib/contentful";

export const revalidate = 60;

type BlogPost = {
  fields: {
    title: string;
    slug: string;
  };
};

export default async function BlogPage() {
  const posts = await client.getEntries({ content_type: "blogPost" });
  const items = (posts as unknown as { items: BlogPost[] }).items;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {items.map((post: BlogPost) => (
          <li key={post.fields.slug}>
            <Link
              href={`/blog/${post.fields.slug}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {post.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

