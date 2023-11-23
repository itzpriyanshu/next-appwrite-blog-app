"use client";

import Navbar from "./components/navbar";
import BlogPost from "./components/BlogPosts";
import { useState, useEffect } from "react";
import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655c47e550a446714751");

export default function Home() {
  const [blogpost, setblogpost] = useState([]);

  useEffect(() => {
    document.title = 'Blog - Hunting Coder';
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "655c4cd2f0ea82d8894f",
      "655c4ce2a294f804f81f"
    );

    promise.then(
      function (response) {
        console.log(response);
        setblogpost(response.documents)
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogpost.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              content={post.metadesc}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
