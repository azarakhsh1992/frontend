import React from "react";
import "../sasscodes/style.scss";

const SectionTop = () => {
    return (
        <section className="header__section">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="column">
                        <div className="row-1-of-2">
                            <button className="button-84">Qr-Code scannen</button>
                        </div>
                        <div className="row-1-of-2">
                            <button className="button-84">Schrankubersicht</button>
                        </div>
                        <div className="row-1-of-2">
                            <button className="button-84">meine Schranke</button>
                        </div>
                        <div className="row-1-of-2">
                            <button className="button-84 btn-red">Auslogen</button>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="column">
                        <div className="row-1-of-2">
                            <button className="button-84 btn-blue">Schrank XY Halle 16
                            </button>
                        </div>
                        <div className="row-1-of-2">
                            <button className="button-84 btn-blue-dark btn-increase-size">Tur 1 ist gescannt
                                <span className="text__in-button">
                                        Zugang anfordem
                                    </span>
                            </button>
                        </div>
                        <div className="row-1-of-2 margin-top">
                            <div className="row">
                                <div className="row-1-of-2">
                                    <button className="button-84">Home Page</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTop;