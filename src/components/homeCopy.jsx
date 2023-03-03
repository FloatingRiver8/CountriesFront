import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllCountries, filterByContinent, orderByAlphabet, orderByPopulation, getActivity, getAllActivities } from '../actions'

import SearchBar from './SearchBar'
import Paginate from './Paginate'
import Card from './Card'


import Error from './Error'
import s from './styles/home.module.css'
import f from './styles/form.module.css'

import { Box, SimpleGrid, Center, FormControl, FormLabel, Select, Button, Heading, GridItem } from '@chakra-ui/react'

function Home() {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)
    const [alphOrder, setAlphOrder] = useState("")  // para provocar el renderizado
    const [popOrder, setPopOrder] = useState("")
    const [contFilter, setContFilter] = useState("")

    const error = useSelector(state => state.error)

    const activity = useSelector((state) => state.allActivities)







    //Paginate
    const [currentPage, setCurrentPage] = useState(1);
    const countryPerPage = 9;
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    //me devuelve un array con 15 elementos del 0 al 14.
    const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)


    //seteo el nº de la página en la que estoy, me vuelve del evento que me tira la func. del componente paginador
    const paginator = (pageNumber) => {
        setCurrentPage(pageNumber);
    }



    //Filtro actividades repetidas para mostrar en mi select
    const actvtNames = []
    activity.map((e) => actvtNames.push(e.name))
    const uniqueActivities = actvtNames.filter((name, index) => actvtNames.indexOf(name) === index)


    //Para pasarle a mi componente Card por props
    const country = currentCountry.length && currentCountry.map((c) => {
        return {
            name: c.name,
            flag: c.urlFlag,
            continent: c.continent,
            id: c.id,

        }
    })


    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())


    }, [dispatch,])




    const handleOnContinents = (e) => {
        dispatch(filterByContinent(e.target.value, contFilter))

        // para que siempre esté ordenado según el option del select sin importar si se cambia de continente ya q hace es dispatch cuando pido x continnte
        if (alphOrder === "Z-A") {
            dispatch(orderByAlphabet("Z-A"))
        } else {
            dispatch(orderByAlphabet("A-Z"))
        }

        setContFilter(e.target.value)//actualiza el estado del filtro para renderizar
    }



    const handleOnAlphabet = (e) => {
        dispatch(orderByAlphabet(e.target.value))
        setAlphOrder(e.target.value)//actualiza el estado del filtro
    }



    const handleOnPopulation = (e) => {
        dispatch(orderByPopulation(e.target.value))
        setPopOrder(e.target.value)
    }



    const handleOnActivity = (e) => {
        console.log(e.target.value)
        dispatch(getActivity(e.target.value))

    }




    return (
        <Box  >

            <Box bg={"brand.100"} maxH='full' pt='2rem'>
                <Heading color='gray.500' fontSize='3.5rem'>Enjoy your search!{" "}</Heading>

                        {/* TO FORM ACTIVITY */}

                <Box align={'right'} pr='3rem'>
                    <Link to='/form' >
                        <Button  color= 'brand.500' bg="brand.100" _hover={{ color:'orange.300'}}>
                           CREATE ACTIVITY
                        </Button>
                    </Link>
                </Box>

                <SimpleGrid columns={[1]} spacing='7rem'>
                    <Center>
                        <Box w={["80%", "70%", "40%", "30%"]} >
                            <SearchBar contFilter={contFilter} />
                        </Box>

                    </Center>
                </SimpleGrid>





                <SimpleGrid w="100%" /* my={['1rem', '1rem', '1rem']} */ columns={[2, 2, 4, 4]} spacing='4px'>
                    <Center>

                        <Box w="62%" /* my={["0.5rem", "0.5rem", "1rem"]} */>
                            <FormControl>
                                <Center>
{/*                                     <FormLabel
                                        fontFamily={"heading"}
                                        textTransform={"uppercase"}
                                        fontWeight={"bold"}
                                        color={"orange.400"}
                                    >
                                        Continent
                                    </FormLabel> */}
                                </Center>
                                <Select

                                    id="continent"
                                    bg="brand.100"
                                    
                                    fontFamily={"heading"}
                                    textTransform={"uppercase"}
                                    textAlign='center'
                                    fontWeight={"bold"}
                                    color={"orange.400"}
                                    defaultValue={'ALL CONTINENTS'}
                                    /* placeholder="ALL CONTINENTS"  */
                                    onChange={(e) => handleOnContinents(e)}
                                >
                                    <option value='All continents' key='All'>All continents</option>
                                    <option value='Africa' key='Africa'>Africa</option>
                                    <option value='Antarctica' key='Antarctica'>Antarctica</option>
                                    <option value='Europe' key='Europe'>Europe</option>
                                    <option value='North America' key='North America'>North America</option>
                                    <option value='Oceania' key='Oceania'>Oceania</option>
                                    <option value='South America' key='South America'>South America</option>
                                    <option value='Asia' key='Asia'>Asia</option>

                                </Select>
                            </FormControl>
                        </Box>
                    </Center>

                    <Center>
                        <Box w="60%" /* my={["0.5rem", "0.5rem", "1rem"]} */>
                            <FormControl>
                                <Center>
{/*                                     <FormLabel
                                        fontFamily={"heading"}
                                        textTransform={"uppercase"}
                                        fontWeight={"bold"}
                                        color={"orange.400"}
                                    >
                                        Alph. order
                                    </FormLabel> */}
                                </Center>
                                <Select
                                    id="onAlphabet"
                                    bg="brand.100"
                                    placeholder="ORDER"
                                    fontFamily={"heading"}
                                    textTransform={"uppercase"}
                                    textAlign='center'
                                    fontWeight={"bold"}
                                    color={"orange.400"}
                                    defaultValue={'ORDER'}
                                    onChange={(e) => handleOnAlphabet(e)}
                                >
                                    <option value="A-Z" key="ascendent">A-Z</option>
                                    <option value="Z-A" key="descendent">Z-A</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Center>

                    <Center>
                        <Box w="60%" /* my={["0.5rem", "0.5rem", "1rem"]} */>
                            <FormControl>
                                <Center>
  {/*                                   <FormLabel
                                        fontFamily={"heading"}
                                        textTransform={"uppercase"}
                                        fontWeight={"bold"}
                                        color={"orange.400"}
                                    >
                                        POPULATION
                                    </FormLabel> */}
                                </Center>
                                
                                <Select
                                    id="population"
                                    bg="brand.100"
                                    placeholder="POPULATION"
                                    fontFamily={"heading"}
                                    textTransform={"uppercase"}
                                    textAlign='center'
                                    fontWeight={"bold"}
                                    color={"orange.400"}
                                    defaultValue={'POPULATION'}
                                    onChange={(e) => handleOnPopulation(e)}

                                >
                                    {/*  <option value="population" name="population">Population</option> */}
                                    <option value="min" key="min">Min</option>
                                    <option value="max" key="max">Max</option>
                                </Select>
                                
                            </FormControl>
                        </Box>
                    </Center>



                    <Center>
                        <Box w="60%" my={["0.5rem", "0.5rem", "1rem"]}>
                            <FormControl>
                                <Center>
{/*                                     <FormLabel
                                        fontFamily={"heading"}
                                        textTransform={"uppercase"}
                                        fontWeight={"bold"}
                                        color={"orange.400"}
                                    >
                                        Activity
                                    </FormLabel> */}
                                </Center>
                                <Select
                                    id="activity"
                                    bg="brand.100"
/*                                     placeholder="ACTIVITY" */
                                    fontFamily={"heading"}
                                    textTransform={"uppercase"}
                                    textAlign='center'
                                    fontWeight={"bold"}
                                    color={"orange.400"}
                                    defaultValue={'activity'}
                                    onChange={(e) => handleOnActivity(e)}


                                >

                                    {/* Activity */}
                                    <option value="1" name="default">Activity</option>
                                    {
                                        uniqueActivities.map((e) => {
                                            return (
                                                <option value={e} name="activity" key={e}>{e} </option>
                                            )

                                        })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Center>



                    <Paginate
                        countryPerPage={countryPerPage}
                        allCountries={allCountries.length}
                        paginator={paginator}
                    />
                </SimpleGrid>

            </Box>


            {/* //SHOWING CARDS */}
            <Center bg='brand.400' py={["0.5rem", "0.5rem", "2rem"]}>
                <SimpleGrid columns={[1, 1, 2, 3]} spacing={50}>
                    {error ? (<Error />) : (country.length && country.map(el => (
                        < Link to={`/country/${el.id}`} style={{ textDecoration: 'none' }} >
                            <Card   country={el} />
                        </Link>
                    ))
                    )}
                </SimpleGrid>
            </Center>
        </Box>
    )
}


export default Home