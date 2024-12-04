import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const Refund = ({ settings }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${settings.site_title} | Cancellation and Refund`}</title>
            </Helmet>
            <div className="projects-content">
                <Container fluid>
                    <div className="content-text">
                        <h3 className='text-main text-center'>Cancellation and Refund</h3>
                    </div>
                    <div className="content-text mt-3 text-main">
                        <p>No cancellations &amp; Refunds are entertained, the refunds will be issued only in certain scenarios.</p>
                    </div>
                    <ul class="unorder-list mt-3">
                        <li class="list-item">
                            <p class="text-main">Cancellation or refund are not entertained for incorrect bookings or donation.</p>
                        </li>
                        <li class="list-item">
                            <p class="text-main">The refund will be eligible only for the bookings if the events are cancelled by the organization.</p>
                        </li>
                        <li class="list-item">
                            <p class="text-main">Donations cannot be refunded back.</p>
                        </li>
                        <li class="list-item">
                            <p class="text-main">The refund will be credited to the customer's bank account within 5-7 business working day.</p>
                        </li>
                    </ul>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Refund