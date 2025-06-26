import Link from "next/link";
import Layout from "../../components/Layout";
import './globals.css';


export default function HomePage() {
  return (
    <div className="text-center">
      {/* <Layout>
        <h1>Home page</h1>
      </Layout> */}
      <h1 className="text-[36px] font-bold">Home page</h1>
      <Link href='/blog' className="underline text-[blue]">Blog</Link> <br />
      <Link href='/products' className="underline text-[blue]">Products</Link> <br />
      <Link href='/articles/breaking-news-123?lang-en' className="underline text-[blue]">Read in English</Link> <br />
      <Link href='/articles/breaking-news-123?lang-fr' className="underline text-[blue]">Read in French</Link>
      {/* <Link href='/about'>Go to About</Link> */}
    </div>
  );
}
