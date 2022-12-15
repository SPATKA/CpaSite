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
            <a href="/services/business-services/part-time-cfo-services">
              Part-Time CFO Services
            </a>
          </li>
          <li>
            <a href="/services/business-services/audits-reviews-compilations">
              Audits - Reviews - Compilations
            </a>
          </li>
          <li>
            <a href="/services/business-services/forensic-accounting">
              Forensic Accounting
            </a>
          </li>
          <li>
            <a href="/services/business-services/cash-flow-management">
              Cash Flow Management
            </a>
          </li>
          <li>
            <a href="/services/business-services/bank-financing">
              Bank Financing
            </a>
          </li>
          <li>
            <a href="/services/business-services/business-valuation">
              Business Valuation
            </a>
          </li>
          <li>
            <a href="/services/business-services/business-advisory-services">
              Business Advisory Services
            </a>
          </li>
          <li>
            <a href="/services/business-services/financial-planning-for-businesses">
              Financial Planning for Businesses
            </a>
          </li>
          <li>
            <a href="/services/business-services/succession-planning">
              Succession Planning
            </a>
          </li>
          <li>
            <a href="/services/business-services/new-business-formation">
              New Business Formation
            </a>
          </li>
          <li>
            <a href="/services/business-services/non-profit-organizations">
              Non-Profit Organizations
            </a>
          </li>
          <li>
            <a href="/services/business-services/internal-controls">
              Internal Controls
            </a>
          </li>
          <li>
            <a href="/services/business-services/litigation-support">
              Litigation Support
            </a>
          </li>
        </ul>
      </>
    )
  )
}

export default BusinessServicesMDX
