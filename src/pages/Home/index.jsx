import React from 'react'
import { Carousel, CategrieItem, ProductCard, RoomsItem } from '../../components'
import { categories, furnits, rooms } from '../../data/small_const'
import { carouselData } from '../../data/carousel_data'
import RoomImg from '../../assets/imgs/Product image.png'
const index = () => {
  return (
    <>
      <div className="home">
        <Carousel dataCarousel={carouselData} />
        <section className='categories'>
          <div className="title">Categories</div>
          <br />
          <div className="list">
            {
              categories.map(item => <CategrieItem key={item.id} type={item.name} img={item.img} />)
            }
          </div>
        </section>
        <section className='Popular'>
          <div className="title">Popular Products</div>
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
        <Carousel key={carouselData} dataCarousel={carouselData} />
        <section className='rooms'>
          <div className="title">
            Rooms
          </div>
          <div className="list">
            {
              rooms ? rooms.map((item, index) => <RoomsItem key={index} img={item.img} room={item.name} />) : ''
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default index