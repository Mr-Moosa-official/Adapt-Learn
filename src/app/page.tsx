import Image from "next/image";
import Link from "next/link";
import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { ReviewCard } from "@/components/review-card";
import { courses } from "@/lib/courses";
import { reviews } from "@/lib/reviews";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "course-code");
  const featuredCourses = courses.slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <AppLayout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center p-4 text-left md:p-8 lg:p-12">
            <div className="max-w-2xl">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Unlock Your Potential with AdaptLearn
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">
                The future of online learning is personalized, inclusive, and
                empowering. Find your path with our expert-led courses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/courses">
                    Explore Courses <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Featured Courses
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                Handpicked courses to kickstart your learning journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="link" className="text-lg font-semibold">
                <Link href="/courses">
                  View All Courses <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-secondary py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                What Our Students Say
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                Thousands of learners have found success with AdaptLearn.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
             <div className="mt-12 text-center">
              <Button asChild variant="link" className="text-lg font-semibold text-secondary-foreground">
                <Link href="/reviews">
                  Read All Reviews <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
