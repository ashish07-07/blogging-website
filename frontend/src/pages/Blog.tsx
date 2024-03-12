import { Blogcard } from "../components/Blogcard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";

export function Blog() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center   ">
        <div className=" max-w-xl ">
          {blogs.map((blog) => {
            return (
              <Blogcard
                authorName={"Ashish"}
                title={
                  "How an ugly single page website makes $5000 a month without affiliate marketting "
                }
                content={
                  "How an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate markettingHow an ugly single page website makes $5000 a month without affiliate marketting"
                }
                publishedDate={"2 nd feb 2024"}
              ></Blogcard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
