import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import Footer from './Footer'
import aboutbg from '../photos/hm2.webp'
import { Box } from '@chakra-ui/react';

const Recover = () => {
  return (
    
    <>
    <Navbar />
      <Box backgroundImage={aboutbg} height={"600"}
    width="100%">
        <div className="container mt-3" >
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h1 className='text-center col-lg-6' style={{fontSize:"25px",fontWeight:"900",color:"#9a1aef"}}>Recover Password</h1>
                    <Form className= 'mt-5'>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="email" name='email'  placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="primary" className='col-lg-6'  style={{ background: "#9a1aef",marginLeft:"-640px" }} type="submit"  onClick={() => alert('Please Check your mail new password sent to your mail')} >
                            Submit
                        </Button>
                    </Form>
                    
                </div>
                {/* <SIgn_img /> */}
            </section>
            <ToastContainer />
        </div>
        {/* <Footer /> */}
        </Box>
    </>
  )
}

export default Recover