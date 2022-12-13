import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            url
            subLinks {
              name
              url
              subLinks {
                name
                url
                subLinks {
                  name
                  url
                }
              }
            }
          }
          secureSendUrl
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header
        companyName={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        secureSendUrl={data.site.siteMetadata.secureSendUrl}
      />
      <main>{children}</main>
      <Footer
        companyName={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        secureSendUrl={data.site.siteMetadata.secureSendUrl}
      />
    </React.Fragment>
  )
}

export default Layout
