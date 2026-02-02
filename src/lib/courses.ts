export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageId: string;
  duration: string;
  lessons: number;
  rating: number;
  students: number;
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "Introduction to Web Development",
    category: "Programming",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites from scratch.",
    imageId: "course-code",
    duration: "8 weeks",
    lessons: 32,
    rating: 4.8,
    students: 12503,
  },
  {
    id: "c2",
    title: "Modern Art History: 1850-Present",
    category: "Art & History",
    description: "Explore the revolutionary movements and iconic artists that shaped modern and contemporary art.",
    imageId: "course-art",
    duration: "6 weeks",
    lessons: 18,
    rating: 4.6,
    students: 7890,
  },
  {
    id: "c3",
    title: "Quantum Physics for Beginners",
    category: "Science",
    description: "Dive into the weird and wonderful world of quantum mechanics, from wave-particle duality to quantum entanglement.",
    imageId: "course-science",
    duration: "10 weeks",
    lessons: 25,
    rating: 4.9,
    students: 9234,
  },
  {
    id: "c4",
    title: "Music Theory and Composition",
    category: "Music",
    description: "Understand the language of music and learn to compose your own melodies and harmonies.",
    imageId: "course-music",
    duration: "12 weeks",
    lessons: 40,
    rating: 4.7,
    students: 6543,
  },
  {
    id: "c5",
    title: "Advanced Calculus",
    category: "Mathematics",
    description: "Master multivariable calculus, differential equations, and their applications in science and engineering.",
    imageId: "course-math",
    duration: "8 weeks",
    lessons: 28,
    rating: 4.5,
    students: 4321,
  },
  {
    id: "c6",
    title: "World Civilizations",
    category: "Art & History",
    description: "A comprehensive survey of major world civilizations from ancient times to the modern era.",
    imageId: "course-history",
    duration: "9 weeks",
    lessons: 22,
    rating: 4.7,
    students: 8123,
  },
  {
    id: "c7",
    title: "Exploring the Cosmos",
    category: "Science",
    description: "Journey through our solar system, the Milky Way, and beyond to understand the scale and wonders of the universe.",
    imageId: "course-astro",
    duration: "6 weeks",
    lessons: 15,
    rating: 4.9,
    students: 15321,
  },
  {
    id: "c8",
    title: "Shakespearean Literature",
    category: "Literature",
    description: "An in-depth study of Shakespeare's major plays and sonnets, exploring their timeless themes and language.",
    imageId: "course-literature",
    duration: "7 weeks",
    lessons: 20,
    rating: 4.6,
    students: 5432,
  },
];
