import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

function QrcodeGen() {
    const [text, setText] = useState('');
    const qrCodeRef = useRef(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSaveImage = () => {
        const canvas = qrCodeRef.current.querySelector('canvas');
        const image = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'qrcode.jpg';
        link.click();

    };

    return (
        <div>
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleSaveImage}>Save QR Code</button>
            <div ref={qrCodeRef}>
                <QRCode value={text} renderAs={'canvas'}/>
            </div>
        </div>
    );
}

export default QrcodeGen;