import { getAllPosts } from "@/lib/post";
import Hero from "./hero";
import PostPreview from "@/components/blog/postPreview";

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
