import React from 'react'
import './DonateCont.css'
import { Container } from 'react-bootstrap'
import MultiStep_Init from './MultiStep/MultiStep_Init'

const DonateCont = () => {
  return (
    <React.Fragment>
      <div className="donate-container">
        <Container fluid>
          <div className="donate-wrapper">
            <MultiStep_Init />
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DonateCont