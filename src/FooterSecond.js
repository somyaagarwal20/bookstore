
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
<link href='https://fonts.googleapis.com/css?family=roboto:300,400,500,700&display=swap' rel='stylesheet'/>

const FooterSecond = () => {
  return (
    <div>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <section className=''>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
              <p className='pt-2'>
                <strong>Sign up for our bookstore</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' start>
              <MDBInput contrast type='email' label='Email address' className='mb-4' />
            </MDBCol>

            <MDBCol size="auto">
              <MDBBtn outline color='light' type='submit' className='mb-4'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </section>

      <section className='mb-4'>
       
      </section>

      <section className=''>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>SERVICES</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Email marketing
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 Campaigns
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Branding
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Offline
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>ABOUT </h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Our stories
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Benefits
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Team 
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 careers
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>LEGAL</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Term & Conditions
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 Term of use
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 
                </a>
              </li>
            </ul>
          </MDBCol>

         
        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 
      <a className='text-white' href='https://mdbootstrap.com/'>
        bookworm
      </a>
    </div>
  </MDBFooter>

    </div>
  )
}

export default FooterSecond
