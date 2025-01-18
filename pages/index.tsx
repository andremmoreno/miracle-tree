import { IPost } from "@/types/Posts";
import Navbar from "@/components/Navbar";
import Post from "@/components/Post";

export default function Home({ posts }: { posts: IPost[]}) {
  return (
    <>
      <Navbar />
      <section className="m-4">
        <input placeholder="Search" className="my-4 rounded-sm"/>
        <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
          {
            posts.map((item: IPost) => 
              <Post key={item.id} post={item} />
            )
          }
        </ul>
      </section>
    </>
  );
}
  
export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: { posts: [] },
    };
  }
}