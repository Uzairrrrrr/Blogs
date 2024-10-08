import Link from "next/link";
import Image from "next/image";
import Banner from "./components/Banner";

const blogPosts = [
  {
    id: 1,
    title: "The Vibrant World of Color Theory",
    description:
      "Dive into the fascinating realm of color theory and its impact on design and perception.",
    image: "/static/images/vibrant_world.webp",
  },
  {
    id: 2,
    title: "Exploring the Depths of Blue",
    description:
      "Uncover the psychological and cultural significance of the color blue across different societies.",
    image: "/static/images/dept_of_blue.jpeg",
  },
  {
    id: 3,
    title: "The Power of Red in Branding",
    description:
      "Analyze how successful brands leverage the color red to evoke emotions and drive consumer behavior.",
    image: "/static/images/red_branding.jpeg",
  },
  {
    id: 4,
    title: "Green Living: More Than a Color",
    description:
      "Explore the environmental movement and how the color green became synonymous with sustainability.",
    image: "/static/images/green.jpeg",
  },
  {
    id: 5,
    title: "The Psychology of Yellow",
    description:
      "Delve into the sunny disposition of yellow and its effects on mood and cognitive function.",
    image: "/static/images/yellow.webp",
  },
  {
    id: 6,
    title: "Purple Reign: The Color of Royalty",
    description:
      "Trace the historical significance of purple and its association with power and luxury.",
    image: "/static/images/purple.jpeg",
  },
];

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <div
                className="bg-card rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="mr-1"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41 1.01 4.22 2.78C11.09 5.01 12.76 4 14.5 4 16.99 4 19 6.01 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="mr-1 text-gray-500"
                      >
                        <path d="M12 5c-7.73 0-11.92 7.06-12 7.14-.12.18-.12.54 0 .72.08.08 4.27 7.14 12 7.14s11.92-7.06 12-7.14c.12-.18.12-.54 0-.72-.08-.08-4.27-7.14-12-7.14zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
