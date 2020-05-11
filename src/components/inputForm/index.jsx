import React from 'react';

const InputForm = (props) => {
  const { input, setInput } = props;

  const onInputChange = (evt) => {
    setInput(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="input"
          placeholder="Enter text"
          onChange={onInputChange}
          value={input}
        />
        <small className="form-text text-muted">
          We'll never collect any information you fill in.
        </small>
      </div>
    </form>
  );
};

export default InputForm;
