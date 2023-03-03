
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
   
} from '@chakra-ui/react';


export default function Card({ country }) {

    const IMAGE =
        'https://images.pexels.com/photos/220177/pexels-photo-220177.jpeg?auto=compress&cs=tinysrgb&w=800';
    return (
        <div >
            <div key={`${country.id}`}>
                <Center py={10}>
                    <Box
                        role={'group'}
                        p={10}
                        maxW={'330px'}
                        w={'full'}
                        bg="brand.100" 
                        _hover={{ bg:'orange.200'}}/* {useColorModeValue('white', 'gray.800')} */
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                              <Center>
                        <Box
                            rounded={'lg'}
                            mt={-20}
                            pos={'relative'}
                            height={'115px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 3,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(10px)',
                                zIndex: -1,
                               
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>
                             
                            <Image
                                rounded={'lg'}
                                height={115}
                                width={141}
                                objectFit={'cover'}
                                src={country.flag}
                                
                            />
                           
                         
                        </Box>
                        </Center>
                        <Stack pt={5} align={'center'}>
                            <Heading fontSize={'2xl'} fontFamily={'heading'} fontWeight={500}>
                                {country.name}
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}  color= 'brand.500' >
                                    {country.continent}
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
            </div>
        </div>
    )
}
