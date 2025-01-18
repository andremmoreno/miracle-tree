import { IPost } from "@/types/Posts";
import Link from "next/link";

const Post = ({ post }: { post: IPost }) => {
  function truncateString(str: string, maxLength = 100) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - 3) + '...';
  }

  return (
    <li>
      <section className="bg-zinc-900 h-full p-4 flex flex-col justify-between rounded-md">
        <Link href={`/post/${post.id}`} className="text-2xl font-bold transition delay-300 duration-300 ease-in-out hover:text-green-300">{post.title}</Link>
        <p className="italic font-bold text-xs">{post.hashtag}</p>
				<p className="my-4">{truncateString(post.body)}</p>
				<Link href={`/post/${post.id}`}>Read More</Link>
			</section>
    </li>
  )
}

export default Post