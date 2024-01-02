import React from 'react'

const index = ({ company, name, img, oldPrice, price, idx }) => {
    return (
        <div className="shop-cart">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-9 col-sm-12 shop-mainly">
                    <div className="top_part">
                        <div className="about">
                            <div className="column text-start">
                                <div className="name">{company}</div>
                                <div className="type">{idx}</div>
                            </div>
                        </div>
                        <div className="remove">
                            <button className="btn">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <div className="cart-shop-number">
                                <button className="decrement btn block_of_shop">
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="number btn block_of_shop">
                                    <span>1</span>
                                </button>
                                <button className="increment btn block_of_shop">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex justify-content-end align-items-center">
                            <div className="prices ">
                                {
                                oldPrice ? (<span className="oldprice">{oldPrice}</span>) : ('')
                                }
                                <span className="price">{price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </div >
    )
}

export default index