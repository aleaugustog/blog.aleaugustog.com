import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ post }) {
  const postUrl = `/blog/article/${post.slug}`;
  return (
    <div className="mb-16">
      {post.data.socialImage && (
        <Link className="block mb-4" href={postUrl}>
          <Image
            alt={`cover image for ${post.data.title}`}
            src={`/${post.data.socialImage}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      )}
      <div className="px-4 xl:px-32 mb-4">
        <div className="flex justify-between">
          <time className="">
            {dayjs(post.data.date).format("DD-MMM-YYYY")}
          </time>
          <span className="">{post.data.category}</span>
        </div>
        <Link
          className="text-4xl font-extrabold tracking-tight leading-relaxed hover:text-gray-500"
          href={postUrl}
        >
          {post.data.title}
        </Link>
      </div>
      <div className="px-4 xl:px-32 mb-6 leading-loose">
        <p>{post.excerpt}</p>
      </div>
      <div className="px-4 xl:px-32">
        <Link href={postUrl} className="font-bold text-lg hover:text-gray-500">
          Read More
        </Link>
      </div>
    </div>
  );
}
