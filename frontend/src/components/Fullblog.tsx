import { Appbar } from "./Appbar";
import { Blog } from "../hooks/index";
import { Avatar } from "./Blogcard";

// export function FullBlog({ blog }: { blog: Blog }) {
//   return (
//     <div>
//       <Appbar></Appbar>
//       <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
//         <div className=" bg-red -200 col-span-8 ">
//           <div className="text-5xl font-extrabold">{blog.title}</div>

//           <div className="text -slate-500 pt-2 text-black">
//             Posted on April 12 2024
//           </div>
//           <div className="pt-2">{blog.content}</div>
//         </div>

//         <div className=" col-span-4 ">
//           <div className="textslate-600">Author</div>

//           <div className="flex w-full">
//             <div className="pr-4 flex flex-col justify-center">
//               <Avatar
//                 size="big"
//                 name={blog.author.name || "Annonymous"}
//               ></Avatar>
//             </div>

//             <div>
//               <div className="text-xl font-bold">
//                 {blog.author.name || "Anonymous"}
//               </div>

//               <div className="pt-2 text-slate-500">
//                 Random catch phrase about the authors ability to grab the users
//                 attention
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { Appbar } from "./Appbar";
// import { Blog } from "../hooks/index";
// import { Avatar } from "./Blogcard";

export function FullBlog({ blog }: { blog: Blog | null }) {
  if (!blog) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div>
      <Appbar></Appbar>
      <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className=" bg-red -200 col-span-8 ">
          <div className="text-5xl font-extrabold">{blog.title}</div>

          <div className="text -slate-500 pt-2 text-black">
            Posted on April 12 2024
          </div>
          <div className="pt-2">{blog.content}</div>
        </div>

        <div className=" col-span-4 ">
          <div className="textslate-600">Author</div>

          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar
                size="big"
                name={blog.author.name || "Annonymous"}
              ></Avatar>
            </div>

            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>

              <div className="pt-2 text-slate-500">
                Random catch phrase about the authors ability to grab the users
                attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
