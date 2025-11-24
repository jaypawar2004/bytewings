import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Script from "next/script";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import Stairs from "./components/common/Stairs";
import Analytics from "./components/Analytics";


// ✅ SEO + Metadata
export const metadata = {
  title: "ByteWings | Creative Web Agency & Technology Partner",
  description:
    "ByteWings is a full-service creative agency that builds stunning websites, web apps, and marketing campaigns to help brands grow digitally.",
  keywords: [
    "ByteWings",
    "Web Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Website Design",
    "Branding",
    "Digital Marketing",
    "Creative Agency",
    "Full Stack Developer",
  ],
  metadataBase: new URL("https://bytewings.in"), // ✅ update with live domain
  alternates: {
    canonical: "https://bytewings.in",
  },
  openGraph: {
    title: "ByteWings | Creative Web Agency & Technology Partner",
    description:
      "We help brands grow through modern design, smart development, and digital strategy. Let’s build your online success story.",
    url: "https://bytewings.in",
    siteName: "ByteWings",
    images: [
      {
        url: "/photos/og-image.jpg", // ✅ upload one 1200x630 image in public/photos
        width: 1200,
        height: 630,
        alt: "ByteWings Agency Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteWings | Creative Web Agency & Technology Partner",
    description:
      "ByteWings builds modern websites and web applications that empower businesses to grow digitally.",
    images: ["/photos/og-image.jpg"],
    creator: "@bytewings", // optional Twitter handle
  },
  icons: {
    icon: "/photos/ByteWings White.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "your-google-verification-code", // ✅ paste from Search Console
  },
};

// ✅ Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ByteWings",
            url: "https://bytewings.in",
            logo: "https://bytewings.in/photos/Logo%20Without%20text.png",
            sameAs: [
              "https://www.facebook.com/bytewings",
              "https://www.instagram.com/bytewings",
              "https://www.linkedin.com/company/bytewings",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          })}
        </Script>

        {/* ✅ Google Analytics (replace G-XXXXXXX with your ID) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2D5Z5P55GH"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2D5Z5P55GH');
          `}
        </Script>
      {/* Meta  Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1986113605292044');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`antialiased`}
      >
        {/* Top progress bar */}
        <NextTopLoader
          color="#0000FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />

        {/* Navigation */}
        <Navbar />

        {/* Page Wrapper */}
        <Stairs>
          <Analytics />
          {children}
        </Stairs>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
