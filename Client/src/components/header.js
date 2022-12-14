import * as React from "react"
import { useState } from "react"
import NavList from "./nav-list"
import { Container } from "react-bootstrap"
import List from "./list"
import NewsletterModal from "./newsletter-modal"
import CallLink from "./callLink"
import { StaticImage } from "gatsby-plugin-image"

const config = require('../../site-config');

const Header = ({ menuLinks }) => {
  const [newsletterModal, setNewsletterModal] = useState(false)
  const linksObj = JSON.parse(JSON.stringify(menuLinks))
  const links = [...linksObj.map(i => {
    if (i.subLinks && i.subLinks.length) {
      i.subLinks = i.subLinks.map(j => {
        j.subLinks = j.subLinks.map(k => {
          k.subLinks = k.subLinks.map(l => {
            return { ...l, url: i.url + j.url + k.url + l.url };
          })
          return { ...k, url: i.url + j.url + k.url }
        })
        return { ...j, url: i.url + j.url }
      })
    }
    return { ...i }
  })]

  return (
    <React.Fragment>
      <List
        nlShow={newsletterModal}
        onNlshow={() => setNewsletterModal(true)}
        menuLinks={links}
      ></List>
      <Container className="d-none d-lg-flex justify-content-lg-between py-2">
        <div>
          <a href={config.secureSendUrl}>
            <button className="btn btn-default btn-sm">Login</button>
          </a>
          {config.newsletterFeatureToggle && (
            <button className="btn btn-primary btn-sm" onClick={() => setNewsletterModal(true)}>Subscribe</button>
          )}
          <NewsletterModal
            show={newsletterModal}
            onHide={() => setNewsletterModal(false)}
          />
        </div>
        <h3 className="strong lead">
          Call Us: <CallLink />
        </h3>
      </Container>
      <Container className="d-flex justify-content-center justify-content-lg-between py-2">
        <StaticImage
          src="../../static/Knaik-logo.png"
          alt="Knaik-logo"
          width={256}
          height={64}
        />
        <div className="d-none d-lg-flex my-auto">
          <NavList menuLinks={menuLinks}></NavList>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Header