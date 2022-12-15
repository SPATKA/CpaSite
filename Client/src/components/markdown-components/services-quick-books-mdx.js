import React from "react"
const config = require("../../../site-config")

const ServicesQuickBooksMDX = () => {
  return (
    config.servicesForQuickBooksToggle && (
      <>
        <h2>
          <a href="/services/services-for-quick-books">
            Services for QuickBooks
          </a>
        </h2>
        <p>
          QuickBooks is the ideal business accounting software for small to
          mid-sized business owners.
        </p>
        <ul>
          <li>
            <a href="/services/services-for-quick-books/why-quick-books">
              Why QuickBooks
            </a>
          </li>
          <li>
            <a href="/services/services-for-quick-books/setup-quick-books">
              Setup for QuickBooks
            </a>
          </li>
          <li>
            <a href="/services/services-for-quick-books/training-quick-books">
              Training for QuickBooks
            </a>
          </li>
          <li>
            <a href="/services/services-for-quick-books/answers-to-quick-books">
              Answers to QuickBooks Questions
            </a>
          </li>
          <li>
            <a href="/services/services-for-quick-books/tune-up-quick-books">
              Tune-up for QuickBooks
            </a>
          </li>
          <li>
            <a href="/services/services-for-quick-books/tips-quick-books">
              Tips for QuickBooks Users
            </a>
          </li>
        </ul>
      </>
    )
  )
}

export default ServicesQuickBooksMDX
