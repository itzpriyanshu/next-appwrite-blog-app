import React from 'react'
import Navbar from '@/app/components/navbar';

const contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default contact