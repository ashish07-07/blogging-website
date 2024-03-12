import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const { id } = useParams();
export function Blogs() {
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading ...</div>;
  }

  return <div>BLog details</div>;
}
