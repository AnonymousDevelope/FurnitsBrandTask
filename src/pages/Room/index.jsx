import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel, ProductCard } from '../../components'
import { furnits } from '../../data/small_const'
import { carouselData } from '../../data/carousel_data'
const index = () => {
  const { room } = useParams()
  return (
    <div className="room_">
      <div className="room_header">
        <button className='back btn' onClick={() => window.history.back()}>
          &larr;
        </button>
        <div className="column">
          <h1>
            {room.toLocaleUpperCase()}
          </h1>
          <span>
            Stop dreaming about the perfect living room – create one with our furniture.
          </span>
        </div>
      </div>
      <div className="products">
          {
            furnits.map((item,idx)=>{
              return (
                <ProductCard
                  key={idx}
                  img={item.img}
                  name={item.name}
                  type={item.company}
                  oldPrice={item.oldPrice ? item.oldPrice : ''}
                  price={item.price}
                  id={item.id}
                />
              )
            })
          }
        </div>
        <Carousel dataCarousel={carouselData}/>
    </div>
  )
}

export default index