import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-2">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span>Trusted by 10,000+ professionals</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Create <span className="text-primary">standout</span> resumes in
                minutes
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Our intuitive resume builder helps you craft a professional
                resume that gets you noticed by employers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register">
                  <Button size="lg" className="group">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" size="lg">
                    See All Features
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-1.5 h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1.5 h-4 w-4 text-primary" />
                  <span>ATS-friendly templates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1.5 h-4 w-4 text-primary" />
                  <span>Export as PDF/DOCX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-lg -z-10"></div>

            {/* Main image with shadow and border */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border shadow-xl">
              <Image
                src="/images/resume-preview.png"
                alt="Resume Preview"
                fill
                className="object-cover"
                priority
              />

              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">ATS Optimized</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">
                    Professional Template
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted by professionals from leading companies
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
            {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map(
              (company) => (
                <div key={company} className="text-lg font-semibold">
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
