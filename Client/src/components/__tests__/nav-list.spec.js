import React from "react"
import renderer from "react-test-renderer"
import NavList from "../nav-list"
import { render } from "@testing-library/react"
const config = require('../../../site-config');
config.taxServicesToggle = true;

describe("NavList", () => {
  const menuLinks = [
    {
      name: "Services",
      url: "/services",
      subLinks: [
        {
          name: "Tax Services",
          url: "/tax-services",
          isHidden: !config.taxServicesToggle,
          subLinks: [
            {
              name: "Tax Relief",
              url: "/tax-relief",
              isHidden: false,
              subLinks: [
                {
                  name: "IRS Audit Representation",
                  url: "/irs-audit-representation",
                  isHidden: false,
                  subLinks: [],
                },
              ]
            }
          ]
        }
      ],
    },
  ]


  it("renders correctly", () => {
    const tree = renderer
      .create(<NavList menuLinks={menuLinks}></NavList>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test.skip("should render given navigation list" , () => {
    const { getByText } = render(<NavList menuLinks={menuLinks}></NavList>)
    const servicesLink = getByText("Services")
    expect(servicesLink).toBeInTheDocument()
  })
})
