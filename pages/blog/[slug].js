import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Image from "next/image";
import CategoryLabel from "../../components/CategoryLabel";

const PostPage = ({ frontmatter, content, slug }) => {
  const { title, category, date, cover_image, author, author_image } =
    frontmatter;
  return (
    <Layout title={title}>
      <div className="max-w-3xl p-6 mx-auto 2xl:p-20 ">
        <div className="flex-col items-start md:flex ">
          <div className="">
            <Image
              width={720}
              height={480}
              src={cover_image}
              alt="main-picture"
            />
          </div>
          <div className="">
            <p className="text-xl font-semibold leading-5 text-white">
              <CategoryLabel>{category}</CategoryLabel>
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-800 lg:text-5xl">
              {title}
            </h2>
            <div className="flex items-center justify-between mt-6 lg:mt-8">
              <div className="flex items-center">
                <img
                  src={author_image}
                  alt="profile-picture"
                  className="w-10 h-10 rounded-full"
                />
                <p className="flex-1 ml-4 text-base text-gray-800 ">
                  By
                  <span className="ml-1 underline cursor-pointer">
                    {author}
                  </span>
                </p>
              </div>

              <p className="mt-2 text-base leading-4 text-gray-800 underline">
                {date}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className="blog-text"
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
