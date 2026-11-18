
import "../styles.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Banner 728x90 */}
      <Script
        id="adsterra-banner-config"
        strategy="afterInteractive"
      >
        {`
          window.atOptions = {
            key: '78247c8f9d0724596501e31cde78818b',
            format: 'iframe',
            height: 90,
            width: 728,
            params: {}
          };
        `}
      </Script>

      <Script
        id="adsterra-banner"
        src="https://bellnewyork.org/22/78247c8f9d0724596501e31cde78818b"
        strategy="afterInteractive"
      />

      {/* Adsterra Popunder / Unit 1 */}
      <Script
        id="adsterra-unit-1"
        src="https://accountut.com/1/4cb7d67bca705cdb9810328b5f7e55cf"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      {/* Adsterra Unit 21 */}
      <div id="container-63d72b8f3c673ff60ba2d822ca45c3b6" />

      <Script
        id="adsterra-unit-21"
        src="https://bellnewyork.org/21/63d72b8f3c673ff60ba2d822ca45c3b6"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      {/* Adsterra Unit 14 */}
      <Script
        id="adsterra-unit-14"
        src="https://bellnewyork.org/14/c31c2ed58aca80dde247309836c3acf5"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}
