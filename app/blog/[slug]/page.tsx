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
    body: Document | string;
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
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

  const { title, publishedDate, author, coverImage, body, tags } = post.fields;

  return (
    <>
      <Navbar />

      <article className="max-w-3xl mx-auto pt-24 pb-12 px-6">
        {/* Back button */}
        <Link
          href="/blog"
          className="text-sm text-[#1a1a1a] hover:underline inline-flex items-center mb-6"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {publishedDate && (
          <p className="text-sm text-muted-foreground mb-6">
            {new Date(publishedDate).toLocaleDateString()}
            {author && ` · by ${author}`}
          </p>
        )}

        {coverImage && (
          <img
            src={`https:${coverImage.fields.file.url}`}
            alt={coverImage.fields.title}
            className="mb-6 rounded-xl"
          />
        )}

        {/* Render body (rich text or plain text) */}
        {body ? (
          typeof body === "string" ? (
            <div className="prose prose-lg max-w-none">
              {body.split(/\n\s*\n/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              {documentToReactComponents(body as Document)}
            </div>
          )
        ) : (
          <p className="text-muted-foreground">No content available.</p>
        )}

        {tags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <Footer />
    </>
  );
}
