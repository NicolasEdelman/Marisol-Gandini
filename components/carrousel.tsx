import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollButtons();
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.firstElementChild?.clientWidth || 200;
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;

      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden py-4 gap-4"
        onScroll={updateScrollButtons}
      >
        {children}
      </div>

      {!isMobile && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-4rem] top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition disabled:opacity-40 "
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-4rem] top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition disabled:opacity-40"
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </>
      )}
    </div>
  );
}
