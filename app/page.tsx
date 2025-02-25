import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/hero";
import { FeaturesPreview } from "@/components/home/features-preview";
import { TestimonialsParallax } from "@/components/home/testimonials-parallax";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturesPreview />
      <TestimonialsParallax />

      <section className="py-20 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to build your professional resume?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their
            dream jobs with our resume builder.
          </p>
          <Link href="/register">
            <Button size="lg" className="px-8">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
