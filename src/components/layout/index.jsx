import React from 'react';
import emergence from 'emergence.js';

import Navi from 'components/navi';
import Footer from 'components/footer';
import { siteMetadata } from '../../../gatsby-config';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

class Layout extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  render() {
    const { data, children } = this.props;
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer url={data.profileUrl} author={data.author} />
      </div>
    );
  }
}

export default Layout;
