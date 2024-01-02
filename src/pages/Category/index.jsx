import React from 'react'
import { Carousel, ProductCard } from '../../components'
import { furnits } from '../../data/small_const'
import { carouselData } from '../../data/carousel_data'
import { useParams,useNavigate } from 'react-router-dom'
const index = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  // history back
  const handleBack = () => {
    navigate(-1);
  }
  return (
    <>
      <div className="category_" >
        <div className="category_header"
         style={{
          background: 
          category === "Sofa"?
          "url('https://s3-alpha-sig.figma.com/img/f86c/37e2/4042c2965dc678b56ef86224d0e0a8d5?Expires=1704672000&Signature=HxBscH35zj11DGVYi6sU-~NE1F9AjIcTaNuay2d-iW7JG-xB1EfeWtEwshqdaSOUrLukdRxkmlcowhw~rSUlmbTEV7ZWBIdaKOGMBN1FQAyqIloB5XF5gd-iGv~jRDeIkXGFqmx6fgkF1EPjwPEKemy76~ZNuO3oYKeSh0EXDFzYe8OqWIby6e6xNMREueezIusreF6QIMLt3z8C2aorFMOh9B5SVHmV2cGbBmOl6A0r0ldwusKJ3BkXEPjL48twjydHtwYPlACKX95i2x0Y-87RccdwCe8GTdSd-rn-Ph222OyWccx9um0WqcFHLCncqgVTtGvorM04rni8RI11fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4') lightgray 50% / cover no-repeat"
         :category === "Chair"?
          "url('https://s3-alpha-sig.figma.com/img/ad31/aabc/0b9a9cdea3b38ef60ee20b13a40f2bc9?Expires=1704672000&Signature=PdwqcyLdH1NOaEjCHAd60OYdk33zllHsOCjaqXqWMKFG4oXicoEp4xA5DibjnKwuzk9Q5E-zZLFUuVp33q8~FReBfjWfqYw72NItRxdApfP4-5dp41DRZrxtXSltAHRzbvojr--92TupvlgTz91WhZ2h8Ef4DQbmoa4CzIK9ibu2PodIS9X699I0Uc9mDYqunawUPYfAW~U0jzNLcnYRjDXmIoPhI0AStcyw4NOXsAlSRDl0r3RMC4RamYoYK0lr6qmJ6VoznYP9gvgpN5e5EIFL1w3vSfNSWwJ01zGqR1Kn01vFLUWgsypUFn9TINaK6U7YMajQh5ZAHYRJOy40ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4') lightgray 50% / cover no-repeat" 
         :category === "Table"?
          "url('https://s3-alpha-sig.figma.com/img/b62b/d277/034e028fd244317370270532be59adb6?Expires=1704672000&Signature=qcvXkDUik~ZIo0TDWSXThFmnldDMxbz6Xof7b8qocXE5x3-yUiCVIgywJayHmUUFZ621IlCw9VN3QRxGltyv4Yube8TlD2T1f2v8d1YvMdcBPv6pr~wTHG9c1Jlqpo9gvtMgUxB2LnKq-67NdJ0uYzRKRMPG6xoMZVh0TFtPyGUR0S73lDNd2jtQN4WD8V~frwdP5JX6n2TAJ97lfCAyTMSqITQdZMwDXNhPh-i18oT~X5mfbJ6eJrDQjTWBvvuXTu9N-gYet~4~GDtfMymYtgTsY34NomQYDjnBmmyCpHmHdl9C~z57vCenfWUPLK-g-8lXotG5Qeg-AH8U7~5Z3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4') lightgray 50% / cover no-repeat" 
        :""
        }}
        >
          <button className="btn back" onClick={handleBack}>
            &larr;
          </button>
          <h1>{category}</h1>
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
    </>
  )
}

export default index