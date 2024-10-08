import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          About Chromatic Chronicles
        </h1>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/static/images/about-us.avif"
            alt="Diverse team collaborating on color design projects"
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <p className="mb-4 text-lg">
              Welcome to Chromatic Chronicles, where we paint the world with
              words and ideas! Our blog is dedicated to exploring the vibrant
              spectrum of colors and their impact on our lives, from art and
              design to psychology and culture.
            </p>
            <p className="mb-4 text-lg">
              Founded in 2023, Chromatic Chronicles is the brainchild of a
              diverse group of color enthusiasts, including artists, designers,
              psychologists, and writers. Our mission is to illuminate the
              often-overlooked influence of color in our daily lives and to
              inspire our readers to see the world through a more colorful lens.
            </p>
            <p className="mb-4 text-lg">
              At Chromatic Chronicles, we believe that understanding color is
              key to unlocking creativity, improving communication, and
              enhancing our overall well-being. Through our articles, we aim to:
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>
                Educate our readers about color theory and its practical
                applications
              </li>
              <li>
                Explore the psychological and emotional impacts of different
                colors
              </li>
              <li>
                Showcase innovative uses of color in art, design, and technology
              </li>
              <li>
                Investigate the cultural significance of colors across the globe
              </li>
              <li>
                Provide tips and inspiration for incorporating color into
                everyday life
              </li>
            </ul>
            <p className="mb-4 text-lg">
              Whether you're a professional designer, an art enthusiast, or
              simply someone curious about the world of color, Chromatic
              Chronicles has something for you. Join us on this colorful journey
              as we continue to unravel the mysteries and marvels of the
              spectrum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
