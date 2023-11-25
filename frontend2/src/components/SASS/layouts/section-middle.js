import React from "react";


const SectionMiddle = () => {
    return (
        <section className="middle__section">
            <div className="column">
                <div className="row-1-of-1">Header</div>
                <div className="row-1-of-1">
                    <div className="row">
                        <div className="col-1-of-3">row 2</div>
                        <div className="col-1-of-3">row 2</div>
                        <div className="col-1-of-3">row 2</div>
                    </div>
                </div>
                <div className="row-1-of-1">
                    <div className="row">
                        <div className="col-1-of-3">row 3</div>
                        <div className="col-1-of-3">row 3</div>
                        <div className="col-1-of-3">row 3</div>
                    </div>
                </div>
                <div className="row-1-of-1">
                    <div className="row">
                        <div className="col-1-of-3">row 4</div>
                        <div className="col-1-of-3">row 4</div>
                        <div className="col-1-of-3">row 3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMiddle;