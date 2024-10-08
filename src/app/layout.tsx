import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Chromatic Chronicles',
  description: 'A vibrant blog exploring the spectrum of ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background">
      <link rel="icon" type="image/svg+xml" href="/static/images/blog.svg" />
        <header className="bg-primary text-primary-foreground shadow-lg bg-black">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-bold hover:text-accent transition-colors duration-200 text-white">
                Chromatic Chronicles
              </Link>
              <nav>
                <ul className="flex space-x-6">
                  <li><Link href="/" className="hover:text-accent transition-colors duration-200 text-white">Home</Link></li>
                  <li><Link href="/about" className="hover:text-accent transition-colors duration-200 text-white">About</Link></li>
                  <li><Link href="/contact" className="hover:text-accent transition-colors duration-200 text-white">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-secondary text-secondary-foreground mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p>Chromatic Chronicles is your gateway to a world of vibrant ideas and colorful perspectives.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-accent transition-colors duration-200">Home</Link></li>
                  <li><Link href="/about" className="hover:text-accent transition-colors duration-200">About</Link></li>
                  <li><Link href="/contact" className="hover:text-accent transition-colors duration-200">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl hover:text-accent transition-colors duration-200">📘</a>
                  <a href="#" className="text-2xl hover:text-accent transition-colors duration-200">🐦</a>
                  <a href="#" className="text-2xl hover:text-accent transition-colors duration-200">📸</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
              © {new Date().getFullYear()} Chromatic Chronicles. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}