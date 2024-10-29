import React from 'react'
import './FloatingIcon.css'
import FloatIcon from '../../../assets/images/msic/floaticon.svg'

const FloatingIcon = () => {
    return (
        <div>
            <a href="#" class="float">
                <img src={FloatIcon} className='img-fluid' alt="whatsapp" />
            </a>
        </div>
    )
}

export default FloatingIcon