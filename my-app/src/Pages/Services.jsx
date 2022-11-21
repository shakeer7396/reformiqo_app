import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdAccountCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Navbar />
      <Box p={"20"}>
        <Flex>
        <Box p={'10'} color={"white"}>
          <Flex gridGap={'10'}>
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
          </Flex>
          <Flex gridGap={'10'} mt={'10'}>
          <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={()=>navigate('/singleService')}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'}>
            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
          </Flex>
        </Box>
        <Box p={'10'}>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic molestiae, ullam ipsa et minima ut itaque nobis atque id in est consequatur dolores. Natus iure pariatur at dolores amet quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione necessitatibus, accusamus ipsam inventore et, dolor recusandae quam itaque similique earum veritatis. Sequi, iste non optio labore sapiente voluptatibus aperiam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et a, unde, dicta iusto soluta at magnam fuga sit, dolorum velit error. Facilis nostrum quia impedit enim repudiandae! Repudiandae, impedit aspernatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae, distinctio iure minus voluptas architecto numquam eligendi quisquam fugiat? Explicabo commodi voluptatem modi voluptatibus facere sit velit quam pariatur quod!
        </Text>
        <Text mt={'10'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam magni, reprehenderit, facilis nisi minus quasi porro doloremque pariatur praesentium sint unde nemo debitis ullam quis ea laborum quod. Amet.</Text>
        </Box>
        </Flex>
      </Box>
      <Footer />
    </div>
  )
}

export default Services