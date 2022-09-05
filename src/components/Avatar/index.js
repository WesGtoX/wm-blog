import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Avatar = () => {
  return (
    <StaticImage
      src="../../images/profile-photo.jpg"
      alt="Profile Photo"
      placeholder="blurred"
    />
  )
}

export default Avatar
