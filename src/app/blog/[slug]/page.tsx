// import { GetStaticPaths, GetStaticProps } from "next";
// import fs from "fs";
// import path from "path";

// type Post = {
//   slug: string;
//   title: string;
//   content: string;
// };

// export default function BlogPost({ post }: { post: Post }) {
//   return (
//     <div className="p-10">
//       <h1 className="text-[24px] font-bold text-[purple]">{post.title}</h1>
//       <p className="mt-[16px] text-gray-700">{post.content}</p>
//     </div>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const filePath = path.join(process.cwd(), "public", "data", "posts.json");
//   const data = JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[];

//   const paths = data.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params?.slug;
//   const filePath = path.join(process.cwd(), "public", "data", "posts.json");
//   const data = JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[];

//   const post = data.find((p) => p.slug === slug);

//   if (!post) return { notFound: true };

//   return {
//     props: {
//       post,
//     },
//   };
// };

// app/blog/[slug]/page.tsx

import fs from 'fs';
import path from 'path';

type Post = {
  slug: string;
  title: string;
  content: string;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Post[];

  const post = data.find(p => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
