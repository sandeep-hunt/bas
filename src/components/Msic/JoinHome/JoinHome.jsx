import React from 'react'
import './JoinHome.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const JoinHome = () => {
    return (
        <React.Fragment>
            <div className="joinhome-container">
                <Container className='h-100'>
                    <div className="joinhome-inner">
                        <h2 className='text-main text-bold'>Be A Part Of Our Journey</h2>
                        <p className='paragraph1 text-main'>Join our community to stay updated with our monthly Saṁskriti events and initiatives!</p>
                        <div>
                            <Link to="/join-us" className="btn-link">Join Us&nbsp;&nbsp;<FontAwesomeIcon size='sm' icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default JoinHome