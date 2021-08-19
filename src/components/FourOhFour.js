import React from 'react';

const FourOhFour = () => {
  return (
    <div
      id="error"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1030b7',
        height: '100vh',
      }}
    >
      <h1
        style={{
          background: '#b7b7b7',
          color: '#1030b7',
          width: 'min-content',
        }}
      >
        404
      </h1>
    </div>
  );
};

export default FourOhFour;
