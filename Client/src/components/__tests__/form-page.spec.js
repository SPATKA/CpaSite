import React from "react"
import renderer from "react-test-renderer"
import FormPage from "../formPage"
import { render, fireEvent } from "@testing-library/react";
// import * as utils from '@utils'

// utils.fetch = jest.fn().mockResolvedValue({
//   statusCode: 200,
//   body: JSON.stringify({
//     message: 'Mail sent successfully'
//   }),
// })
require('jest-fetch-mock').enableMocks()
fetchMock.dontMock()

describe("FormPage", () => {

  beforeEach(() => {
    
    fetchMock.mockIf(/^https?:\/\/3ct3mrc87g.execute-api.us-east-1.amazonaws.com.*$/,async req => {
      if (req.url.endsWith("/dev/sendMail")) {
        return Promise.resolve({
          statusCode: 200,
          body: JSON.stringify({
            message: 'Mail sent successfully'
          }),
        })
      } else {
        return {
          status: 404,
          body: "Not Found"
        }
      }
    })
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(<FormPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("if no data inserted in form on submit then should display correct error message", () => {
    const { getByTestId, findByText } = render(<FormPage />);

    getByTestId("submit");

    fireEvent.click(getByTestId("submit"));

    findByText("Name is required.");
    findByText("Phone number is required.");
    findByText("Email address is required.");
  });

  test.skip("if valid data inserted in form then on submit should display message 'detail submited successfully", () => {
    const { getByTestId } = render(<FormPage />);

    getByTestId("submit");

    fireEvent.input(getByTestId("name"), {
      target: {
        value: 'testName'
      }
    });
    fireEvent.input(getByTestId("email"), {
      target: {
        value: 'test@mail.com'
      }
    });
    fireEvent.input(getByTestId("phone"), {
      target: {
        value: '9876543210'
      }
    });

    fireEvent.click(getByTestId("submit"))

    // await expect(getByTestId("submit-success")).toBeInTheDocument()
    expect(fetch).resolves.toBe({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Mail sent successfully'
      })
    })
  });

  test.skip("on reset should reset the form value", () => {
    const { getByTestId, findByText } = render(<FormPage />);

    fireEvent.click(getByTestId("submit"));

    findByText("Name is required.");
    findByText("Phone number is required.");
    findByText("Email address is required.");

    fireEvent.click(getByTestId("reset"));

    expect(fireEvent.input(getByTestId("name")).valueOf()).toBe(true)
  });
});
