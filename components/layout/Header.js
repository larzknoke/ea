/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <img
                        alt="Evgenia Aul Logo White"
                        src="/assets/imgs/template/logo-white.svg"
                      />
                    ) : (
                      <img
                        alt="Evgenia Aul Logo"
                        src="/assets/imgs/ea_logo.svg"
                      />
                    )}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link href="#">
                        <a className="active">Über uns</a>
                      </Link>
                    </li>
                    <li className="has-children-OFF">
                      <Link href="#">
                        <a>Gardinen</a>
                      </Link>
                    </li>
                    <li className="has-children-OFF">
                      <Link href="#">
                        <a>Sicht- u. Sonnenschutz</a>
                      </Link>
                    </li>
                    <li className="has-children-OFF">
                      <Link href="#">
                        <a>Näharbeiten</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="block-signin">
                <Link href="/page-signup">
                  <a className="btn btn-default hover-up icon-arrow-right">
                    Kontakt
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
