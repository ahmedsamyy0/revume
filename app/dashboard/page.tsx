"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, FileText, Clock } from "lucide-react";

export default function DashboardPage() {
  const [resumes, setResumes] = useState([
    { id: 1, name: "Software Developer Resume", lastEdited: "2 days ago" },
    { id: 2, name: "Product Manager Resume", lastEdited: "1 week ago" },
  ]);

  return (
    <div className="container px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Resume
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <Card key={resume.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{resume.name}</CardTitle>
              <CardDescription className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Last edited {resume.lastEdited}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-32 flex items-center justify-center border-t border-b bg-muted/50">
              <FileText className="h-16 w-16 text-muted-foreground/50" />
            </CardContent>
            <CardFooter className="pt-3 flex justify-between">
              <Button variant="outline" size="sm">
                Preview
              </Button>
              <Button size="sm">Edit</Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="border-dashed">
          <CardContent className="h-full flex flex-col items-center justify-center p-6">
            <PlusCircle className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground text-center mb-4">
              Create a new resume from scratch or use a template
            </p>
            <Button>Create New Resume</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
