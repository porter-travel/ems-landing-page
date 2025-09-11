import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const revalidate = 60;

type BlogPost = {
  fields: {
    title: string;
    slug: string;
    body: Document;
    description?: string;
    coverImage?: {
      fields: {
        file: { url: string };
        title: string;
      };
    };
    author?: string;
    publishedDate?: string;
    tags?: string[];
  };
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ destructure after awaiting params

  const entries = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
    limit: 1,
  });

  const post = (entries.items[0] as BlogPost) || null;

  if (!post) {
    return (
      <>
        <Navbar />
        <p className="max-w-3xl mx-auto pt-24 py-12">Post not found</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="max-w-3xl mx-auto pt-24 py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>

        {post.fields.publishedDate && (
          <p className="text-sm text-muted-foreground mb-6">
            {new Date(post.fields.publishedDate).toLocaleDateString()}
            {post.fields.author && ` · by ${post.fields.author}`}
          </p>
        )}

        {post.fields.coverImage && (
          <img
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt={post.fields.coverImage.fields.title}
            className="mb-6 rounded-xl"
          />
        )}

        {post.fields.body ? (
          <div className="prose prose-lg">{documentToReactComponents(post.fields.body)}</div>
        ) : (
          <p className="text-muted-foreground">No content available.</p>
        )}

        {post.fields.tags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.fields.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link href="/blog" className="text-[#1a1a1a] underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
      <Footer />
    </>
  );
}
