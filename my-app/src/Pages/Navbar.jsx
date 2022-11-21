import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as Router, useNavigate } from "react-router-dom";
import Styles from './Navbar.Module.css'
import logo from "../photos/logo.png"


 const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Box
      height={"auto"}
      width="100%"
      margin={"auto"}
      // marginTop="5"
      // backgroundImage={bgimg}
      background={'black'}
      // borderRadius={"10"}
    >
      <Flex justifyContent={"space-around"} padding={"5"} color="azure">
      <div className={Styles.n1}>
                <img width='150px' height='120px'
                src={logo} 
                onClick={()=>navigate("/")} />
            </div>
        <Router to="/">Home</Router>
        <Router to="/about">About</Router>
        <Router to="/services">Services</Router>
        {/* <Router to="/report">Career</Router> */}
        <Button bg={"#9a1aef"} color={"white"} ><Router to='/signin'  >SignIn</Router></Button>

      </Flex>
     
    </Box>
  );
};
export default Navbar;
