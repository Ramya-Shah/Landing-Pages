import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import Script from 'next/script';

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
    title: "M-Tech ICT - Dhirubhai Ambani University",
    description: "MTech ICT program at Dhirubhai Ambani University",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ContactFormProvider>
            <html lang="en">
                <head>
                    {/* Meta Pixel Code */}
                    <Script strategy="afterInteractive" id="facebook-pixel">
                        {`
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1014963587394955');
                            fbq('track', 'PageView');
                        `}
                    </Script>
                    <noscript>
                        <img 
                            height="1" 
                            width="1" 
                            style={{ display: 'none' }}
                            src="https://www.facebook.com/tr?id=1014963587394955&ev=PageView&noscript=1"
                            alt=""
                        />
                    </noscript>
                    {/* End Meta Pixel Code */}
                </head>
                <body className={dmSans.className} suppressHydrationWarning>
                    {children}
                </body>
            </html>
        </ContactFormProvider>
    );
}
