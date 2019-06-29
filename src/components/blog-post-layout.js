import React from 'react'

const BlogPostLayout = ({ children, frontmatter }) => {
  console.log('frontmatter in BlogPostLayout', frontmatter)
  // const { title, author, date } = null
  return (
      <article>
        <header>
          <h2>{frontmatter.title}</h2>
          <h5>by {frontmatter.author} <small>(date: {frontmatter.date})</small></h5>
        </header>
        {children}
      </article>
  )
}

export default BlogPostLayout
