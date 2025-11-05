import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    quote: "LuxeVibe turned our vision into a fairytale. The floral ceiling installation was absolutely breathtaking, and every detail was perfection. Our guests are still talking about it!",
    author: "Selamawit & Dawit",
    event: "Luxury Wedding",
    rating: 5,
  },
  {
    id: 2,
    quote: "Professional, creative, and flawless execution. Our corporate gala exceeded all expectations. The LED installations and branded elements were stunning and on-point.",
    author: "Bekele Gebremichael",
    event: "Tech Company Gala",
    rating: 5,
  },
  {
    id: 3,
    quote: "From the first consultation to the final reveal, LuxeVibe was incredible. They transformed our daughter's sweet sixteen into a magical Moroccan paradise. Worth every penny!",
    author: "Hana Tesfaye",
    event: "Birthday Celebration",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those who trusted us to create their dream events
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-2xl">★</span>
                ))}
              </div>

              <p className="font-sans text-lg md:text-xl text-foreground text-center mb-8 leading-relaxed">
                "{current.quote}"
              </p>

              <div className="text-center">
                <p className="font-serif text-xl font-bold text-secondary mb-1">
                  {current.author}
                </p>
                <p className="text-muted-foreground">{current.event}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
