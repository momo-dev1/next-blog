import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

import sortByDate from "../utils/sortByDate";

import Post from "../components/Post";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  return (
    <Layout title="Home page">
      <h1 className="text-3xl font-bold tracking-tighter text-center text-gray-900 underline focus:outline-none lg:text-5xl">
        Latest Updates
      </h1>

      <section className="mt-6 focus:outline-none lg:mt-14">
        <article className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </article>
      </section>
      <div className="pt-8 pb-10 text-center">
        <Link href="/blog">
          <a className="inline-block px-3 py-2 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-400">
            show more posts
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6),
    },
    revalidate: 10,
  };
}
