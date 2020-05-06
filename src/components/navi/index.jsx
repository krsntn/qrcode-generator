import React from 'react';

class Navi extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <h1 className="navbar-brand mb-0">{title}</h1>
        </div>
      </nav>
    );
  }
}

export default Navi;
