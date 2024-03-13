import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Blog } from "./../pages/Blog";

export interface Blog {
  content: string;
  title: string;
  id: string;

  author: {
    name: string;
  };
}

// export const useBlogs = () => {
//   const [loading, setloading] = useState(true);
//   const [blogs, setblogs] = useState<Blog[]>([]);

//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
//         headers: {
//           authorization: localStorage.getItem("token"),
//         },
//       })
//       .then(function (res) {
//         setblogs(res.data.allblogg);
//         setloading(false);
//       });
//   }, []);

//   return { loading, blogs };
// };

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        setBlogs(res.data.allblogg);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Set loading to false even in case of an error
      });
  }, []);

  return { loading, blogs };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);

  const [blog, setblog] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(function (ress) {
        setblog(ress.data.res);
        setloading(false);
      });
  }, [id]);

  return { loading, blog };
};
