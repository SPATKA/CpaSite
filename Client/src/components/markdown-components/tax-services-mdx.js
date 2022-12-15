import React from "react"
const config = require("../../../site-config")

const TaxServicesMDX = () => {
  return (
    config.taxServicesToggle && (
      <>
        <h2>
          <a href="services/tax-services">Tax Services</a>
        </h2>
        <p>Comprehensive tax services that maximize deductions and credits.</p>
        <ul>
          <li>
            <a href="/services/tax-services/individual-tax-preparation">
              Individual Tax Preparation
            </a>
          </li>
          <li>
            <a href="/services/tax-services/tax-preparation-for-business">
              Tax Preparation for Businesses
            </a>
          </li>
          <li>
            <a href="/services/tax-services/tax-planning">Tax Planning</a>
          </li>
          <li>
            <a href="/services/tax-services/estate-trust-tax-services">
              Estate &amp; Trust Tax Services
            </a>
          </li>
          <li>
            <a href="/services/tax-services/tax-relief">Tax Relief</a>
            <ul>
              <li>
                <a href="/services/tax-services/tax-relief/irs-audit-representation">
                  IRS Audit Representation
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/non-filed-tax-returns">
                  Non-Filed Tax Returns
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/back-taxes-owed">
                  Back Taxes Owed
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/payroll-tax-problems">
                  Payroll Tax Problems
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/irs-liens">
                  IRS Liens
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/irs-levies">
                  IRS Levies
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/irs-wage-garnishmentt">
                  IRS Wage Garnishment
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/irs-seizures">
                  IRS Seizures
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/irs-payment-plan">
                  IRS Payment Plan
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/offer-in-compromise">
                  Offer In Compromise
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/bankruptcy">
                  Bankruptcy
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/innocent-spouse-relief">
                  Innocent Spouse Relief
                </a>
              </li>
              <li>
                <a href="/services/tax-services/tax-relief/get-your-IRS-file">
                  Get Your IRS File
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </>
    )
  )
}

export default TaxServicesMDX
