'use client';

import Script from 'next/script';
import React from 'react';

const Popup: React.FC = () => (
  <>
    <div
      className="npf_wgts"
      data-height="400px"
      data-w="b00e4d9fb90f9c541a19a64a96b5752e"
    />
    <Script
      id="nopaperforms-widget"
      src="https://widgets.in6.nopaperforms.com/emwgts.js"
      strategy="afterInteractive"
    />
  </>
);

export default Popup;
