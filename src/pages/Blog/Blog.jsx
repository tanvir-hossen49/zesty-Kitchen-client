/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Table } from "react-bootstrap";
import "../../styles/blog.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <>
      <Pdf targetRef={ref}>
        {({ toPdf }) => (
          <button onClick={toPdf} className="button text-center ms-5">
            Click TO download
            <span className="fs-3 ms-2">
              <FaCloudDownloadAlt />
            </span>
          </button>
        )}
      </Pdf>

      <Container ref={ref} className="mt-4">
        <div>
          <h2 className="blog-heading">
            1{")"}Differences between uncontrolled and controlled components
          </h2>
          <Table striped bordered hover variant="light" className="w-100">
            <thead>
              <tr>
                <th>Controlled Components</th>
                <th>Uncontrolled Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State of the component is managed by React</td>
                <td>State of the component is managed by the DOM</td>
              </tr>
              <tr>
                <td>
                  The value of the input is set by the state, and changes to the
                  input trigger a change in state
                </td>
                <td>
                  The value of the input is set by the defaultValue or
                  defaultChecked prop, and changes to the input do not trigger a
                  change in state
                </td>
              </tr>
              <tr>
                <td>
                  Input values are accessed via state and changed with setState
                </td>
                <td>
                  via state and changed with setState Input values are accessed
                  via the DOM and changed with event listeners
                </td>
              </tr>
              <tr>
                <td>
                  Suitable for forms with complex validation or dynamic input
                  requirements
                </td>
                <td>
                  Suitable for simple forms or when you want to avoid writing
                  additional code to manage form state
                </td>
              </tr>
              <tr>
                <td>
                  Can be more verbose and require additional code to manage form
                  state
                </td>
                <td>
                  Can be less verbose and require less code to manage form state
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-3">
          <h2 className="blog-heading">
            2{")"}How to validate React props using PropTypes
          </h2>

          <p>
            React provides a package called prop-types that allows you to
            validate the props passed to a React component. The prop-types
            package provides a set of validators that you can use to specify the
            type and shape of the props that your component expects.
          </p>
          <ul>
            <li>
              <span>PropTypes.any :</span> The prop can be of any data type.
            </li>
            <li>
              <span>PropTypes.bool :</span> The prop should be a Boolean.
            </li>
            <li>
              <span> PropTypes.number :</span> The prop should be a number.
            </li>
            <li>
              <span> PropTypes.string :</span> The prop should be a string.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="blog-heading">
            3{")"}Differences between nodejs and express js
          </h2>
          <Table striped bordered hover variant="light" className="w-100">
            <thead>
              <tr>
                <th>Node.js </th>
                <th>Express.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  A runtime environment for executing JavaScript code outside of
                  a web browser
                </td>
                <td>
                  A web framework for building web applications on top of
                  Node.js
                </td>
              </tr>
              <tr>
                <td>
                  Provides core functionality for building server-side
                  applications, such as file system operations and network
                  communication
                </td>
                <td>
                  Provides a set of features and tools for building web
                  applications, such as routing and middleware
                </td>
              </tr>
              <tr>
                <td>
                  Can be used to build a variety of applications, including
                  servers, command-line tools, and desktop applications
                </td>
                <td>Primarily used for building web applications and APIs</td>
              </tr>
              <tr>
                <td>
                  Low-level and requires more coding to build applications
                </td>
                <td>
                  Higher-level and provides a simpler and more efficient way to
                  build web applications
                </td>
              </tr>
              <tr>
                <td>
                  Does not provide built-in support for handling HTTP requests
                  and responses
                </td>
                <td>
                  Provides built-in support for handling HTTP requests and
                  responses
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-3">
          <h2 className="blog-heading">
            4{")"}What is a custom hook, and why will you create a custom hook?
          </h2>

          <p>
            In React, a custom hook is a JavaScript function that starts with
            the prefix {"use"} and can contain any React hook, as well as any
            other logic you might need to reuse across multiple components.
            Custom hooks allow you to extract and reuse component logic without
            duplicating code, making it easier to manage and maintain your
            codebase.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Blog;
