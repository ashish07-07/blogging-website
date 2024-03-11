import { Blogcard } from "../components/Blogcard";

export function Blog() {
  return (
    <div>
      <Blogcard
        authorName={"Ashish"}
        title={"title of the blog"}
        content={"content testing of the vlog"}
        publishedDate={"2 nd feb 2024"}
      ></Blogcard>
    </div>
  );
}
