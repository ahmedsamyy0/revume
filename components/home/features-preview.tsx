import { CheckCircle } from "lucide-react";

export function FeaturesPreview() {
  const features = [
    {
      title: "Professional Templates",
      description:
        "Choose from dozens of ATS-friendly templates designed by HR professionals.",
    },
    {
      title: "Easy Customization",
      description:
        "Personalize colors, fonts, and layouts to match your personal brand.",
    },
    {
      title: "AI Content Suggestions",
      description:
        "Get smart suggestions to improve your resume content and highlight key skills.",
    },
    {
      title: "Export Options",
      description:
        "Download your resume as PDF, DOCX, or share a direct link with employers.",
    },
    {
      title: "Multiple Versions",
      description:
        "Create and manage multiple resume versions tailored to different job applications.",
    },
    {
      title: "Real-time Preview",
      description: "See changes instantly as you build your perfect resume.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create impressive resumes that stand out from
            the crowd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
