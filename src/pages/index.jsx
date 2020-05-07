import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import Meta from 'components/meta';
import Layout from 'components/layout';
import QRCodeImage from 'components/qrcodeImage';
import InputForm from 'components/inputForm';

let timer = null;

const Index = ({ data, location }) => {
  const [qrCodeValue, setQrCodeValue] = useState(null);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    clearTimeout(timer);
    setTyping(true);
    timer = setTimeout(() => {
      setQrCodeValue(input);
      setTyping(false);
    }, 700);
  }, [input]);

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container mt-4 mb-4">
        <InputForm input={input} setInput={setInput} />
        <QRCodeImage
          data={qrCodeValue}
          defaultData={get(data, 'site.meta.url')}
          loading={typing}
        />
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        url: profileUrl
        author
      }
    }
  }
`;
