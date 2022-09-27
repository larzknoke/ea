/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

function Home() {
  const [formComplete, setFormComplete] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSending, setFormSending] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    document.body.appendChild(script);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormSending(true);
    setFormComplete(false);
    setFormError(false);
    const fields = e.currentTarget.elements;

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "homepage" })
        .then(async (token) => {
          /* send data to the server */
          const formData = {};
          Array.from(fields).forEach((field) => {
            if (!field.name) return;
            if (field.type != "checkbox") {
              formData[field.name] = field.value;
            } else {
              formData[field.name] = field.checked;
            }
            formData["recaptchaResponse"] = token;
          });

          await fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify(formData),
          })
            .then((response) => {
              if (response.status >= 400 && response.status < 600) {
                setFormError(true);
                setFormSending(false);

                throw new Error("Bad response from server");
              }
              return response;
            })
            .then((returnedResponse) => {
              e.target.reset();
              setFormSending(false);
              setFormComplete(true);
            })
            .catch((error) => {
              setFormSending(false);
              setFormError(true);
            });

          /* End of the sending data */
        })
        .catch((error) => {
          console.log("error ", error);
        });
    });
  }

  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 color-orange-900">
                    Kontaktieren Sie uns gerne!
                  </span>
                  <h1 className="text-display-3 mt-30">
                    Evgenia Aul – <br className="d-lg-block d-none" /> Ihr
                    Gardinenservice
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Wir bieten Gardinenwaschservice, innenligenden Sicht- und
                    Sonnenschutz sowie Näharbeiten
                  </p>
                  <div className="mt-40">
                    <Link href="/page-service-1">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Beratung direkt vor Ort
                      </a>
                    </Link>

                    {/* <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Contact Us
                      </a>
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1-OFF">
                      <img
                        src="/assets/imgs/plissee/plissee_hoch_1.jpg"
                        alt="Agon"
                      />
                    </div>
                    <img
                      className="img-responsive shape-2-OFF rounded-full"
                      alt="Agon"
                      src="assets/imgs/gardinen/gardine1.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mt-200 pt-100">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-1.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-2.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-3.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-4.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-5.svg"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <Link href="/#">
                  <a className="item-logo box-hover-shadow hover-up">
                    <img
                      alt="Agon"
                      src="assets/imgs/slider/logo/sample-logo-6.svg"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                <h2 className="text-heading-1 color-gray-900">
                  Unsere Leistungen
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Wir bieten kostenlose Beratung – Direkt vor Ort.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-5 bg-business hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/business-strategy.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Gardinenservice</h3>
                  <p className="text-body-excerpt mt-20">
                    Wir hängen Ihre Gardinen ab, waschen oder reinigen sie und
                    hängen sie wieder auf.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-1">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        weitere Info
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-9 bg-local hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Sicht- und Sonnenschutz
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Verkauf, Montage und Reparatur von innenliegenden Sicht- und
                    Sonnenschutz
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-2">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        weitere Info
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-5 bg-social hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/social.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Näharbeiten</h3>
                  <p className="text-body-excerpt mt-20">
                    Näharbeiten inklusive fachgerechter Montage – auch für
                    Kissen und Tischdecken.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-about-3">
                      <a className="btn btn-default btn-white icon-arrow-right">
                        weitere Info
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-150">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/gardinen/gardine2.jpg"
                  alt="Gardinen"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <span className="tag-1">kostenlose Beratung vor Ort</span>
                <h3 className="text-heading-1 mt-30">Gardinenservice</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  Necessary to deliver white glove, fully managed campaigns that
                  surpass industry benchmarks.Take your career to next level.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                  <div className="col-lg-8 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Gardinen Anfertigung nach Ihrem Wunsch und Maß
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                                    The latest design trends meet
                                    hand-crafted templates.
                                </p> */}
                  </div>
                  <div className="col-lg-8 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Ausgefallene Designer Stoffe und Gardinenstangen
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                                    The latest design trends meet
                                    hand-crafted templates.
                                </p> */}
                  </div>
                  <div className="col-lg-8 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Klassische und Moderne Vorhänge
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                                    The latest design trends meet
                                    hand-crafted templates.
                                </p> */}
                  </div>
                  <div className="col-lg-8 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">
                      Montage und Dekoration
                    </h4>
                    {/* <p className="text-body-excerpt color-gray-600 mt-15">
                                    The latest design trends meet
                                    hand-crafted templates.
                                </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-200 bg-green-900 pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="img-responsive mb-10"
                      src="assets/imgs/plissee/plissee2.jpg"
                      alt="Plissees"
                    />
                    <img
                      className="img-responsive"
                      src="assets/imgs/plissee/plissee5.jpg"
                      alt="Plissees"
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-responsive"
                      src="assets/imgs/plissee/plissee3.jpg"
                      alt="Plissees"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 block-pl">
                <h3 className="text-heading-2 color-white mb-30 mt-20">
                  Innenliegender Sonnenschutz nach Maß inkl. fachgerechter
                  Montage
                </h3>
                <p className="text-inter-lg">· Plissees (Verkauf/Reparatur)</p>
                <p className="text-inter-lg">· Rollos</p>
                <p className="text-inter-lg">· Insektenschutz</p>
                <p className="text-inter-lg">· Wabenplissees</p>
                <p className="text-inter-lg">· Jalousie (Holz, Metall)</p>
                <p className="text-inter-lg">· Lamellen</p>
                <div className="mt-30">
                  <Link href="/page-service-2">
                    <a className="btn btn-black text-body-text">
                      jetzt Termin vereinbaren
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Näharbeiten
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Näharbeiten inklusive fachgerechter Montage –{" "}
                  <br className="d-lg-block d-none" />
                  auch für Kissen und Tischdecken.
                </p>
                <p className="text-body-excerpt color-gray-600 mt-20">
                  Viele Stoffe zum Verkauf von bekannten Lieferanten wie Aolo,
                  Fuggerk etc.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <img
                  className="img-responsive rounded-full"
                  src="assets/imgs/gardinen/gardine6.jpg"
                  alt="Plissees"
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <img
                  className="img-responsive rounded-full"
                  src="assets/imgs/gardinen/gardine4.jpg"
                  alt="Plissees"
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <img
                  className="img-responsive rounded-full"
                  src="assets/imgs/gardinen/gardine5.jpg"
                  alt="Plissees"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box box-gray-100 mt-120 mb-20">
          <div className="container">
            <div className="icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Kostenlose Beratung – direkt vor Ort
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Kontaktieren Sie uns!
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    <br className="d-lg-block d-none" />
                    diam nonumy eirmod
                  </p>
                </div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                    Evgenia Aul
                  </h4>
                  <p className="text-body-text color-gray-600">
                    Musterstraße 123
                    <br />
                    37603 Holzminden
                  </p>
                  <p className="text-body-text color-gray-600">
                    05531/123 45 67
                  </p>
                  <p className="text-body-text color-gray-600">
                    info@evgenia-aul.de
                  </p>
                </div>
                <div className="col-lg-8">
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Telefon"
                            name="telefon"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Nachricht"
                            name="nachricht"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="datenschutz"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="datenschutz"
                          >
                            Ja, ich habe die Datenschutzerklärungzur Kenntnis
                            genommen und bin damit einverstanden, dass die von
                            mir angegebenen Daten elektronisch erhoben und
                            gespeichert werden. Meine Daten werden dabei nur
                            streng zweckgebunden zur Bearbeitung und
                            Beantwortung meiner Anfrage verwendet. Mit dem
                            Absenden des Kontaktformulars erkläre ich mich mit
                            der Verarbeitung einverstanden.
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-15">
                        <button
                          className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                          type="submit"
                          disabled={formSending ? true : false}
                        >
                          {!formSending
                            ? "Nachricht senden"
                            : "wird gesendet..."}
                        </button>
                        {formComplete && (
                          <div>
                            <span className="text-bold">
                              Nachricht erfolgreich versendet.
                            </span>
                          </div>
                        )}
                        {formError && (
                          <div>
                            <span className="text-bold">
                              Ein Fehler ist aufgetreten. Bitte probieren Sie es
                              nochmal.
                            </span>
                          </div>
                        )}
                        <br className="d-lg-none d-block" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
