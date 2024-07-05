import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getBlogById } from "../API/blogAPI";
import "../styles/pages/Blogs.scss"
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Projects() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);


  const generateUUID = () => {
    return uuidv4();
  };

  return (
    <Container>
      {/* <h2>{blog?.title}</h2>
      <div>{blog?.content}</div> */}
      <div>
      <h1>UUID Generator</h1>
      <p>Your UUID: {generateUUID()}</p>
    </div>
    </Container>
  );
}

export default Projects;
