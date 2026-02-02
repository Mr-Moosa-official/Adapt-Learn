export type Review = {
  id: string;
  author: string;
  role: string;
  avatarId: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Sarah Johnson",
    role: "Web Developer",
    avatarId: "avatar-1",
    rating: 5,
    text: "The web development course was outstanding! The instructor explained complex concepts clearly, and the hands-on projects were invaluable. I landed a new job thanks to the skills I gained here.",
  },
  {
    id: "r2",
    author: "Michael Chen",
    role: "Student",
    avatarId: "avatar-2",
    rating: 5,
    text: "I took the 'Exploring the Cosmos' course, and it completely blew my mind. The visuals were stunning, and the content was both accessible and deeply informative. Highly recommend!",
  },
  {
    id: "r3",
    author: "Emily Rodriguez",
    role: "Artist",
    avatarId: "avatar-4",
    rating: 4,
    text: "The modern art history course was a fantastic journey through the last century of art. While I wished for more content on digital art, the overall curriculum was engaging and well-structured.",
  },
  {
    id: "r4",
    author: "David Lee",
    role: "Software Engineer",
    avatarId: "avatar-3",
    rating: 5,
    text: "As someone who uses math daily, the Advanced Calculus course was a great refresher and introduced me to new ways of thinking. The problem sets were challenging but rewarding.",
  },
  {
    id: "r5",
    author: "Jessica Williams",
    role: "Music Teacher",
    avatarId: "avatar-1",
    rating: 5,
    text: "The Music Theory and Composition course is perfect for anyone looking to deepen their musical understanding. I've already started applying the concepts with my own students.",
  },
  {
    id: "r6",
    author: "Kevin Martinez",
    role: "History Buff",
    avatarId: "avatar-2",
    rating: 5,
    text: "World Civilizations was a captivating experience. The instructor's passion for the subject was infectious, and I learned so much about different cultures and their histories. Five stars!",
  },
];
