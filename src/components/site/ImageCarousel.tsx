import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
  variant?: "fade" | "slide";
  className?: string;
  aspect?: string; // e.g. "aspect-[16/9]"
  rounded?: string;
}

export const ImageCarousel = ({
  images,
  intervalMs = 3000,
  variant = "slide",
  className,
  aspect = "aspect-[16/9]",
  rounded = "rounded-2xl",
}: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const nextSlide = useCallback(() => go(index + 1, 1), [index, go]);
  const prevSlide = useCallback(() => go(index - 1, -1), [index, go]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => nextSlide(), intervalMs);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused, intervalMs, nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: variant === "slide" ? (dir > 0 ? "100%" : "-100%") : 0,
      opacity: variant === "fade" ? 0 : 1,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: variant === "slide" ? (dir > 0 ? "-100%" : "100%") : 0,
      opacity: variant === "fade" ? 0 : 1,
    }),
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-white/10 shadow-elegant group",
        aspect,
        rounded,
        className,
      )}
      onMouseEnter={() => {
        setPaused(true);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
        setHovered(false);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      <AnimatePresence custom={direction} initial={false} mode="sync">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.7 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Subtle overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />

      {/* Arrows — appear on hover */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prevSlide}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full grid place-items-center",
          "bg-background/80 text-foreground backdrop-blur-sm border border-border shadow-soft",
          "transition-all duration-300",
          hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none",
          "hover:bg-background",
        )}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={nextSlide}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full grid place-items-center",
          "bg-background/80 text-foreground backdrop-blur-sm border border-border shadow-soft",
          "transition-all duration-300",
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none",
          "hover:bg-background",
        )}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i, i > index ? 1 : -1)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm",
              i === index
                ? "w-8 bg-accent"
                : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80",
            )}
          />
        ))}
      </div>
    </div>
  );
};
