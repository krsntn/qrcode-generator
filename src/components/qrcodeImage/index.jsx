import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import Loading from 'components/loading';
import './style.scss';

const QRCodeImage = (props) => {
  const [src, setSrc] = useState(null);
  const { data, defaultData, loading } = props;

  useEffect(() => {
    QRCode.toDataURL(data || defaultData, { width: 300, margin: 2 })
      .then((url) => {
        setSrc(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  return (
    <div className="wrapper bg-light p-5 text-center position-relative">
      <img className="m-0" src={src}></img>
      {loading && <Loading />}
    </div>
  );
};

export default React.memo(QRCodeImage);
