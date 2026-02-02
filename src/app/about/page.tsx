import Image from "next/image";
import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Lightbulb, Target, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === "about-us-hero");

  return (
    <AppLayout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full bg-primary text-primary-foreground">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-20"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              About AdaptLearn
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              We are on a mission to make learning accessible, engaging, and effective for everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                            <Lightbulb className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Our Vision</h3>
                        <p className="text-muted-foreground">To create a world where anyone can build their future through learning.</p>
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                            <Target className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Our Mission</h3>
                        <p className="text-muted-foreground">To provide high-quality, flexible, and affordable online education that adapts to individual learning styles and goals.</p>
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                            <Users className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Our Community</h3>
                        <p className="text-muted-foreground">Join a global community of learners, instructors, and innovators passionate about growth and discovery.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Story Section */}
        <section className="w-full bg-secondary py-12 md:py-20 lg:py-24">
            <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Our Story
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        AdaptLearn was founded in 2023 by a group of educators and technologists who believed in the power of personalized education. Frustrated with the one-size-fits-all approach of traditional online learning, we set out to build a platform that truly adapts to the individual.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        Using cutting-edge technology and pedagogical research, we've created a unique learning experience that empowers students to learn at their own pace, on their own terms. Today, AdaptLearn serves thousands of learners across the globe, and we're just getting started.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="https://picsum.photos/seed/team/600/400"
                        alt="AdaptLearn Team"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="diverse team"
                    />
                </div>
            </div>
        </section>

        {/* Join Us Section */}
         <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-2 text-muted-foreground md:text-lg">
              Explore our courses and join the AdaptLearn community today.
            </p>
             <div className="mt-8">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/courses">
                    Browse All Courses
                  </Link>
                </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
