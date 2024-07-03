import React from 'react'
import "./BlogItem.scss"
import { Link, useNavigate } from 'react-router-dom'

function BlogItem({item,id}) {
  console.log(item)
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/blog/${id}`);
  }
  return (
      <div className="blog-card-item" onClick={()=> handleNavigate()}>
        <img src={item?.fileName} alt="Blog 1" className="blog-image" />
        <div className="blog-details">
          <p className="blog-date">{item?.date || 'N/A'}</p>
          <h3 className="blog-title">{item?.content}</h3>
        </div>
      </div>
  )
}

export default BlogItem