import { getAllPosts } from "@/lib/post";
import Hero from "./hero";
import PostPreview from "@/components/blog/postPreview";

export const metadata = {
  title: "Alejandro González",
  description: "Full Stack Software Engineer",
  openGraph: {
    title: "Alejandro González - Full Stack Software Engineer",
    description: "Full Stack Software Engineer",
    url: "https://aleaugustog.com",
    images: ["/me.jpg"],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const posts = getAllPosts();
  return (
    <main>
      <Hero />
      <section className="max-w-4xl mx-auto">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
