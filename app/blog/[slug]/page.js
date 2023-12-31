"use client";

import React from "react";
import { Client, Databases, ID, Query } from "appwrite";
import { useState, useEffect } from "react";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655c47e550a446714751");

const BlogPost = ({ params }) => {
  
  const [blogPost, setblogPost] = useState();
  const { slug } = params;

  useEffect(() => {
    document.title = "Blog - Hunting Coder";
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_A,
      process.env.NEXT_PUBLIC_B

      [Query.equal("slug", slug)]
    );

    promise.then(
      function (response) {
        console.log(response);
        setblogPost(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  if (!blogPost) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        <p>Loading...</p>
      </div>
    ); // Add a loading indicator or error handling as needed
  }

  return (
    <>
      <div className="container p-4 mx-auto my-8">
        <div className="max-w-3xl mx-auto">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={blogPost.image}
            alt={blogPost.title}
          />
          <h1 className="text-4xl font-bold my-4">{blogPost.title}</h1>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
