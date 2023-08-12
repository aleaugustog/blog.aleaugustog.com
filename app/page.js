import matter from "gray-matter";
import md from "markdown-it";
import Hero from "./hero";

export async function getStaticProps() {
  try {
    const files = fs.readdirSync("public/posts");
    const posts = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/posts/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    return {
      props: { posts },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

export default function Home({ posts }) {
  return (
    <main>
      <Hero />
      <section className="max-w-4xl mx-auto">
        <p>Hello</p>
      </section>
    </main>
  );
}
