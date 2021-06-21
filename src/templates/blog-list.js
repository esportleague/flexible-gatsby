import React from 'react'
import { Link, graphql } from 'gatsby'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <DefaultLayout>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          return (
            <article className="post" key={node.fields.slug}>
              {node.frontmatter.img &&
                node.frontmatter.img.childImageSharp &&
                node.frontmatter.img.childImageSharp.fluid && (
                  <Link
                    to={node.fields.slug}
                    className="post-thumbnail"
                    style={{
                      backgroundImage: `url(${node.frontmatter.img.childImageSharp.fluid.src})`,
                    }}
                  />
                )}
              <div className="post-content">
                <h2 className="post-title">
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.excerpt}</p>
                <span className="post-date">
                  {node.frontmatter.date}&nbsp;&nbsp;—&nbsp;
                </span>
                <span className="post-words">
                 
                </span>
              </div>
            </article>
          )
        })}

        <div className="container">
          <nav className="pagination" role="pagination">
            <ul>
              {!isFirst && (
                <p>
                  <Link to={prevPage} rel="prev" className="newer-posts">
                    ← Previous Page
                  </Link>
                </p>
              )}
              <p>
                <span className="page-number">
                  Page {currentPage} of {numPages}
                </span>
              </p>
              {!isLast && (
                <p>
                  <Link to={nextPage} rel="next" className="older-posts">
                    Next Page →
                  </Link>
                </p>

              )}
            </ul>
advertisement: 
<p> A website like <a href="https://casinobonus2.co">www.casinobonus2.co</a> will provide you with the highest quality in the industry.
 <a href="https://www.sattaking-online.in" target="_blank">www.sattaking-online.in</a> </p> , <a href="https://www.ufascr.win" target="_blank">ufabet</a>,
<a href="https://gangmanga.com" target="_blank">&#3629;&#3656;&#3634;&#3609;&#3585;&#3634;&#3619;&#3660;&#3605;&#3641;&#3609;</a>
          </nav>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "YYYY, MMM DD")
            title
            img {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
