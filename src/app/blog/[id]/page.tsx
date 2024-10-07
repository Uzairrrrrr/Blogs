import Image from "next/image";
import { notFound } from "next/navigation";

const blogPosts = {
  1: {
    title: "The Vibrant World of Color Theory",
    content: `Color theory is a fundamental aspect of design that explores how colors interact and how they can be used effectively to create visually appealing and meaningful compositions. At its core, color theory provides a framework for understanding color relationships, harmonies, and the psychological impact of different hues.

    The color wheel, a circular arrangement of colors based on their chromatic relationship, is a key tool in color theory. It typically includes primary colors (red, blue, and yellow), secondary colors (green, orange, and purple), and tertiary colors (yellow-green, blue-green, blue-purple, red-purple, red-orange, and yellow-orange).

    Color harmonies are pleasing color combinations derived from the color wheel. Some common harmonies include:
    
    1. Complementary: Colors opposite each other on the color wheel
    2. Analogous: Colors adjacent to each other on the color wheel
    3. Triadic: Three colors equally spaced on the color wheel
    4. Tetradic: Four colors arranged into two complementary pairs

    Understanding color theory allows designers to create balanced, harmonious, and impactful visual experiences. It's an essential skill in fields such as graphic design, interior design, fashion, and digital media.`,
    image: "/static/images/vibrant_world.webp",
  },
  2: {
    title: "Exploring the Depths of Blue",
    content: `Blue, a primary color on the traditional RYB color model, has captivated humans for millennia. It's a color that surrounds us in nature, from the vast expanse of the sky to the depths of the oceans. The psychological and cultural significance of blue is profound and varies across different societies.

    Psychologically, blue is often associated with calmness, serenity, and stability. It's known to have a soothing effect on the mind and body, which is why it's frequently used in bedrooms and spaces designed for relaxation. Blue is also linked to trust, intelligence, and confidence, making it a popular choice for corporate branding.

    Culturally, the perception of blue has evolved over time. In ancient Egypt, blue was associated with the sky and divinity. The Romans connected blue with barbarism, as many of the peoples they conquered painted their faces blue before battle. In Christianity, blue became associated with the Virgin Mary during the Middle Ages, symbolizing purity and virtue.

    In color theory, blue is considered a cool color. It can be used to create depth in compositions and is often used to represent water or sky in landscapes. When combined with warm colors like orange or yellow, blue can create striking contrasts.

    The versatility of blue in design is remarkable. Lighter shades can evoke feelings of freshness and tranquility, while darker shades can represent professionalism and stability. This makes blue a popular choice in various design contexts, from website design to product packaging.`,
    image: "/static/images/dept_of_blue.jpeg",
  },
  3: {
    title: "The Power of Red in Branding",
    content: `Red, a color of intensity and passion, has been a powerful tool in branding for decades. Its ability to evoke strong emotions and create immediate visual impact makes it a favorite among marketers and designers alike. The psychology behind the color red in branding is fascinating and multifaceted.

    In branding, red is often associated with excitement, energy, and confidence. It's known to increase heart rate and create a sense of urgency, which is why it's frequently used in clearance sales and call-to-action buttons. Brands that use red in their logos and marketing materials often aim to be perceived as bold, youthful, and exciting.

    Some of the world's most recognizable brands heavily utilize red in their branding:
    1. Coca-Cola: The iconic red and white logo is recognized globally and has become synonymous with refreshment.
    2. Netflix: The streaming giant's red logo stands out and captures attention, much like the entertainment it provides.
    3. YouTube: The bright red play button has become a universal symbol for video content.

    However, the use of red in branding isn't without its challenges. Too much red can be overwhelming or aggressive, and its meaning can vary in different cultures. In China, for example, red symbolizes good luck and prosperity, while in some African countries, it's associated with death and mourning.

    Successful use of red in branding requires a deep understanding of the target audience, cultural context, and the brand's personality. When used effectively, red can create a powerful and memorable brand identity that resonates with consumers on an emotional level.`,
    image: "/static/images/red_branding.jpeg",
  },
  4: {
    title: "Green Living: More Than a Color",
    content: `The color green has transcended its visual properties to become a powerful symbol of environmental consciousness and sustainable living. This transformation is deeply rooted in both natural associations and deliberate branding efforts by environmental movements.

    Naturally, green is the color of vegetation, representing growth, renewal, and the natural world. This innate connection to nature made green an obvious choice for environmental causes. As the environmental movement gained momentum in the 1960s and 1970s, the color green became increasingly associated with eco-friendly practices and products.

    The term "green living" encompasses a wide range of practices aimed at reducing one's environmental impact:
    1. Energy conservation and the use of renewable energy sources
    2. Reducing waste through recycling and composting
    3. Choosing sustainable and ethically produced products
    4. Supporting local and organic food production
    5. Using eco-friendly transportation methods

    In the corporate world, "going green" has become a significant trend. Companies use green in their branding and packaging to signal their commitment to environmental responsibility. However, this has also led to concerns about "greenwashing," where companies exaggerate their environmental efforts for marketing purposes.

    Green certifications and labels have emerged to help consumers make informed choices. These include:
    - ENERGY STAR for energy-efficient appliances
    - LEED certification for green buildings
    - Organic labels for food and textiles
    - Forest Stewardship Council (FSC) certification for wood products

    As we face growing environmental challenges, the concept of green living continues to evolve. It's no longer just about individual choices, but also about systemic changes in how we produce, consume, and dispose of goods. The color green serves as a constant reminder of our connection to the planet and our responsibility to protect it for future generations.`,
    image: "/static/images/green.jpeg",
  },
  5: {
    title: "The Psychology of Yellow",
    content: `Yellow, the color of sunshine, daffodils, and happy faces, has a unique psychological impact that sets it apart from other hues. This bright and cheerful color is often associated with happiness, optimism, and energy. But its effects on the human mind and behavior go far beyond these simple associations.

    Psychologically, yellow is known to:
    1. Stimulate mental activity: Yellow is often used in learning environments as it's believed to enhance concentration and speed up metabolism.
    2. Increase confidence and optimism: The bright, sunny nature of yellow can boost self-esteem and create a positive outlook.
    3. Trigger caution: In nature, yellow often signals danger (think of wasps or poison dart frogs), making it an effective color for warning signs.
    4. Enhance memory: Studies have shown that yellow backgrounds can improve recall of information.

    However, the effects of yellow can vary depending on its shade and how it's used:
    - Pale yellow can be calming and is often used in infant rooms.
    - Bright yellow can be overwhelming if overused, potentially leading to feelings of frustration or anger.
    - Golden yellows are associated with prestige and wisdom.

    In marketing and branding, yellow is often used to:
    - Grab attention: Yellow is one of the most visible colors in the spectrum.
    - Create a sense of affordability: Many discount retailers use yellow in their branding.
    - Stimulate appetite: Yellow is commonly used in food packaging and restaurant decor.

    Culturally, the meaning of yellow can vary significantly:
    - In China, yellow was historically associated with emperors and royalty.
    - In some Latin American cultures, yellow is associated with death and mourning.
    - In Egypt, yellow is associated with mourning.

    Understanding the psychology of yellow can be valuable in various fields, from design and marketing to therapy and education. By harnessing its attention-grabbing and mood-lifting properties, we can create environments and experiences that positively influence cognition and emotion.`,
    image: "/static/images/yellow.webp",
  },
  6: {
    title: "Purple Reign: The Color of Royalty",
    content: `Purple, a color that has long been associated with royalty, luxury, and power, has a fascinating history that spans centuries and cultures. Its regal status is deeply rooted in its historical scarcity and the difficulty of producing purple dye.

    In ancient times, purple dye was extremely rare and expensive:
    - The Phoenicians produced it from a species of sea snail found in the Tyre region of the Mediterranean Sea.
    - It took thousands of mollusks to extract enough dye for a single garment.
    - The process was labor-intensive and time-consuming, making purple-dyed textiles worth their weight in gold.

    Due to its high cost, purple became associated with royalty and nobility:
    - In ancient Rome, only emperors were allowed to wear purple.
    - In Byzantium, born princes were described as "born in the purple" because of the purple-draped chamber where royal births took place.
    - Queen Elizabeth I forbade anyone except close members of the royal family to wear purple.

    The symbolism of purple has evolved over time:
    1. Power and Ambition: Purple's royal associations have led to its use in contexts where authority and ambition are emphasized.
    2. Spirituality and Mystery: In many cultures, purple is associated with spiritual insight and mystical experiences.
    3. Creativity and Individuality: In modern times, purple has come to represent creative expression and non-conformity.
    4.

 Luxury and Quality: Many brands use purple to convey a sense of premium quality and exclusivity.

    In color psychology, purple is often associated with:
    - Wisdom and dignity
    - Imagination and creativity
    - Mystery and magic
    - Transformation and enlightenment

    In modern use, purple continues to be a popular choice in:
    - Luxury product packaging
    - High-end cosmetics
    - Spiritual and New Age contexts
    - Creative and artistic branding

    The "reign" of purple as a symbol of status has transformed over the centuries, but its associations with luxury, creativity, and spirituality remain strong. Understanding the rich history and psychological impact of purple can inform its effective use in design, marketing, and personal expression.`,
    image: "/static/images/purple.jpeg",
  },
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as unknown as keyof typeof blogPosts];
  if (!post) {
    notFound();
  }
  return (
    <article className="container mx-auto px-4 py-12 animate-slideIn">
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-accent">{post.title}</h1>
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
