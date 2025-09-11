import Link from "next/link";
import { client } from "@/lib/contentful";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

export const revalidate = 60;

type BlogPost = {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    description?: string;
    coverImage?: {
      fields: {
        file: { url: string };
        title: string;
      };
    };
    author?: string;
    publishedDate?: string;
  };
};

export default async function BlogPage() {
  const posts = await client.getEntries({ content_type: "post" });
  const items = (posts as { items: BlogPost[] }).items;

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto pt-24 py-12 px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet. Add some in Contentful!
          </p>
        ) : (
          <div className="space-y-8">
  {items.map((post) => (
    <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
      <div className="bg-card border rounded-xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row overflow-hidden">
        {post.fields.coverImage && (
          <img
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt={post.fields.coverImage.fields.title}
            className="object-cover w-full md:w-1/3 h-48 md:h-auto"
          />
        )}
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-2">{post.fields.title}</h2>
          {post.fields.description && (
            <p className="text-muted-foreground mb-2">
              {post.fields.description}
            </p>
          )}
          {post.fields.publishedDate && (
            <p className="text-sm text-muted-foreground">
              {new Date(post.fields.publishedDate).toLocaleDateString()}
              {post.fields.author && ` · by ${post.fields.author}`}
            </p>
          )}
        </div>
      </div>
    </Link>
  ))}
</div>
        )}
      </main>

      <Footer />
    </>
  );
}
