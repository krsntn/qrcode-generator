import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import Loading from 'components/loading';

const QRCodeImage = (props) => {
  const [src, setSrc] = useState(null);
  const { data, defaultData, loading } = props;

  useEffect(() => {
    QRCode.toDataURL(data || defaultData, { width: 500, margin: 2 })
      .then((url) => {
        setSrc(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  return (
    <div className="text-center position-relative">
      <img src={src}></img>
      {loading && <Loading />}
    </div>
  );
};

export default React.memo(QRCodeImage);
