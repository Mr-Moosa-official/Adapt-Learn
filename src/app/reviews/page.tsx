import { AppLayout } from "@/components/layout/app-layout";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/lib/reviews";

export default function ReviewsPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 text-center md:mb-12">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Student Testimonials
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how AdaptLearn has helped students around the world achieve their learning goals.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
           {reviews.map((review) => (
            <ReviewCard key={`${review.id}-clone`} review={{...review, id: `${review.id}-clone`}} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
