import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Instagram } from "lucide-react"

type InstagramCarouselProps = {
	urls: string[]
	ratio?: number
	title?: string
}

function toEmbedUrl(url: string): string {
  const trimmed = url.replace(/\/?$/, "")
  return `${trimmed}/embed`
}

export default function InstagramCarousel({ urls, ratio = 1, title = "Acompanhe no Instagram" }: InstagramCarouselProps) {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Instagram className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        </div>
        <Carousel className="relative">
          <CarouselContent>
            {urls.map((url) => (
              <CarouselItem key={url} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 md:p-4">
                  <AspectRatio ratio={ratio} className="overflow-hidden rounded-xl border bg-background">
                    <iframe
                      src={toEmbedUrl(url)}
                      className="h-full w-full"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      frameBorder={0}
                      scrolling="no"
                      title={`Instagram ${url}`}
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}


