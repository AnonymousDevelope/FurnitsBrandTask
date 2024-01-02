import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { furnits } from '../../data/small_const';
import { arrowLeft, share } from '../../assets/svgs';
import { Button } from '../../components/UI';
import { ProductCard } from '../../components';

const Index = () => {
    const { productId} = useParams();
    const [activeMaterials, setActiveMaterials] = useState([]);

    const onCheck = (item) => {
        const index = activeMaterials.indexOf(item);
        if (index === -1) {
            setActiveMaterials([...activeMaterials, item]);
        } else {
            const updatedMaterials = [...activeMaterials];
            updatedMaterials.splice(index, 1);
            setActiveMaterials(updatedMaterials);
        }
    };
    const totalSelectedMaterialsPrice = furnits[productId-1]?.type
        ?.filter((item) => activeMaterials.includes(item))
        .reduce((total, item) => total + parseInt(item.narxi), 0);

    const totalPrice = parseInt(furnits[productId-1]?.price) + totalSelectedMaterialsPrice;
    return (
        <>
            <div className="product__">
                <div className="product__body">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-sm-12 mb-sm-3">
                            <div
                                className="product__image"
                                style={{
                                    background: `url('${furnits[productId-1].img}') lightgray 50% / cover no-repeat`
                                }}
                            >
                                <div className="d-flex justify-content-between">
                                    <button className="btn product__btn">
                                        <img src={arrowLeft} alt="Arrow Left" />
                                    </button>
                                    <button className="btn product__btn">
                                        <img src={share} alt="Share" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row justify-content-between">
                                <div className="col-md-2">
                                    <div className="column">
                                        <span className="product__name text-start">{furnits[productId-1].name}</span>
                                        <span className="product__company text-start">{furnits[productId-1].company}</span>
                                        <div className="product__price mt-4">
                                            {/* add active material price here */}
                                            <span className="price">${totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="column">
                                        <div className="material__list">
                                            {furnits[productId-1]?.type?.map((item, idx) => (
                                                <div
                                                    className={`material__ ${activeMaterials.includes(item) ? 'active' : ''}`}
                                                    key={idx}
                                                    onClick={() => onCheck(item)}
                                                >
                                                    <div alt="" className="material__image"></div>
                                                    <span className="material__name">{item.name}</span>
                                                    <p className="material__price">{item.narxi}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-5">
                                    <div className="views w-100">
                                        <div className="row w-100">
                                            <div className="col-md-8">
                                                <div className="column gap-2">
                                                    <div className="star_list d-flex align-items-center gap-1">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <span className="views__text">11 views</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex align-items-center">
                                                <div className="users ">
                                                    <div className="user_"></div>
                                                    <div className="user_"></div>
                                                    <div className="user_"></div>
                                                    <div className="user_"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-end">
                                    <div className="add-to-cart float-end">
                                        <Button textAddToPlus={'Add to cart'} />
                                    </div>
                                </div>
                            </div>
                            <div className="additional mt-4 ">
                                <ul className="nav nav-pills" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Materials</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Care Instructions</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, nibh faucibus sed accumsan. Neque, risus ipsum facilisi augue nibh sollicitudin. Platea habitasse nunc arcu mi molestie auctor cursus pharetra neque. Eu non vel, arcu pulvinar dapibus condimentum eleifend morbi. Blandit tempor lorem morbi accumsan. Eget cursus sollicitudin felis velit elementum. Integer id adipiscing sit ac. Suspendisse nibh tellus morbi augue nulla urna semper hendrerit. Nibh scelerisque suspendisse tristique porttitor enim at bibendum duis porttitor.
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, nibh faucibus sed accumsan. Neque, risus ipsum facilisi augue nibh sollicitudin. Platea habitasse nunc arcu mi molestie auctor cursus pharetra neque. Eu non vel, arcu pulvinar dapibus condimentum eleifend morbi. Blandit tempor lorem morbi accumsan. Eget cursus sollicitudin felis velit elementum. Integer id adipiscing sit ac. Suspendisse nibh tellus morbi augue nulla urna semper hendrerit. Nibh scelerisque suspendisse tristique porttitor enim at bibendum duis porttitor.
                                    </div>
                                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                                        None
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    
                </section>
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
        </>
    );
};

export default Index;
