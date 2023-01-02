import React from "react"
import renderer from "react-test-renderer"
import Layout from "../layout"
import Header from "../header"
import Footer from "../footer"
import TestRenderer from "react-test-renderer"
import * as Gatsby from "gatsby"

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: `KNaik Associates`,
      menuLinks: [],
    },
  }
}

describe("Layout", () => {

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should renders `Header` & `Footer' components", () => {
    useStaticQuery.mockReturnValueOnce({
      site: {
        siteMetadata: {
          title: `KNaik Associates`,
          menuLinks: [],
        },
      },
    })

    const testRenderer = TestRenderer.create(<Layout />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Header)).toBeTruthy()
    expect(testInstance.findByType(Footer)).toBeTruthy()
  })
})
