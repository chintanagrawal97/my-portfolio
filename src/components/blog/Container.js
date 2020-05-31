import React from "react"
import { ContainerWrapper } from "../../elements/ContainerElement"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}
