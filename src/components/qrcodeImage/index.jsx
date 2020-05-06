import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import Loading from 'components/loading';

const QRCodeImage = (props) => {
  const [src, setSrc] = useState(null);
  const { data, defaultData, loading } = props;

  useEffect(() => {
    QRCode.toDataURL(data || defaultData, { quality: 1, margin: 1 })
      .then((url) => {
        setSrc(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  return (
    <div className="d-flex justify-content-center position-relative">
      <img src={src} style={{ width: '500px', maxWidth: '100%' }}></img>
      {loading && <Loading />}
    </div>
  );
};

export default React.memo(QRCodeImage);
