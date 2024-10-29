import React from 'react'
import './JoinHome.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const JoinHome = () => {
    return (
        <React.Fragment>
            <div className="joinhome-container">
                <Container className='h-100'>
                    <div className="joinhome-inner">
                        <h2 className='text-main text-bold'>Be A Part Of Our Journey</h2>
                        <p className='paragraph1 text-main'>Join our community to stay updated with our monthly cultural events and initiatives!</p>
                        <div>
                            <Link to="/join-us" className="btn-link">Join Us&nbsp;&#8594;</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default JoinHome