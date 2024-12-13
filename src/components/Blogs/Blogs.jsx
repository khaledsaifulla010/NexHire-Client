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
    <div className="mt-24 mb-24">
      <h1 className="font-black text-4xl text-center text-purple-950">
        News and Blogs
      </h1>
      <p className="text-center mt-2 text-lg font-semibold text-slate-500">
        Stay Informed with The Freshest Insights, Updates, and Expert Advice.
      </p>

      <div className="grid grid-cols-3 gap-y-10 mt-16">
        {blogs.map((blog) => (
          <BlogsCard key={blog._id} blog={blog}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
