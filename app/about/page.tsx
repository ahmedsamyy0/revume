import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          About ResumeBuilder
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            ResumeBuilder was founded with a simple mission: to help job seekers
            create professional, ATS-friendly resumes without the complexity and
            cost of traditional resume services.
          </p>

          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-6">
            After witnessing friends and colleagues struggle with resume
            creation, our founding team of HR professionals and developers came
            together to build a solution that combines beautiful design with
            practical functionality.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe everyone deserves access to tools that help them present
            their professional experience in the best possible light. Our
            platform is designed to be intuitive, accessible, and effective for
            job seekers at all career stages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Simplicity:</strong> We focus on clean, minimal design
              that puts your content first.
            </li>
            <li>
              <strong>Effectiveness:</strong> Every template is tested with real
              ATS systems to ensure compatibility.
            </li>
            <li>
              <strong>Accessibility:</strong> Our tools are designed to be
              usable by everyone, regardless of technical skill.
            </li>
            <li>
              <strong>Privacy:</strong> Your data belongs to you. We maintain
              strict privacy standards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
