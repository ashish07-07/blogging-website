import { Blogcard } from "../components/Blogcard";

export function Blog() {
  return (
    <div className="flex justify-center   ">
      <div className=" max-w-xl ">
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
      </div>
    </div>
  );
}
