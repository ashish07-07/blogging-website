import { Avatar } from "./Blogcard";
import { Link } from "react-router-dom";
export function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/"} className="flex flex-col justify-center cursor-pointer">
        Medium
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar size={"big"} name={"Ashish"}></Avatar>
      </div>
    </div>
  );
}
