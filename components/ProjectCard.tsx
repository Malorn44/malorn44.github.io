import Link from 'next/link'
import Image from 'next/image'

export type ProjectCardProps = {
  title: string
  href?: string
  image?: string
}

export default function ProjectCard({ title, href, image }: ProjectCardProps) {
  const CardInner = (
    <div className="group block rounded-lg overflow-hidden border border-muted bg-background/80 transition-transform transform hover:scale-105 hover:shadow-lg">
      {image ? (
        <div className="relative w-full aspect-3/2 bg-gray-100">
          <Image src={image} alt={title} fill className="object-cover" />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

          <div className="absolute left-4 bottom-4">
            <h3 className="text-white text-lg font-semibold drop-shadow">{title}</h3>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <h3 className="text-(--primary) text-lg font-semibold">{title}</h3>
        </div>
      )}
    </div>
  )

  return href ? (
    <Link href={href} className="block">
      {CardInner}
    </Link>
  ) : (
    CardInner
  )
}
