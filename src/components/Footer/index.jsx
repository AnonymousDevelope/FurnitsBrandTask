import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {Toggle} from '../UI/'
const index = () => {
    return (
        <>
            <footer className=''>
                <div className="footer">
                    <p className='for-connect-icons'>
                        <NavLink className={'nav-link'} target='_blank' to={'https://www.instagram.com'}><i className="fa fa-instagram"></i></NavLink>
                        <NavLink className={'nav-link'} target='_blank' to={'https://www.reddit.com'}><i className="fa fa-reddit"></i></NavLink>
                        <NavLink className={'nav-link'} target='_blank' to={'https://www.youtube.com'}><i className="fa fa-youtube"></i></NavLink>
                    </p>
                    <p>© 2023 Furnit Company </p>
                    <p className='theme-icons'>
                        <i className="fa fa-sun-o"></i>
                        <Toggle className={'check-theme'}/>
                        <i className="fa fa-moon-o"></i>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default index