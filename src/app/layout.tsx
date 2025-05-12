import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import FloatingApplyButton from "@/components/FloatingApplyButton";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1014963587394955');
            fbq('track', 'PageView');`}
          </Script>

          <Script strategy="afterInteractive" id="clarity-script">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/ributx3rdu";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ributx3rdu");`}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1014963587394955&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {/* End Meta Pixel Code */}

          {/* Google Global Site Tag (gtag.js) */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-409706307"
            strategy="afterInteractive"
            id="gtag-js"
          />
          <Script strategy="afterInteractive" id="gtag-init">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}  
            gtag('js', new Date());
            gtag('config', 'AW-409706307');`}
          </Script>
        </head>
        <body className={dmSans.className} suppressHydrationWarning>
          {children}

          {/* Google Ads & GA4 Event Snippets */}
          <Script strategy="afterInteractive" id="gtag-event-conversion">
            {`gtag('event', 'conversion', {'send_to': 'AW-409706307/XlyRCNiHmJoYEMO-rsMB'});`}
          </Script>

          <Script strategy="afterInteractive" id="gtag-event-program-apply-now">
            {`gtag('event', 'program_apply_now', {
              // <event_parameters>
            });`}
          </Script>

          <Script
            strategy="afterInteractive"
            id="gtag-event-application-registration-page"
          >
            {`gtag('event', 'application_registration_page', {
              // <event_parameters>
            });`}
          </Script>

          <Script
            strategy="afterInteractive"
            id="gtag-event-final-registration-submission"
          >
            {`gtag('event', 'final_registration_submission', {
              // <event_parameters>
            });`}
          </Script>

          <Script
            strategy="afterInteractive"
            id="gtag-event-ga4-phd-submit-lead"
          >
            {`gtag('event', 'GA4 Event - PHD - Submit Lead Form', {
              // <event_parameters>
            });`}
          </Script>

          <Script
            strategy="afterInteractive"
            id="gtag-event-ga4-btech-submit-lead"
          >
            {`gtag('event', 'GA4 Event - B.Tech - Submit Lead Form', {
              // <event_parameters>
            });`}
          </Script>

          <Script
            strategy="afterInteractive"
            id="gtag-event-registration-submit-website"
          >
            {`gtag('event', 'Registration Submit - Website Event', {
              // <event_parameters>
            });`}
          </Script>

          <FloatingApplyButton />
          <Analytics />
        </body>
      </html>
    </ContactFormProvider>
  );
}
