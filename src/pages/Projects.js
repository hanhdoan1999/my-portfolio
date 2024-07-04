import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getBlogById } from "../API/blogAPI";
import "../styles/pages/Blogs.scss"
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

function Projects() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const blogData = await getBlogById(id);
        setProject(blogData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };
    fetchBlogDetail();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <Container>
      <h2>{blog?.title}</h2>
      <div>{blog?.content}</div>
      {/* <div className="blogs">
        {blogs?.map((product,index) => (
          <BlogItem item={product} key={index}/>
        ))}
      </div> */}
    </Container>
  );
}

export default Projects;
