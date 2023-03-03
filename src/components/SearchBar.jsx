

import { useDispatch } from 'react-redux'
import { getOneCountry } from '../actions'
import style from './styles/searchBar.module.css'

import { Box, Center, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'


export default function SearchBar({ contFilter }) {

    const dispatch = useDispatch()




    //para que me renderice cuando no hay onChanges en los select y tome "All" por default, de esta manera puedo hacer búsquedas en All y que las muestre
    if (contFilter === "") {
        contFilter = "All continents"
    }


    const handleChange = (e) => {
        /* //MEJORA para buscar por país pero dentro del mismo continente
        Envío el estado del select del continente como segundo payload  para luego usarlo haciéndo búsqueda específica del continente en el que estoy */

        dispatch(getOneCountry(e.target.value, contFilter))
        /*  setAcuseState(e.target.value) */
        /* console.log(e.target.value) */
    }




    return (
        <div>

            {/* //SearchBar */}
            <Box bg={"brand.green.100"}>

                <Box w='100%' pb='1rem'/* mt={['2rem', '2rem', '3rem']} ml={['0rem', '0', '0']} */>
                    <InputGroup >
                        <InputRightElement
                            pointerEvents="none"
                            children={<BiSearchAlt color="gray.800" />}
                        />
                        <Input h="3rem" type="text" w={['100%', '100%', '100%', '100%']}
                            bg="brand.100"
                            boxShadow='md'

                            onChange={(e) => handleChange(e)}
                            placeholder="Search country..."
                        />
                    </InputGroup>
                </Box>

            </Box>
        </div>
    )
}
