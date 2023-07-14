import React from 'react';
import ReactButton from './Button';

function LeftContainer({ leftData, onClick, color, classText }) {
  return (
    <>
      <ReactButton
        onClick={onClick}
        classText={classText}
        variant={color}
        ButtonName={leftData}
      />
    </>
  );
}

export default LeftContainer;
