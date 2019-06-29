import React from 'react'

const BlogPostLayout = ({ children, frontmatter }) => {
  console.log('frontmatter in BlogPostLayout', frontmatter)
  // const { title, author, date } = null
  return (
      <article>
        <header>
          <h2>{frontmatter.title}</h2>
          <h5>by {frontmatter.author}</h5>
          <h6>date: {frontmatter.date}</h6>
        </header>
        {children}
      </article>
  )
}

export default BlogPostLayout
