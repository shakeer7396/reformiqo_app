import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import home from '../photos/homep.png'
// import bgimg from '../photos/backimg.webp'
import aboutbg from '../photos/hm2.webp'
import Footer from './Footer'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box>
  <Image src={home} alt='Dan' height={"600"}
      width="100%" />
</Box>
<Box backgroundImage={aboutbg} height={"600"}
      width="100%" >
  <Box height={"100"}
      width="40%"
      ml={"50%"} pr={'10'}
       >
    <Heading color={"#9a1aef"} pt={'20'}>About</Heading>
    <Text color={"white"} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis.</Text>

    <Text mt={'18'} pt={'15'} color={"white"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis</Text>

    <Text mt={'18'} pt={'15'} color={"white"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis</Text>

    <Button p={'6'} mt={"25"} bg={"#9a1aef"}>Read More</Button>
  </Box>
</Box>

    <Footer />
    </Box>
  )
}

export default Home