"use client"

import React, { useState, useEffect } from 'react';
import BlogPost from "./components/BlogPosts";
import LoadingScreen from "./loading/loading";
import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655c47e550a446714751");

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_A)
  const [blogpost, setblogpost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Blog - Hunting Coder';
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_A,
      process.env.NEXT_PUBLIC_B
    );

    promise.then(
      function (response) {
        console.log(response);
        setblogpost(response.documents);
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="container p-4 mx-auto my-8">
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
