import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import aboutbg from '../photos/hm2.webp'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'


const About = () => {
  return (
    <div>
      <Navbar />
      <Box backgroundImage={aboutbg} height={"850"}
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
  <Box mt={'500'}>
  <Flex>
   <Box p={"10"}>
    <Heading>Our Approach / Out Process</Heading>
    <Text color={"white"}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis, nemo quam esse dicta delectus minus repellat saepe cupiditate dolores ratione fugiat, quod obcaecati voluptatum? Dolor quisquam alias consequuntur asperiores.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero iure quia blanditiis asperiores, delectus eum voluptatibus, quasi deleniti iusto repudiandae fugit, aliquam dolore vel vero aliquid tempora ipsam omnis.
    </Text>
   </Box>
   <Box p={"10"}>
   <Heading>Get acquainted with reforms</Heading>
    <Text color={"white"}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis, nemo quam esse dicta delectus minus repellat saepe cupiditate dolores ratione fugiat, quod obcaecati voluptatum? Dolor quisquam alias consequuntur asperiores.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero iure quia blanditiis asperiores, delectus eum voluptatibus, quasi deleniti iusto repudiandae fugit, aliquam dolore vel vero aliquid tempora ipsam omnis.
    </Text>
   </Box>
   </Flex>
  </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default About