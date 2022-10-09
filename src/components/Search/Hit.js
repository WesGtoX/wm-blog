import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    category={hit.category}
    timeToRead={hit.timeToRead}
    date={hit.date}
    title={hit.title}
    description={hit.description}
  />
)

export default Hit
