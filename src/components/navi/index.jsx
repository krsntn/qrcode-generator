import React from 'react';

class Navi extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row">
        <div className="container d-flex justify-content-center">
          <h2 className="mb-0 text-primary font-weight-normal text-lowercase">
            {title}
          </h2>
        </div>
      </nav>
    );
  }
}

export default Navi;
