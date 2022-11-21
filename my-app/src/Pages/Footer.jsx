import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../photos/logo.png'
import map from '../photos/surat map.jpeg'

const Footer = () => {
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
        <Text >Home</Text>
        <Text >About</Text>
        <Text >Service</Text>
        <Text >Career</Text>
        </Box>
      <Box w={"20%"}  color={"white"}>
      <Text>Account</Text>
        <Text>Sign Up</Text>
        <Text>Sign In</Text>
        <Text>Forgot Password</Text>
      </Box>
      <Box w={"20%"}>
      <Image src={map} alt='Dan' height={"130"} borderRadius={'15'}
      width="600px" />
      </Box>
      </Flex>
    </Box>
  )
}

export default Footer