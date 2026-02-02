import Link from "next/link";
import { GraduationCap, Github, Twitter, Linkedin } from "lucide-react";
import { Separator } from "../ui/separator";

export function AppFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
             <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">AdaptLearn</span>
            </Link>
            <p className="max-w-xs text-muted-foreground">
              Personalized, inclusive, and empowering online learning for everyone.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/reviews" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" aria-label="GitHub"><Github className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              </div>
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AdaptLearn. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
