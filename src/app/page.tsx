import Link from 'next/link'
import Image from 'next/image'
import Banner from './components/Banner'

const blogPosts = [
  {
    id: 1,
    title: 'The Vibrant World of Color Theory',
    description: 'Dive into the fascinating realm of color theory and its impact on design and perception.',
    image: '/static/images/vibrant_world.webp',
  },
  {
    id: 2,
    title: 'Exploring the Depths of Blue',
    description: 'Uncover the psychological and cultural significance of the color blue across different societies.',
    image: '/static/images/dept_of_blue.jpeg',
  },
  {
    id: 3,
    title: 'The Power of Red in Branding',
    description: 'Analyze how successful brands leverage the color red to evoke emotions and drive consumer behavior.',
    image: '/static/images/red_branding.jpeg',
  },
  {
    id: 4,
    title: 'Green Living: More Than a Color',
    description: 'Explore the environmental movement and how the color green became synonymous with sustainability.',
    image: '/static/images/green.jpeg',
  },
  {
    id: 5,
    title: 'The Psychology of Yellow',
    description: 'Delve into the sunny disposition of yellow and its effects on mood and cognitive function.',
    image: '/static/images/yellow.webp',
  },
  {
    id: 6,
    title: 'Purple Reign: The Color of Royalty',
    description: 'Trace the historical significance of purple and its association with power and luxury.',
    image: '/static/images/purple.jpeg',
  },
]

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
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}