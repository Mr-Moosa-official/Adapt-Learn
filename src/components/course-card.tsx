import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Course } from "@/lib/courses";
import { Clock, Book, Star, Users } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  const image = PlaceHolderImages.find((img) => img.id === course.imageId);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href="#">
          <div className="relative aspect-video">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary">{course.category}</Badge>
          <div className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">
           <Link href="#" className="hover:text-primary transition-colors">{course.title}</Link>
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-2 text-sm">
          {course.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Book className="h-4 w-4" />
          <span>{course.lessons} lessons</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{Math.floor(course.students / 1000)}k+</span>
        </div>
      </CardFooter>
    </Card>
  );
}
