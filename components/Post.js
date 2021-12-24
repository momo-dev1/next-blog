import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "../components/CategoryLabel";

const Post = ({ frontmatter, slug }) => {
  return (
    <div
      style={{ maxWidth: 720 }}
      class=" focus:outline-none overflow-hidden rounded-md shadow-md hover:shadow-xl"
    >
      <Image
        width={720}
        height={480}
        class="focus:outline-none"
        src={frontmatter.cover_image}
        alt=""
      />

      <div class="py-2 px-4 flex items-center justify-between bg-indigo-700 -mt-2">
        <div className="flex items-center gap-x-3">
          <div className="w-7 h-7">
            <img
              className="object-cover w-full h-full rounded-full"
              src={frontmatter.author_image}
              alt=""
            />
          </div>
          <p class="focus:outline-none text-sm text-white font-semibold tracking-wide">
            {frontmatter.author}
          </p>
        </div>
        <p class="focus:outline-none text-sm text-white font-semibold tracking-wide ">
          {frontmatter.date}
        </p>
      </div>
      <div class="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
        <div className="flex items-center">
          <h3 class="focus:outline-none flex-1 text-lg text-gray-900 font-semibold tracking-wider">
            {frontmatter.title}
          </h3>
          <CategoryLabel>{frontmatter.category}</CategoryLabel>
        </div>

        <p class="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
          {frontmatter.excerpt}
        </p>
        <div class="flex items-center justify-end  mt-3">
          <Link href={`/blog/${slug}`}>
            <a className="text-indigo-600 hover:text-indigo-400">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
