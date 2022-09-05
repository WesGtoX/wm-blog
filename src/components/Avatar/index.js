import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 60, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    `,
  )

  return <GatsbyImage image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar
