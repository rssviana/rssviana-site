import { useEffect, useState } from 'react'

export default function Carousel() {
  const images = [
    'https://placehold.co/800?text=Hello+World+1&font=roboto',
    'https://placehold.co/800?text=Hello+World+2&font=roboto',
    'https://placehold.co/800?text=Hello+World+3&font=roboto',
  ]

  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-[20rem] h-[20rem]">
      {images.map((img, i) => {
        const position = (i - index + images.length) % images.length
        const isHovered = hovered === i

        const translateXRem = position * 1.75       // 28px → 1.75rem per step
        const translateYRem = position * 0.625      // 10px → 0.625rem per step
        const liftRem = isHovered ? -0.75 : 0       // -12px → -0.75rem
        const scale = 1 - position * 0.05 + (isHovered ? 0.04 : 0)

        return (
          <img
            key={i}
            src={img}
            alt="foto"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="absolute w-[18.75rem] h-[18.75rem] object-cover rounded-2xl shadow-2xl hover:shadow-[0_1.25rem_2.5rem_rgba(0,0,0,0.2)] transition-all duration-500"
            style={{
              transform: `translate(${translateXRem}rem, ${translateYRem + liftRem}rem) scale(${scale})`,
              zIndex: isHovered ? 100 : images.length - position,
              opacity: position > 2 ? 0 : 1,
            }}
          />
        )
      })}
    </div>
  )
}
