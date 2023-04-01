import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getAllCountries, postActivity } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'

import s from './styles/form.module.css'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  SimpleGrid,
  Center,
  UnorderedList,
  ListItem
  /* Link, */
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


let wordAtLeastOneLetter = new RegExp('^[a-zA-Z]{3,}$')
let regOneToFive = new RegExp('^[1-5]$')
let regOneToTen = new RegExp('^[1-24]$')



const validateForm = (input) => {
  let inputError = {}

  if (!wordAtLeastOneLetter.test(input.name)) {
    inputError.name = "Name required"
  } else { inputError.name = "" }
  if (!input.difficulty) {
    inputError.difficulty = "An option is required"
  } else { inputError.difficulty = "" }
  if (!regOneToFive.test(input.difficulty)) {
  } else { inputError.difficulty = "" }
    inputError.difficulty = "Choose your difficulty"
  if (!regOneToTen.test(input.duration)) {
    inputError.duration = "An option is required"
  } else { inputError.duration = "" }
  return inputError
}



function Form() {


  const dispatch = useDispatch()
  const history = useHistory()

  const countries = useSelector((state) => state.allCountries)

  const [inputError, setInputError] = useState({})

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  })

  const season = ['Winter', 'Spring', 'Autumn', 'Summer'];

  const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const difficulty = ['Rookie', 'I can do it', 'Like a pro'];

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])



  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value

    })
    console.log(e.target.value)
    //control errores
    setInputError(validateForm({
      ...input,
      [e.target.name]: e.target.value
    }))


  }


  //Handles

  const handleSeason = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        season: e.target.value
      })
      console.log(e.target.value)
    }
  }


  const handleSelect = (id) => {
    if (id.target.value) {
      setInput({
        ...input,
        countries: [...input.countries, id.target.value]
      })

    }
  }


  const handleDelete = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter(c => c !== e)
    })
  }

  //Handle SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)

    if (input.name && input.difficulty && input.duration && input.season && input.countries !== "") {

      dispatch(postActivity(input))
      alert("Activity created succesfully")
      history.push('/home')
    }
    else {

      console.log(inputError)
      alert("some information is missing")
    }


    //limpieza estados de Inputs en cero
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: []
    })


  }

  //Render

  return (
    <Box bg="brand.100">
      <Link to='/home'>
        <button className={`${s.form_toHomeBtn}`}>Home</button>
      </Link>


      {/*  
      <form onSubmit={handleSubmit} >
        <div className={`${s.form_formContainer}`}>

          <div className={`${s.form_inputs}`}>
            <label>Name:</label>
            <input type='text'
              value={input.name}
              name='name'
              onChange={handleChange}
            />
            {inputError.name && (<p className={`${s.form_error}`}>{inputError.name}</p>)}
          </div>

          <div className={`${s.form_inputs}`}>
            <label>Difficulty:</label>
            <input type='text'
              value={input.difficulty}
              name='difficulty'
              onChange={handleChange} />
            {inputError.difficulty && (<p className={`${s.form_error}`}>{inputError.difficulty}</p>)}
          </div>

          <div className={`${s.form_inputs}`}>
            <label>Duration:</label>
            <input type='text'
              value={input.duration}
              name='duration'
              onChange={handleChange} />
            {inputError.duration && (<p className={`${s.form_error}`}>{inputError.duration}</p>)}
          </div>

          <div className={`${s.form_checks}`}>
            <label>Season: </label>
            <select onChange={handleSeason} required>
              <option value="" hidden>Select season</option>
              {season.map(e => (
                <option value={e} name="season" key={e} >{e}</option>
              ))}
            </select>
          </div>


          <div className={`${s.form_select}`}>
            <select onChange={handleSelect}>Countries:

              <option value="" name="countSelect" >Countries</option>
              {countries?.map(e => {

                return (
                  <option value={e.id} name="countries" key={e.id}>{e.name}</option>
                )

              })}

            </select>
*/}
      {/* Renderizado de los countries seleccionados y su delete */}
      {/*             <div className={`${s.form_ul}`}>
              <ul >
                <li>{input.countries.map(el =>
                  <div onClick={() => handleDelete(el)} key={el} className={`${s.form_ulLi}`}>
                    {el}

                  </div>
                )} </li>
              </ul>

            </div>


            <div>
              <button type="submit">Create activity</button>
            </div>


          </div>
        </div>
      </form> */}

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('brand.100', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create your activity!
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              In the mood for... ✌️
            </Text>
          </Stack>


          <form onSubmit={handleSubmit} >
            <Box
              rounded={'lg'}
              bg={useColorModeValue('brand.400', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <HStack>

                  <Box>

                    <FormControl id="activity" isRequired>
                      <FormLabel>Activity name</FormLabel>
                      <Input type="text"
                        value={input.name}
                        name='name'
                        onChange={handleChange} />
                      {inputError.name && (<p className={`${s.form_error}`}>{inputError.name}</p>)}
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="season" isRequired>
                      <FormLabel>Season</FormLabel>
                      <Select onChange={handleSeason}>
                        <option value="" hidden></option>
                        {season.map(e => (
                          <option value={e} name="season" key={e} >{e}</option>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </HStack>
                <HStack>
                  <FormControl id="duration" isRequired>
                    <FormLabel>Duration in hours</FormLabel>
                    <Select
                      value={input.duration}
                      name='duration' onChange={handleChange} >
                      {duration.map(e => (
                        <option value={e} name="duration" key={e} >{e}</option>
                      ))}
                    </Select>
                    {inputError.duration && (<p className={`${s.form_error}`}>{inputError.duration}</p>)}
                  </FormControl>
                  <FormControl id="difficulty" isRequired>
                    <FormLabel>Difficulty</FormLabel>

                    <Select
                      value={input.difficulty}
                      name='difficulty' onChange={handleChange} >
                      {difficulty.map(e => (
                        <option value={e} name="difficulty" key={e} >{e}</option>
                      ))}
                    </Select>
                    {inputError.difficulty && (<p className={`${s.form_error}`}>{inputError.difficulty}</p>)}
                  </FormControl>
                </HStack>

                <FormControl id="countries" isRequired>
                  <FormLabel>Countries</FormLabel>
                  <Select onChange={handleSelect}>Countries:

                    <option value="" name="countSelect" >Countries</option>
                    {countries?.map(e => {

                      return (
                        <option value={e.id} name="countries" key={e.id}>{e.name}</option>
                      )

                    })}

                  </Select>
                </FormControl>
                {/* Renderizado de los countries seleccionados y su delete */}
                {/* <Box className={`${s.form_ul}`}> */}
                <Center>
                <Box w='50%'>
                  <UnorderedList >
                    
                      <SimpleGrid columns={[2, null, 4]} spacing='6px'>
                        {input.countries.map(el =>

                          <ListItem onClick={() => handleDelete(el)} key={el}  className={`${s.form_ulLi}`}  >
                            {el}
                          </ListItem>

                        )}
                      </SimpleGrid>
                    
                  </UnorderedList>
                </Box>
                </Center>
                {/* </Box> */}




                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Create activity
                  </Button>
                </Stack>

              </Stack>

            </Box>
          </form>
        </Stack>
      </Flex>







    </Box>
  )
}

export default Form