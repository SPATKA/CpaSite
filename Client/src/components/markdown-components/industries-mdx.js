import React from "react"
const config = require("../../../site-config")

const IndustriesMDX = () => {
  return (
    config.industriesToggle && (
      <>
        <h2>
          <a href="services/industries">Industries</a>
        </h2>
        <p>
          Our specialized knowledge has helped many professionals thrive, and
          we're ready to help you too.
        </p>
        <ul>
          <li>
            <a href="/services/industries/construction">Construction</a>
          </li>
          <li>
            <a href="/services/industries/dentists">Dentists</a>
          </li>
          <li>
            <a href="/services/industries/healthcare">Healthcare</a>
          </li>
          <li>
            <a href="/services/industries/hospitality">Hospitality</a>
          </li>
          <li>
            <a href="/services/industries/law-firms">Law Firms</a>
          </li>
          <li>
            <a href="/services/industries/manufacturers">Manufacturers</a>
          </li>
          <li>
            <a href="/services/industries/real-estate">Real Estate</a>
          </li>
        </ul>
      </>
    )
  )
}

export default IndustriesMDX
