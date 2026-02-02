import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Review } from "@/lib/reviews";
import { Star } from "lucide-react";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}


export function ReviewCard({ review }: { review: Review }) {
  const avatar = PlaceHolderImages.find((img) => img.id === review.avatarId);

  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex-1 p-6">
        <p className="text-muted-foreground">&quot;{review.text}&quot;</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t bg-secondary/50 p-6">
        {avatar && (
            <Avatar>
                <AvatarImage src={avatar.imageUrl} alt={review.author} data-ai-hint={avatar.imageHint} />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
            </Avatar>
        )}
        <div className="flex-1">
          <p className="font-semibold">{review.author}</p>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
        <div className="flex-shrink-0">
            <Rating rating={review.rating} />
        </div>
      </CardFooter>
    </Card>
  );
}
