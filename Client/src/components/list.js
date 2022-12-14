import * as React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faFeed,
  faEnvelope,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons"
import Offcanvas from "react-bootstrap/Offcanvas"
import Sidebar from "./Sidebar"
import CallLink from "./callLink"
const config = require('../../site-config');

const List = ({ menuLinks, onNlshow }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <a className="flex-grow-1 text-center icon-color" href={config.secureSendUrl}>
          <FontAwesomeIcon icon={faLock} size="sm"></FontAwesomeIcon>
        </a>
        {config.newsletterFeatureToggle && (<span className="flex-grow-1 text-center icon-color" onClick={onNlshow}>
          <FontAwesomeIcon icon={faFeed} size="sm"></FontAwesomeIcon>
        </span>)}
        <a
          className="flex-grow-1 text-center icon-color"
          href="mailto:Kartiki@knaikassociates.com"
        >
          <FontAwesomeIcon icon={faEnvelope} size="sm"></FontAwesomeIcon>
        </a>
        <CallLink icon={true} className="flex-grow-1 text-center icon-color" />
        <span
          className="flex-grow-1 text-center icon-color"
          onClick={handleShow}
        >
          <FontAwesomeIcon data-testid="fa-icon-menu" icon={faNavicon} size="sm"></FontAwesomeIcon>
        </span>
      </div>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement={"end"} backdrop={true} responsive="lg">
        <Offcanvas.Header className="d-lg-none" closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0 d-lg-none">
          <Sidebar items={menuLinks} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default List
