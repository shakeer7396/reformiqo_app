import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../photos/logo.png'
import map from '../photos/surat map.jpeg'

const Footer = () => {
 const navigate=useNavigate();
  return (
    <Box w={"100"} h={'60'} bg={"#452858"} paddingTop={"10"} paddingLeft={"20"}>
      <Flex>
      <Box w={"20%"}>
      <Image src={logo} alt='Dan' height={"50"}
      width="300px" />
      <Text fontSize={"18px"} color={'white'} >Reformiqo Business Services PVT.LTD</Text>
      <Text color={"white"}>A journey of Reformation Revoluation and Reclamation We are Reformiqo</Text>
      </Box>
      <Box w={"20%"} color={"white"}>
        <Text onClick={()=>navigate('/')} >Home</Text>
        <Text onClick={()=>navigate('/about')}>About</Text>
        <Text onClick={()=>navigate('/services')}>Service</Text>
        <Text onClick={()=>navigate('/career')}>Career</Text>
        </Box>
      <Box w={"20%"}  color={"white"}>
      <Text fontSize={"20px"}>Account</Text>
        <Text onClick={()=>navigate('/signup')}>Sign Up</Text>
        <Text onClick={()=>navigate('/signin')}>Sign In</Text>
        <Text onClick={()=>navigate('/recover')}>Forgot Password</Text>
      </Box>
      <Box w={"30%"}>
      <Image src={map} alt='Dan' height={"150"} borderRadius={'15'}
      width="800px" />
      </Box>
      </Flex>
    </Box>
  )
}

export default Footer