import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Heading from "../components/heading"
import Breadcrumb from "../components/breadcrumb"
import { Container } from "react-bootstrap"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ContactUsModel from "../components/contact-us-modal"
import FormPage from "../components/formPage"

const Page = ({ data }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Layout>
      <Breadcrumb crumbs={data.mdx.frontmatter.url.split("/")}></Breadcrumb>
      <Heading title={data.mdx.frontmatter.title} />
      <Container className="position-relative">
        <div className="row my-5">
          <div className="col-lg-7">
            {" "}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {data.mdx.frontmatter.useForm && (
              <FormPage />
            )}
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="text-center position-sticky top-0">
              <StaticImage
                className="mx-auto mb-1"
                src="../../static/owner-ph.png"
                alt="owner-1"
                width={260}
                height={400}
              />
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setModalShow(true)}
              >
                Schedule a Consultation
              </button>
              <ContactUsModel
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        url
        useForm
      }
      body
    }
  }
`

export default Page

export const Head = ({ data }) => (
  <Seo title={"K Naik Associates | " + data.mdx.frontmatter.title} />
)
