import Image from "next/image";
import { AppLayout } from "@/components/layout/app-layout";
import { MediaPlayer } from "@/components/media-player";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BookOpen, BrainCircuit } from "lucide-react";

export default function Home() {
  const courses = PlaceHolderImages.filter((img) =>
    img.id.startsWith("course-")
  );

  return (
    <AppLayout>
      <div className="flex flex-col gap-8 p-4 md:p-8">
        <header className="flex flex-col gap-2">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to AdaptLearn
          </h1>
          <p className="text-muted-foreground">
            Your journey to accessible learning starts here.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <main className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit />
                  AI Content Tools
                </CardTitle>
                <CardDescription>
                  Generate captions and transcripts for your video and audio
                  content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MediaPlayer />
              </CardContent>
            </Card>
          </main>

          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen />
                  Continue Learning
                </CardTitle>
                <CardDescription>
                  Pick up where you left off.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {courses.slice(0, 3).map((course, index) => (
                  <div
                    key={course.id}
                    className="flex items-center gap-4 rounded-lg border p-2 transition-colors hover:bg-accent"
                  >
                    <Image
                      src={course.imageUrl}
                      alt={course.description}
                      width={80}
                      height={60}
                      data-ai-hint={course.imageHint}
                      className="aspect-video rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">Course Title {index + 1}</h3>
                      <p className="text-sm text-muted-foreground">
                        {course.description.split(".")[0]}.
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>

        <div>
          <h2 className="font-headline mb-4 text-2xl font-bold">
            Explore Courses
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={course.imageUrl}
                    alt={course.description}
                    width={600}
                    height={400}
                    data-ai-hint={course.imageHint}
                    className="aspect-video w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-1 text-lg">
                    {course.description.split(" ")[0]} 101
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
