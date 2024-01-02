import React from 'react'
import { ProductCard, ShopCart } from '../../components'
import { furnits } from '../../data/small_const'
import { Input, Button } from '../../components/UI'
const index = () => {
    return (
        <div className="shopping_cart">
            <div className="_header">
                <button className='back btn' onClick={() => window.history.back()}>
                    &larr;
                </button>
                <div className="column">
                    <h1>
                        Shopping Cart
                    </h1>
                    <span>
                        Stop dreaming about the perfect living room – create one with our furniture.
                    </span>
                </div>
            </div>
            <div className="_body">
                <div className="row">
                    <div className="col-md-8">
                        <ShopCart img={furnits[0].img} company={furnits[0].company} oldPrice={furnits[0].oldPrice} price={furnits[0].price} idx={"0123"} />
                        <ShopCart img={furnits[0].img} company={furnits[0].company} oldPrice={furnits[0].oldPrice} price={furnits[0].price} idx={"0123"} />
                    </div>
                    <div className="col-md-4">
                        <div className="summary">
                            <div className="title">Summary</div>
                            <div className="row">
                                <div className="col-6">Products</div>
                                <div className="col-6">$0.00</div>
                            </div>
                            <div className="row">
                                <div className="col-6">Products</div>
                                <div className="col-6">$0.00</div>
                            </div>
                            <div className="row">
                                <div className="col-6">Total</div>
                                <div className="col-6">$0.00</div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <Input className="cupon-input" placeholder="Cupon code" />
                                </div>
                                <div className="col-md-3">
                                    <button className="btn apply">Apply</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Button className={"w-100 checkout"}>
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='similar-product'>
                <div className="title">Similar Products</div>
                <div className="list">
                    {
                        furnits ? furnits.slice(0, 4).map(item => (
                            <ProductCard
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                type={item.company}
                                oldPrice={item.oldPrice ? item.oldPrice : ''}
                                price={item.price}
                                id={item.id}
                            />
                        )) : ''
                    }
                </div>
            </section>
        </div>
    )
}

export default index