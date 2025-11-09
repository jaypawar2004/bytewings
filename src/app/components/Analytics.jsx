// src/app/components/Analytics.js (ya jahaan bhi aap rakho)

import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-2D5Z5P55GH" 
      />
      <Script 
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-2D5Z5P55GH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default Analytics