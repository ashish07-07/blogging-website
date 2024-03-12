import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Blog } from "./../pages/Blog";

interface Blog {
  content: string;
  title: string;
  id: string;

  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        setblogs(res.data.allblogg);
        setloading(false);
      });
  }, []);

  return { loading, blogs };
};
