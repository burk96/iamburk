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
        flex: '1',
        flexDirection: 'column',
        fontFamily: 'monospace',
      }}
    >
      <h1
        style={{
          background: '#b7b7b7',
          color: '#1030b7',
          width: 'min-content',
          fontSize: '3rem',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'ms-sans-serif',
          fonstSize: '3rem',
          color: 'white',
        }}
      >
        A fatal error has occurred: file not found
      </p>
    </div>
  );
};

export default FourOhFour;
