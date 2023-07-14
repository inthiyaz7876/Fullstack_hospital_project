import React from 'react';
import Button from 'react-bootstrap/Button';

function ReactButton({ ButtonName, onClick, variant, classText }) {
  return (
    <>
      <Button
        className={classText}
        name={ButtonName}
        variant={variant}
        onClick={onClick}
      >
        {ButtonName}
      </Button>
    </>
  );
}

export default ReactButton;
