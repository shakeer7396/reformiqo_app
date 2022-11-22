import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdAccountCircle } from 'react-icons/md';
import {FiLock} from 'react-icons/fi'
import {TiPointOfInterestOutline} from 'react-icons/ti'
import {TbBrandSnapchat} from 'react-icons/tb'
import {SlEnvolope} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

const Services = () => {
  const navigate=useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Navbar />
      <Box
      height={"100"}
      width="100%"
      margin={"auto"}     
      background={'black'}
    >     
     <Heading color={"white"}>Services</Heading>
     <Text color={"white"}>Our best Services</Text>
    </Box>
      <Box p={"20"}>
        <Flex>
        <Box p={'10'} color={"white"}>
          <Flex gridGap={'10'}>
         
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}  >


            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={'20'} fontSize={'30'}>Accounts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
          <MdAccountCircle style={{width:"400",height:"400",paddingLeft:"10",marginTop:"-150",color:"#9a1aef"}}/>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum ipsa illo delectus. Eos nulla, saepe dignissimos sapiente molestias voluptatum incidunt rem aliquid, illo quos maiores quisquam, dolor molestiae quas.</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

            <MdAccountCircle style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}} />
            <Heading>Accounts</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>

            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}>
            <FiLock style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}} />
            <Heading>Roles & Permissions</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
            
            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}>
            <TiPointOfInterestOutline style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}} />
            <Heading>Integration</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>
          </Flex>

          <Flex gridGap={'10'} mt={'10'}>

          <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}>
            <TbBrandSnapchat style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}} />
            <Heading>Chat Bots</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>

            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}>
            <SlEnvolope style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}}/>
            <Heading>In-App Messaging</Heading>
            <Text>Manage an unlimitted number of acconts from one place</Text>
            </Box>

            <Box w={'30'} h={'60'} bg={'black'} borderRadius={'15'} p={'5'} onClick={onOpen}>
            <BiBook style={{width:"80",height:"80",paddingLeft:"10",color:"#9a1aef"}} />
            <Heading>Knowledge Base</Heading>
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