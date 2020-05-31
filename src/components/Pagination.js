import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  
  console.log(nextPage)
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={`/blog/${prevPage}`}>Previous Page</PaginationElement>
      <PaginationElement to={`/blog/${nextPage}`}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}
