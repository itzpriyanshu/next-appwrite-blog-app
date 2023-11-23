import React from 'react'
import Navbar from '@/app/components/navbar';

const about = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-2/3">
        <h2 className="text-2xl font-semibold mb-6">About Hunting Coder</h2>
        <p className="text-gray-800">
          Welcome to Hunting Coder, a blog dedicated to the world of coding and technology!
          I'm Priyanshu Raj, the founder and creator of this space. Here, we explore the
          latest trends, share coding tips, and delve into the fascinating world of
          software development.
        </p>
        <p className="text-gray-800 mt-4">
          Join me on this journey as we uncover the secrets of coding, discuss
          programming languages, and navigate the ever-evolving tech landscape.
          Whether you're a seasoned developer or just starting your coding adventure,
          Hunting Coder is here to inspire and guide you.
        </p>
        <p className="text-gray-800 mt-4">
          Stay tuned for regular updates and insightful articles. Happy coding!
        </p>
        <b className="text-gray-800 mt-4">
          - Priyanshu Raj, Founder of Hunting Coder
        </b>
      </div>
    </div>
    </>
  )
}

export default about