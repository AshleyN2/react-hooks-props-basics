import React from "react";

function BlogContent(props) {
  // tells React to place value of props.articleText in div 
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
