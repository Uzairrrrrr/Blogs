import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src="/static/images/baner.jpeg"
        alt="Colorful abstract banner"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">Chromatic Chronicles</h1>
          <p className="text-xl md:text-2xl animate-slideIn">Exploring the Spectrum of Ideas</p>
        </div>
      </div>
    </div>
  )
}