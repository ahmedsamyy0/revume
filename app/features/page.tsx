import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Palette,
  Sparkles,
  Download,
  Layers,
  Eye,
  Users,
  Lock,
  BarChart,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Professional Templates",
      description:
        "Choose from dozens of ATS-friendly templates designed by HR professionals and optimized for specific industries and career levels.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Easy Customization",
      description:
        "Personalize colors, fonts, and layouts to match your personal brand without any design skills required.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "AI Content Suggestions",
      description:
        "Get smart suggestions to improve your resume content, highlight key skills, and optimize your wording for maximum impact.",
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Multiple Export Options",
      description:
        "Download your resume as PDF, DOCX, or share a direct link with employers. All formats are optimized for applicant tracking systems.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Version Management",
      description:
        "Create and manage multiple resume versions tailored to different job applications, keeping track of which version you sent where.",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Real-time Preview",
      description:
        "See changes instantly as you build your perfect resume, with responsive previews for different devices and formats.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description:
        "Share your resume drafts with mentors or colleagues to get feedback directly within the platform.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Privacy Controls",
      description:
        "Control exactly who can see your resume and what information is shared when you distribute it.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Performance Analytics",
      description:
        "Track how your resume performs with employers, including views, downloads, and engagement metrics.",
    },
  ];

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Features</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover all the powerful tools and features that make ResumeBuilder
          the perfect choice for your job search.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
