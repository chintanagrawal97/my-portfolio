import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FooterWrapper } from "../elements/FooterElements"
import { FooterSocialWrapper } from "../elements/FooterElements"
import { FooterSocialIcons } from "../elements/FooterElements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        facebook: file(relativePath: { eq: "footer-icon/facebook.svg" }) {
          publicURL
        }
        linkedin: file(relativePath: { eq: "footer-icon/linkedin.svg" }) {
          publicURL
        }
        instagram: file(relativePath: { eq: "footer-icon/instagram.svg" }) {
          publicURL
        }
        twitter: file(relativePath: { eq: "footer-icon/twitter.svg" }) {
          publicURL
        }
      }
    `)
  
    return (
      <FooterWrapper>
        <FooterSocialWrapper>
          <FooterSocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.facebook.publicURL} alt="Facebook logo" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.linkedin.publicURL} alt="Linkedin logo" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.twitter.publicURL} alt="Twitter logo" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.instagram.publicURL} alt="Instagram logo" />
            </a>
          </FooterSocialIcons>
          {/* <P size="xSmall" color="dark3">
            © 2020 Company. All right reserved.
          </P> */}
        </FooterSocialWrapper>
      </FooterWrapper>
    )
  }
  
  export default Footer