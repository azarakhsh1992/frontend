import React from "react";


const SectionMiddle = () => {
    return (
        <section className="middle__section">
            <div className="column">
                <div className="row-1-of-1">Header</div>
                <div className="row-1-of-1">
                    <div className="row">
                        <div className="col-1-of-3">
                            {/*//Rack Edge B , network, energy*/}
                            <span className="label">Rack Edge A</span>
                        </div>
                        <div className="col-1-of-3">
                            <div className="column">
                                <div className="row-1-of-3">
                                    <button className="btn-temp">
                                        Top
                                    </button>
                                </div>
                                <div className="row-1-of-3">
                                    <button className="btn-temp">
                                        Middle
                                    </button>
                                </div>
                                <div className="row-1-of-3">
                                    <button className="btn-temp">
                                        Bottom
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-1-of-3">
                            <div className="column">
                                <div className="row-1-of-3">
                                    <span className="label">
                                        X &deg; C
                                    </span>
                                </div>
                                <div className="row-1-of-3">
                                    <span className="label">
                                        X &deg; C
                                    </span>
                                </div>
                                <div className="row-1-of-3">
                                    <span className="label">
                                        X &deg; C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMiddle;