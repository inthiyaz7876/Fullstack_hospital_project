import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function AvailableStaff({ staffData }) {
  return (
    <ListGroup as="ol" numbered>
      {staffData.map((item) => (
        <ListGroup.Item as="li">{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default AvailableStaff;
