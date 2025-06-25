// import { GetStaticPaths, GetStaticProps } from "next";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export default function BlogPost({ post }: { post: Post }) {
//   return (
//     <div className="p-10">
//       <h1 className="text-4xl font-bold text-blue-700">{post.title}</h1>
//       <p className="mt-4 text-lg text-gray-700">{post.body}</p>
//     </div>
//   );
// }

// // 🔽 Fetch paths for all post IDs
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data: Post[] = await res.json();

//   const paths = data.slice(0, 10).map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false, // Only these 10 routes will be pre-rendered
//   };
// };

// // 🔽 Fetch a single post’s data
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = params?.id;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post: Post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

//second version 

// type Props = {
//   params: { id: string };
// };

// export default async function PostPage({ params }: Props) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const post = await res.json();

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// third version
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params; // ✅ Explicitly await params

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-green-700">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{post.body}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();

  return data.slice(0, 5).map((post) => ({
    id: post.id.toString(),
  }));
}