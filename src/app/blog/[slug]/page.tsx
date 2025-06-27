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

// import fs from 'fs';
// import path from 'path';

// type Post = {
//   slug: string;
//   title: string;
//   content: string;
// };

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export default async function BlogPostPage({ params }: Props) {
//   const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Post[];

//   const post = data.find(p => p.slug === params.slug);

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// } comment cause of netlify gives error



// import { notFound } from 'next/navigation';
// import path from 'path';
// import { promises as fs } from 'fs';

// export const runtime = 'nodejs';

// type Post = {
//   slug: string;
//   title: string;
//   content: string;
// };

// // ✅ Используем встроенную сигнатуру функции страницы
// export default async function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const filePath = path.join(process.cwd(), 'public', 'data', 'posts.json');
//   const fileContents = await fs.readFile(filePath, 'utf8');
//   const data = JSON.parse(fileContents) as Post[];

//   const post = data.find((p) => p.slug === params.slug);

//   if (!post) {
//     notFound(); // ✅ официальная функция для 404
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold text-purple-700">{post.title}</h1>
//       <p className="mt-4 text-gray-700">{post.content}</p>
//     </div>
//   );
// }
export default  function SlugPage(){
  return <h1>Slug</h1>;
}