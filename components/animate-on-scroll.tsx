import { useEffect, useState, type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export const AnimateOnScroll = ({ children, className = "" }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  )
}
