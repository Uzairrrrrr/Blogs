"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setIsSubmitting(false)
      setIsSubmitted(response.ok)

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error saving data:', error)
      setIsSubmitting(false)
      setIsSubmitted(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Contact Us</h1>
      <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="LwXw7@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 bg-black"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/static/images/contact_us.avif"
              alt="Colorful Communication"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center relative animate-fadeIn">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-8 w-8 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <p className="text-lg font-medium text-gray-700">Sending message...</p>
              </>
            ) : isSubmitted ? (
              <>
                <svg className="h-10 w-10 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-3m-4 8a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <p className="text-lg font-bold text-green-600">Message sent successfully!</p>
                <button onClick={closeModal} className="mt-6 bg-primary text-white bg-red-500 py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
                  Close
                </button>
              </>
            ) : (
              <>
                <svg className="h-10 w-10 text-red-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-lg font-semibold text-red-600">Failed to send message.</p>
                <button onClick={closeModal} className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
