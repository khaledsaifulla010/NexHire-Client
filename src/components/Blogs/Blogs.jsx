import axios from "axios";
import { useEffect, useState } from "react";
import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((data) => setBlogs(data.data));
  }, []);

  return (
    <div className="mt-36 mb-24">
      <h1>Blogs</h1>

      <div className="grid grid-cols-3 ">
        {
            blogs.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)

        }
      </div>
    </div>
  );
};

export default Blogs;
