'use client'
import Script from 'next/script';

const CrmContact = () => (
  <>
   <div
                                    className="npf_wgts"
                                    data-height="400px"
                                    data-w="b00e4d9fb90f9c541a19a64a96b5752e"
                                />
                                <Script
                                    src={`https://widgets.in6.nopaperforms.com/emwgts.js?v=${Date.now()}`}
                                    strategy="lazyOnload"
                                    onLoad={() => {
                                        // Force script to reinitialize
                                        if (window.npfWidgetsInit && typeof window.npfWidgetsInit === 'function') {
                                            window.npfWidgetsInit();
                                        }
                                    }}
                                />
  </>
);

export default CrmContact;
