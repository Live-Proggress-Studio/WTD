import React from 'react'
import { Paths } from '@/App/Routing'
import { Link } from 'react-router-dom'

import './ErrorPage.scss'

const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
        <div className="ErrorPage__wrapper">
            <div className="ErrorPage__number">404</div>
            <div className="ErrorPage__title">Ой ой</div>
            <Link to={Paths.Home}>
                <button className="ErrorPage__back">Назад</button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage