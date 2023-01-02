import React from "react"
const config = require("../../../site-config")

const BusinessServicesMDX = () => {
  return (
    config.businessServicesToggle && (
      <>
        <h2>
          <a href="services/business-services">Business Services</a>
        </h2>
        <p>We are here to help your business succeed.</p>
        <ul>
          <li>
            <a href="/services/business-services/small-business-accounting">
              Small Business Accounting
            </a>
          </li>
          <li>
            <a href="/services/business-services/book-keeping-services">
              Bookkeeping Services
            </a>
          </li>
          <li>
            <a href="/services/business-services/payroll">Payroll</a>
          </li>
          <li>
            <a href="/services/business-services/new-business-formation">
              New Business Formation
            </a>
          </li>
        </ul>
      </>
    )
  )
}

export default BusinessServicesMDX
