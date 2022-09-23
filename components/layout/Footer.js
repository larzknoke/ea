/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <div className="col-md-4 col-sm-6 text-center text-md-start">
                <Link href="/">
                  <a>
                    <img
                      alt="EA Logo"
                      src="/assets/imgs/ea_logo.svg"
                      style={{ "max-width": "150px" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Kontakt</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
                Musterstraße 12 <br />
                37603 Holzminden
              </div>
              <div className="mt-20 text-body-text color-gray-600">
                Tel. 05531 / 12 34 56
              </div>
              <div className="text-body-text color-gray-600">
                <a href="mailto:info@evgenia-aul.de">info@evgenia-aul.de</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © Evgenia Aul 2022
                </span>
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Datenschutz
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Impressum
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://facebook.com">
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com">
                    <a className="icon-socials icon-twitter"></a>
                  </Link>
                  <Link href="https://www.instagram.com">
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
