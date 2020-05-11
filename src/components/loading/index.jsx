import React from 'react';

const Loading = (props) => {
  return (
    <div
      className="position-absolute"
      style={{
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
      }}
    >
      <div
        className="position-absolute"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <button
          className="btn btn-primary btn-lg"
          type="button"
          style={{ opacity: '1', cursor: 'default' }}
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Loading...</span>
        </button>
      </div>
    </div>
  );
};

export default Loading;
