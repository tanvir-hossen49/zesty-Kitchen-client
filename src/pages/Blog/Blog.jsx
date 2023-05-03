/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-4">
      <div>
        <caption className="text-nowrap fs-3">
          1{")"}Differences between uncontrolled and controlled components
        </caption>
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
        <h2 className="fs-3 text-secondary fw-normal">
          2{")"}Validate React props using PropTypes
        </h2>
      </div>
    </Container>
  );
};

export default Blog;
