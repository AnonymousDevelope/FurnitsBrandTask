import React from 'react'
import { Button } from '../UI'
import { useNavigate } from 'react-router-dom'
const index = ({ img, name, type, oldPrice, price, id }) => {
    const navigate = useNavigate();
    const openCard = () => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="product-card" onClick={openCard}>
            <div className="img" style={{ background: `url(${img}) no-repeat` }}>
            </div>
            <div className="details">
                <div className="row w-100">
                    <div className="col-md-8">
                        <div className="name">{name}</div>
                        <div className="type">{type}</div>
                        <div className="prices">
                            <span className="oldprice">{oldPrice}</span>
                            <span className="price">{price}</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Button className="add-btn-shop">

                        </Button>
                    </div>
                </div>
            </div>
            <p className='text-start p-1 text-warning fs-6'>
                Maxsulot turini tanlash va filterlash uchun maxsulot ustiga bosing
            </p>
        </div>
    )
}

export default index