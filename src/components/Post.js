import React from "react"
import { PostWrapper } from "../elements"
import Layout from '../components/Layout'
export const Post = ({ children }) => {
  return <Layout><PostWrapper>{children}</PostWrapper></Layout>
}
