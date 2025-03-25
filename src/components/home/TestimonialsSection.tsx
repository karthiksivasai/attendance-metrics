
import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "This calculator saved me from attendance trouble. I always know exactly where I stand now and can plan accordingly.",
    author: "Sarah K.",
    role: "Engineering Student"
  },
  {
    quote: "So easy to use and super helpful for keeping track of all my classes. The visual reports make it simple to see where I need to improve.",
    author: "James L.",
    role: "Medical Student"
  },
  {
    quote: "I recommend this to all my classmates. It's become essential for our attendance tracking and has helped us all maintain good academic standing.",
    author: "Mia T.",
    role: "Computer Science Major"
  },
  {
    quote: "The interface is intuitive and the calculations are accurate. This tool has been a game-changer for managing my attendance requirements.",
    author: "Alex R.",
    role: "Business Student"
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          What Our Users Say
        </h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="italic text-card-foreground/90 text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center text-primary font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
