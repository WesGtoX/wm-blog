import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../../static/assets/img/profile-photo.jpg"
        alt="Profile Photo"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
