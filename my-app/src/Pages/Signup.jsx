import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import SIgn_img from '../Components/SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import Navbar from './Navbar'
import { Box } from '@chakra-ui/react'
import aboutbg from '../photos/hm2.webp'


const Signup = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
      name: "",
      email: "",
      date: "",
      password: ""
  })

 

  const [data,setData] = useState([]);
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

      const { name, email, date, password } = inpval;

      if (name === "") {
          toast.error(' name field is requred!',{
              position: "top-center",
          });
      } else if (email === "") {
           toast.error('email field is requred',{
              position: "top-center",
          });
      } else if (!email.includes("@")) {
           toast.error('plz enter valid email addres',{
              position: "top-center",
          });
      } else if (date === "") {
           toast.error('date field is requred',{
              position: "top-center",
          });
      } else if (password === "") {
           toast.error('password field is requred',{
              position: "top-center",
          });
      } else if (password.length < 5) {
           toast.error('password length greater five',{
              position: "top-center",
          });
      } else {
          console.log("data added succesfully");
          navigate("/signin")
          localStorage.setItem("userData",JSON.stringify([...data,inpval]));

      }

  }

  return (
      <>
      <Navbar />
      <Box backgroundImage={aboutbg} height={"600"}
      width="100%">
          <div className="container mt-3">
              <section className='d-flex justify-content-between'>
                  <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                      <h1 className='text-center col-lg-6' style={{fontSize:"25px",fontWeight:"900",color:"#9a1aef",marginTop:"150px"}}>Sign Up</h1>
                      <Form className= 'mt-5' >
                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                          </Form.Group>
                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control onChange={getdata} name='date' type="date" />
                          </Form.Group>

                          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                              <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                          </Form.Group>
                          <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#9a1aef",marginLeft:"-640px" }} type="submit">
                              Submit
                          </Button>
                      </Form>
                      <p className='mt-3' style={{marginLeft:"-640px"}}>Already Have an Account -- <span><NavLink to="/signin" style={{color:"blue"}} >SignIn</NavLink></span> </p>
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
export default Signup