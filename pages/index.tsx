import { IPost } from "@/types/Posts";
import Post from "@/components/Post";
import { useState } from "react";

const hashtagsArray = ['#firstHashtag', '#secondHashtag', '#thirdHashtag'] 

export default function Home({ posts }: { posts: IPost[]}) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);

  const handleHashtagClick = (hashtag: string | null) => {
    setSelectedHashtag(hashtag);
    if (hashtag && hashtag !== selectedHashtag) {
      setFilteredPosts(posts.filter((post) => post.hashtag?.includes(hashtag)));
    } else {
      setSelectedHashtag(null)
      setFilteredPosts(posts);
    }
  };

  return (
    <>
      <section className="m-4">
        <ul className="flex flex-wrap">
          {
            hashtagsArray.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleHashtagClick(item)} className={`mr-4 mb-4 italic text-xs bg-zinc-900 p-2 rounded-full ${selectedHashtag === item && 'text-green-300'}`}>
                  {item}
                </button>
              </li>
            ))
          }
          {selectedHashtag && (
            <li>
              <button onClick={() => handleHashtagClick(null)} className="text-xs bg-zinc-900 p-2 rounded-full">
                Clear Filter
              </button>
            </li>
          )}
        </ul>
        <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
          {
            filteredPosts.map((item: IPost) => 
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

    const postsHashtag = posts.map((post: IPost) => ({
      ...post,
      hashtag: hashtagsArray[Math.floor(Math.random() * hashtagsArray.length)]
    }))
  
    return {
      props: {
        posts: postsHashtag,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: { posts: [] },
    };
  }
}