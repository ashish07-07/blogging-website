import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/Fullblog";

export function Blogs() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <FullBlog></FullBlog>
    </div>
  );
}
