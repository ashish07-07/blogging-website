import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);

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
