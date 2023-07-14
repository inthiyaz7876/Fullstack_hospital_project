import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResponsiveExample({ data }) {
  const headers = data.headers;
  const tableContent = data.data;
  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((item, index) => (
          <tr>
            <td key={index}>{item.one}</td>
            <td key={index}>{item.two}</td>
            <td key={index}>{item.three}</td>
            <td key={index}>{item.four}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
