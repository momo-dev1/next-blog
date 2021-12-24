import fs from "fs";
import path from "path";
import matter from "gray-matter";

import sortByDate from "../../utils/sortByDate";

import Post from "../../components/Post";
import Layout from "../../components/Layout";

export default function BlogPost({ posts }) {
  return (
    <Layout title="Home page">
      <h1 class="text-3xl font-bold tracking-tighter text-center text-gray-900 underline focus:outline-none lg:text-5xl">
        Blog
      </h1>
      <section class="focus:outline-none mt-6 lg:mt-14">
        <article class="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </article>
      </section>
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
      posts: posts.sort(sortByDate),
    },
    revalidate: 10,
  };
}
