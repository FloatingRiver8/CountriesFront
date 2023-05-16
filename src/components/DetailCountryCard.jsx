import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailCountryCardById } from '../actions'
import s from './styles/detailCountryCard.module.css'

import ActivityCard from './ActivityCard'
import Card from './Card'
import NavBar from './NavBar'


import {
    Box,Text, SimpleGrid, Center, Image,

} from '@chakra-ui/react'



export default function DetailCountryCard() {




    const dispatch = useDispatch()


    const oneById = useSelector((state) => state.oneById)
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible) //para las actividades, renderizado con botón
    console.log("click")
    }


    let { id } = useParams();
    useEffect(() => {
        dispatch(DetailCountryCardById(id))
        /* console.log(id) */
    }, [dispatch, id])


    /* Las Actividades que me vienen incluidas en el estado oneCountry ya que en el back le sumé que me traiga lo que esté en la BD del modelo Activities */
    const IMAGE =
        'https://images.pexels.com/photos/220177/pexels-photo-220177.jpeg?auto=compress&cs=tinysrgb&w=800';

        
    return (

        <Box bg={"brand.100"}  w='100%' >

            <NavBar />

            {/* ID Card render */}

    <Center pt='6rem'>
            <Box 
                p={10}
                maxW={'330px'}
                w={'full'}
                bg="brand.100"
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
                    src={oneById.urlFlag}
                    />

                    </Box>
                </Center>


            <Box pt='6'>
                <Text>{oneById.name}</Text>
                <Text>Capital: {oneById.capital}</Text>
                <Text>Id:{oneById.id}</Text>
                <Text>Continent: {oneById.continent}</Text>
                <Text>Subregion: {oneById.subregion}</Text>
                <Text>Area: {oneById.area}</Text>
                <Text>Population: {oneById.population}</Text>
            </Box>
                </Box>

</Center>
           
            <ActivityCard oneById={oneById} />
           
        </Box>

    )
}

