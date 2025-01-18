import { IPost } from "@/types/Posts";

interface IParams {
  params: {
    id: number
  }
}

export default function Post({ post }: {post: IPost} ) {
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <section className="mx-8 mt-4">
      <h1 className="md:text-3xl font-bold">{post.title}</h1>
      <p className="italic font-bold text-xs">{`Post: ${post.id}`}</p>
      <p className="italic font-bold text-xs">{`Author: ${post.userId}`}</p>
      <p className="mt-4">{post.body}</p>
    </section>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map((post: IPost) => ({
      params: { id: post.id.toString() },
    }))

    return { paths, fallback: false };
  } catch (error) {
    console.error('Failed to fetch posts for paths:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }: IParams) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch the post');
    }
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error('Failed to fetch post details:', error);
    return {
      props: { post: null },
    };
  }
}