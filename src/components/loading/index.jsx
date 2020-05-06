import React from 'react';

const Loading = (props) => {
  return (
    <div
      className="position-absolute"
      style={{
        height: '100%',
        width: '100%',
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
        {/* <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div> */}
      </div>
    </div>
  );
};

export default Loading;
