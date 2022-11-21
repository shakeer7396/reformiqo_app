import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import SIgn_img from '../Components/SIgn_img'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import Footer from './Footer'
import aboutbg from '../photos/hm2.webp'
import { Box } from '@chakra-ui/react';


const SignIn = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
      email: "",
      password: ""
  })

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }

  const addData = (e) => {
      e.preventDefault();

      const getuserArr = localStorage.getItem("useryoutube");
      console.log(getuserArr);

      const { email, password } = inpval;
      if (email === "") {
          toast.error('email field is requred', {
              position: "top-center",
          });
      } else if (!email.includes("@")) {
          toast.error('plz enter valid email addres', {
              position: "top-center",
          });
      } else if (password === "") {
          toast.error('password field is requred', {
              position: "top-center",
          });
      } else if (password.length < 5) {
          toast.error('password length greater five', {
              position: "top-center",
          });
      } else {

          if (getuserArr && getuserArr.length) {
              const userdata = JSON.parse(getuserArr);
              const userlogin = userdata.filter((el, k) => {
                  return el.email === email && el.password === password
              });

              if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");

                  localStorage.setItem("user_login", JSON.stringify(userlogin))

                  history("/home")
              }
          }
      }

  }

  return (
      <>
      <Navbar />
        <Box backgroundImage={aboutbg} height={"600"}
      width="100%">
          <div className="container mt-3" >
              <section className='d-flex justify-content-between'>
                  <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                      <h1 className='text-center col-lg-6'>Sign IN</h1>
                      <Form className= 'mt-5'>

                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                              <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                          </Form.Group>
                          <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#9a1aef",marginLeft:"-640px" }} type="submit">
                              Submit
                          </Button>
                      </Form>
                      <p className='mt-3'style={{marginLeft:"-640px"}}>Don't have an Account yet --<Link to='/signup' style={{color:"blue",}} >SignUp</Link> </p>
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

export default SignIn