"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log('Response:', response)
      if (response.ok) {
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to save data. Please try again.')
      }
    } catch (error) {
      console.error('Error saving data:', error)
      alert('An error occurred. Please try again later.')
    }
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='John Doe'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='LwXw7@example.com'
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='Write your message here...'
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
    </div>
  )
}