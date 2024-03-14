import { Blogcard } from "../components/Blogcard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Blog() {
  const { loading, blogs } = useBlogs();
  console.log(blogs);

  if (loading) {
    return (
      <div>
        <BlogSkeleton></BlogSkeleton>
      </div>
    );
  }
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center   ">
        <div className=" max-w-xl ">
          {blogs.map((blog) => {
            console.log(blog.id);
            return (
              <Blogcard
                authorName={blog.author.name || "Anonymos"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2 nd feb 2024"}
                id={blog.id}
              ></Blogcard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
