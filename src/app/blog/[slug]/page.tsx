import { blogs } from "@/data/blogs";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="py-12 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </main>
    );
  }

  return (
    <main className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-2">
        By {blog.author} on {blog.date}
      </p>
      <article className="prose">
        <p>{blog.excerpt}</p>
      </article>
    </main>
  );
}
