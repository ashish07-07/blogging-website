interface Blogcard {
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
}

export function Blogcard({
  authorName,
  publishedDate,
  title,
  content,
}: Blogcard) {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName}></Avatar>
        </div>

        <div className="font-extraligh pl-2">{authorName}</div>

        {/* <div className="text-sm"></div> */}
        <div className="flex justify-center flex-col pl-2">
          <Circle></Circle>
        </div>

        <div className="pl-2 font-thin text-slate-500 ">{publishedDate}</div>
      </div>
      <div>{title}</div>

      <div>{content.slice(0, 100) + "..."}</div>

      <div>{`${Math.ceil(content.length / 100)} minutes`}</div>

      <div className="bg-slate-200 h-1 w-full"></div>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}
function Avatar({ name }: { name: string }) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
        <span className="text-xs font-thin text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    </div>
  );
}
