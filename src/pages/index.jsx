import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { get, isEmpty } from 'lodash';
import queryString from 'query-string';
import Meta from 'components/meta';
import Layout from 'components/layout';
import QRCodeImage from 'components/qrcodeImage';
import InputForm from 'components/inputForm';

let timer = null;

const Index = ({ data, location, navigate }) => {
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

    if (input) {
      navigate(`?text=${input}`);
    } else {
      navigate('');
    }
  }, [input]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    if (!isEmpty(params) && params.text) {
      setInput(params.text);
    }
  }, []);

  return (
    <Layout location={location} data={get(data, 'site.meta')}>
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
        url: siteUrl
        profileUrl
        author
      }
    }
  }
`;
