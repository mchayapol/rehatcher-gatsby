import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import {
  BlogCard,
  BlogCardContent,
  BlogTitle,
  BlogP,
  BlogDate,
  BlogButton,
  BlogContainer,
  BlogWrapper,
} from "../styles/BlogStyles"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  console.log(posts)
  const { currentPage, numPages } = pageContext
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()

  const all = posts.map(markdownRemark => {
    const { date, slug, title, blurb, featuredImage } =
      markdownRemark.frontmatter

    return (
      // <div className="flex w-full grid-cols-2 gap-4 md:grid-cols-1">
      //   <div className="flex flex-col w-full max-w-full">
      //     <h2 className="not-italic font-bold text-2xl mb-2 no-underline">
      //       {title}
      //     </h2>
      //     <p className="not-italic font-normal text-lg mt-2 tracking-tight">{blurb}</p>
      //     <p className="not-italic font-normal text-lg mt-2 tracking-tight>{date}</p>

      //   </div>
      // </div>
      <BlogCard>
        <BlogCardContent>
          <BlogTitle>{title}</BlogTitle>
          <BlogP>{blurb}</BlogP>
          <BlogDate>{date}</BlogDate>
          <BlogButton to={slug}>Read More</BlogButton>
        </BlogCardContent>
        {featuredImage && (
          <BlogCardContent>
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
              alt={title}
              objectFit={"contain"}
              style={{ height: "500px", width: "500px" }}
            />
          </BlogCardContent>
        )}
      </BlogCard>
    )
  })

  return (
    <>
      <Layout>
        <div class="relative py-16" id="blog">
          <h1 className="text-5xl text-center not-italic font-normal">Blogs</h1>
          <div className="grid justify-center flex-col grid-cols-1 gap-4 px-52 py-12">
            {all}
          </div>
          {/* <BlogWrapper>{all}</BlogWrapper> */}
        </div>
        <div className="text-center items-center">
          {currentPage > 1 && (
            <Link to={prevPage} rel="prev">
              Previous Page
            </Link>
          )}

          {currentPage < numPages && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { ne: "course" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
            blurb
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
