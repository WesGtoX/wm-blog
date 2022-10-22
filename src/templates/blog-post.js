import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
  ButtonBack,
} from "../styles/base"

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <PostHeader>
        <ButtonBack to="/" cover direction="left" duration={0.8}>
          ← Voltar na listagem
        </ButtonBack>

        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>

      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </MainContent>

      <RecommendedPosts next={next} previous={previous} />

      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const Head = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.image}
    />
  )
}

export default BlogPost
