import Image from "next/image";
import { getPost } from "@/lib/post";
import dayjs from "dayjs";

export function generateMetadata({ params: { slug } }) {
  const post = getPost(`${slug}.md`);
  return {
    title: `${post.data.metaTitle} - Alejandro González`,
    description: post.data.metaDesc,
    openGraph: {
      title: `${post.data.metaTitle} - Alejandro González`,
      description: post.data.metaDesc,
      url: `https://aleaugustog.com/blog/article/${slug}`,
      images: post.data.socialImage ? [post.data.socialImage] : undefined,
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Page({ params: { slug } }) {
  const post = getPost(`${slug}.md`);
  return (
    <article className="max-w-4xl mx-auto my-16">
      {post.data.socialImage && (
        <Image
          alt={`cover image for ${post.data.title}`}
          src={`/${post.data.socialImage}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <header className="px-4 xl:px-32 mb-8">
        <div className="flex items-baseline space-x-4 mb-4">
          <time>{dayjs(post.data.date).format("DD-MMM-YYYY")}</time>
          <span className="text-sm uppercase underline">
            {post.data.category}
          </span>
        </div>
        <h3 className="text-4xl font-extrabold tracking-tight leading-relaxed">
          {post.data.title}
        </h3>
      </header>
      <div
        id="post-article"
        className="px-4 xl:px-32 mb-6 leading-loose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
