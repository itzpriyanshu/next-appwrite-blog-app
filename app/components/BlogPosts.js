import React from "react";
import Link from "next/link";

const BlogPot = ({ image, title, content, slug }) => {
  return (
    <div className="max-w-md mx-auto my-8 bg-white shadow-md rounded-md overflow-hidden">
      <img className="w-full h-32 object-cover" src={image} alt={title} />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{content}</p>
        <Link
          href={`/blog/${slug}`}
          className="mt-4 block text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPot;
