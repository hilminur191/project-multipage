import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogList() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Blog List</h2>
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="border rounded p-4 shadow">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="mb-2 text-gray-600">{blog.excerpt}</p>
            <p className="text-sm text-gray-500 mb-2">
              By {blog.author} on {blog.date}
            </p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
