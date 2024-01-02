import React, { useState } from 'react'

const index = ({ dataCarousel }) => {
    const [idx, setIDX] = useState(0);
    return (
        <div className="carousel_">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators nav" >
                    {
                        dataCarousel.map((item, index) => (
                            <li
                                id='indicator'
                                key={index}
                                data-bs-target="#carouselId"
                                data-bs-slide-to={index}
                                className={item.id - 1 === idx ? "active" : ""}
                                onClick={() => setIDX(item.id - 1)}
                            ></li>
                        ))
                    }
                </ol>
                <div className="carousel-inner" role="listbox">
                    {
                        dataCarousel.map((item, index) => (
                            <div className={"carousel-item" + (index === 0 ? " active" : "")} key={index}>
                                <img
                                    src={item.img}
                                    className="w-100 d-block"
                                    alt={`${index} image`}
                                />
                                <div className="carousel_caption d-md-block">
                                    <h5>{item.qoshimcha}</h5>
                                    <p>{item.cheigrma} Chegirma</p>
                                    <a href="#" className='nav-link'>Learn more &rarr;</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                    onClick={() => setIDX(idx - 1)}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                    onClick={() => setIDX(idx + 1)}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default index