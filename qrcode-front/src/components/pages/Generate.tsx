import styles from "./Generate.module.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Generate() {
  const [qrcodeLink, setQrcodeLink] = useState("");
  const location = useLocation();
  const name = location.state.name;
  const path = location.state.path;
  const url = `http://localhost:3000/${path}`;

  function handleGenerate() {
    const link_url = url;
    QRCodeLink.toDataURL(
      link_url,
      { width: 600, margin: 3 },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  return (
    <div className={styles.generate}>
      <p>
        <span className={styles.name}>{name}</span>
      </p>
      <p>
        <span className={styles.scan}>Scan Me</span>
      </p>
      <QRCode className={styles.qrcode} value={url} />
      <a href={qrcodeLink} onClick={handleGenerate} download={`qrcode.png`}>
        Download QR Code
      </a>
    </div>
  );
}

export default Generate;
