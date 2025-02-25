"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "ResumeBuilder helped me land my dream job at Google. The templates are clean, professional, and ATS-friendly.",
    author: "Sarah Johnson",
    role: "UX Designer",
    avatar: "/images/avatars/avatar-1.jpg",
    company: "Google",
  },
  {
    id: 2,
    content:
      "I was struggling with my resume format until I found this tool. Within an hour, I had a polished resume that got me multiple interviews.",
    author: "Michael Chen",
    role: "Software Engineer",
    avatar: "/images/avatars/avatar-2.jpg",
    company: "Microsoft",
  },
  {
    id: 3,
    content:
      "The AI suggestions were incredibly helpful. They helped me highlight achievements I would have otherwise overlooked.",
    author: "Jessica Williams",
    role: "Marketing Manager",
    avatar: "/images/avatars/avatar-3.jpg",
    company: "Adobe",
  },
  {
    id: 4,
    content:
      "As someone changing careers, I needed a resume that highlighted transferable skills. This tool made it simple and effective.",
    author: "David Rodriguez",
    role: "Product Manager",
    avatar: "/images/avatars/avatar-4.jpg",
    company: "Amazon",
  },
  {
    id: 5,
    content:
      "The multiple version feature is a game-changer. I can tailor my resume for different positions without starting from scratch.",
    author: "Emily Thompson",
    role: "Data Scientist",
    avatar: "/images/avatars/avatar-5.jpg",
    company: "Netflix",
  },
];

// Generate a color based on the company name
const getCompanyColor = (company: string) => {
  const colors = {
    Google: "bg-blue-500",
    Microsoft: "bg-green-500",
    Adobe: "bg-red-500",
    Amazon: "bg-yellow-500",
    Netflix: "bg-purple-500",
    default: "bg-primary",
  };

  return colors[company as keyof typeof colors] || colors.default;
};

// Generate initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

export function TestimonialsParallax() {
  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What our users say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their job
            search with our resume builder.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    content: string;
    author: string;
    role: string;
    avatar: string;
    company: string;
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  // Alternate cards left and right
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`mb-12 flex ${isEven ? "justify-start" : "justify-end"}`}
      initial={{
        opacity: 0,
        x: isEven ? -100 : 100,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className={`bg-background rounded-xl p-6 shadow-md border max-w-lg relative ${
          isEven ? "ml-0 mr-auto" : "ml-auto mr-0"
        }`}
      >
        {/* Company badge */}
        <div
          className={`absolute -top-3 ${
            isEven ? "right-4" : "left-4"
          } px-3 py-1 rounded-full text-xs font-medium text-white ${getCompanyColor(
            testimonial.company
          )}`}
        >
          {testimonial.company}
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>

        <p className="mb-6 text-sm">{testimonial.content}</p>

        <div className="flex items-center gap-3">
          <div
            className={`relative h-10 w-10 rounded-full overflow-hidden flex items-center justify-center ${getCompanyColor(
              testimonial.company
            )}`}
          >
            <span className="text-white font-medium text-sm">
              {getInitials(testimonial.author)}
            </span>
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute -z-10 ${
            isEven ? "-right-3 -bottom-3" : "-left-3 -bottom-3"
          } w-24 h-24 rounded-full opacity-10 ${getCompanyColor(
            testimonial.company
          )}`}
        ></div>
      </div>
    </motion.div>
  );
}
