// import { Link } from "react-router-dom";

// interface Blogcard {
//   authorName: string;
//   publishedDate: string;
//   title: string;
//   content: string;
//   id: string;
// }

// export function Blogcard({
//   authorName,
//   publishedDate,
//   title,
//   content,
//   id,
// }: Blogcard) {
//   return (
//           <Link to={`/blog/${id}`}></Link>
//     <div className="p-4 border-b border-slate-200 pb-4   ">
//       <div className="flex items-center">
//         <Avatar name={authorName}></Avatar>
//         <div className="font-extraligh pl-2 text-sm flex justify-center flex-col">
//           {authorName}
//         </div>

//         <div className="flex justify-center flex-col pl-2 ">
//           <Circle></Circle>
//         </div>

//         <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col  ">
//           {publishedDate}
//         </div>
//       </div>
//       <div className="text-xl font-semibold pt-2">{title}</div>

//       <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>

//       <div className="w-full text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
//         content.length / 100
//       )} minute(s) read`}</div>
//     </div>
//   );
// }

// function Circle() {
//   return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
// }
// export function Avatar({
//   name,
//   size = "small",
// }: {
//   name: string;
//   size: "small" | "big";
// }) {
//   return (
//     <div>
//       <div
//         className={`relative inline-flex items-center justify-center   ${
//           size === "small" ? "w-6 h-6" : "w-10 h-10"
//         } w-${size}   h-${size} overflow-hidden bg-gray-600 rounded-full`}
//       >
//         <span
//           className={` ${
//             size === "small" ? "text-xs" : "text-md"
//           } text-xs font-thin text-gray-600 dark:text-gray-300`}
//         >
//           {name[0]}
//         </span>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

interface Blogcard {
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
  id: string;
}

export function Blogcard({
  authorName,
  publishedDate,
  title,
  content,
  id,
}: Blogcard) {
  localStorage.setItem("id", id);
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4">
        <div className="flex items-center">
          <Avatar name={authorName} size={"small"}></Avatar>
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>

          <div className="flex justify-center flex-col pl-2">
            <Circle></Circle>
          </div>

          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>

        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>

        <div className="w-full text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
        } overflow-hidden bg-gray-600 rounded-full`}
      >
        <span
          className={`${
            size === "small" ? "text-xs" : "text-md"
          } text-xs font-thin text-gray-600 dark:text-gray-300`}
        >
          {name[0]}
        </span>
      </div>
    </div>
  );
}
