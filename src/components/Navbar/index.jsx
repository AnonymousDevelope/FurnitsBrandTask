import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png';
import { Home, ShopCart } from '../../assets/svgs'
import 'font-awesome/css/font-awesome.min.css';
function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}
const index = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
      console.log(screenSize);
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  const { width } = screenSize
  return (
    <nav className='nav-furnit'>
      <NavLink className={'nav-link'}>
        <img src={Logo} width={70} alt="" />
        <h4>FurnitBrand</h4>
      </NavLink>
      <div className="menuOfRoute">
        <NavLink className={'nav-link'} to={'/'}>
          {
            // width > 768 ? 'Home' : 
            width > 768 ? 'Home' : <i className='fa fa-home'></i>
          }
        </NavLink>
        <NavLink className={'nav-link'} to={'/about'}>
          {
            width > 768 ? 'About' : <i className='fa fa-user'></i>
          }
        </NavLink>
        <NavLink className={'nav-link'} to={'/contact'}>
          {
            width > 768 ? 'Contact' : <i className='fa fa-address-book'></i>
          }
        </NavLink>
        <NavLink className={'nav-link'} to={'/search'}>
          {
            width > 768 ? 'Search' : <i className='fa fa-search'></i>
          }
        </NavLink>
      </div>
      <div className="auth">
        <div className="btn btn-shop-cart">
          <NavLink to="/cart" className="nav-link">
            <img src={ShopCart} alt="" />
            <span>Cart</span>
          </NavLink>
        </div>
        <div className="btn-group">
          <div className="btn btn-border">
            <NavLink className={'nav-link'} to={'/login'}>
              {
                width > 768 ? 'Login' : <i className='fa fa-sign-in'></i>
              }
            </NavLink>
          </div>
          <div className="btn btn-primary">
            <NavLink className={'nav-link'} to={'/signup'}>
              {
                width > 768 ? 'Sing Up' : <i className="fa fa-solid fa-registered"></i>
              }
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default index