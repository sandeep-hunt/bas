import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const Terms = ({ settings }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${settings.site_title} | Terms & Conditions`}</title>
      </Helmet>
      <div className="projects-content">
        <Container fluid>
        <div className="content-text">
          <h3 className='text-main text-center'>Terms & Conditions</h3>
        </div>
          <div className="content-text mt-3 text-main">
            For the purpose of these Terms and Conditions, The term "we", "us",
            "our" used anywhere on this page shall mean <strong>BHARATA ARSHEYA SANSTHAN</strong>, whose registered/operational office is 06 Purushottam Aptts, 18 Shilavihar Society Erandwane Pune MAHARASHTRA 411038. "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
          </div>
          <div className="content-text mt-3 text-main">
            <strong>Your use of the website and/or purchase from us are governed by following Terms and Conditions:</strong>
          </div>
          <ul class="unorder-list mt-3">
            <li class="list-item">
              <p class="text-maintext-main">
                The content of the pages of this website is subject to change without notice.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose.
                You acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                Your use of any information or materials on our website and/or product
                pages is entirely at your own risk, for which we shall not be liable.
                It shall be your own responsibility to ensure that any products, services
                or information available through our website and/or product pages meet your
                specific requirements.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                Our website contains material which is owned by or licensed to us. This material
                includes, but are  not limited to, the design, layout, look, appearance
                and graphics. Reproduction is prohibited other than in accordance with the
                copyright notice, which forms part of these terms and conditions.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                All trademarks reproduced in our website which are not the property of, or
                licensed to, the operator are acknowledged on the website.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                Unauthorized use of information provided by us  shall give rise to a claim for
                damages and/or be a criminal offense.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                From time to time our website may also include links to other websites. These links are
                provided for your convenience to provide further information.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                You may not create a link to our website from another website or document without
                BHARATA ARSHEYA SANSTHAN’s prior written consent.
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                Any dispute arising out of use of our website and/or purchase with
                us and/or any engagement with us is subject to the laws of India .
              </p>
            </li>
            <li class="list-item">
              <p class="text-main">
                We, shall be under no liability whatsoever in respect of any loss or
                damage arising directly or indirectly out of the decline of
                authorization for any Transaction, on Account of the Cardholder
                having exceeded the preset limit mutually agreed by us with our
                acquiring bank from time to time
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Terms