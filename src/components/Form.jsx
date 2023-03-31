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
  Select
  /* Link, */
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


let wordAtLeastOneLetter = new RegExp('^[a-zA-Z]{3,}$')
let regOneToFive = new RegExp('^[1-5]$')
let regOneToTen = new RegExp('^[1-9]$')



const validateForm = (input) => {
  let inputError = {}

  if (!wordAtLeastOneLetter.test(input.name)) {
    inputError.name = "Name required"
  } else { inputError.name = "" }
  if (!input.difficulty) {
    inputError.difficulty = "A number is required"
  } else { inputError.difficulty = "" }
  if (!regOneToFive.test(input.difficulty)) {
    inputError.difficulty = "value must be under 5"
  } else { inputError.difficulty = "" }
  if (!regOneToTen.test(input.duration)) {
    inputError.duration = "value must be under 10"
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

  const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 0, 21, 22, 23, 24]


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

  const [showPassword, setShowPassword] = useState(false);

  //Render

  return (
    <div className={`${s.form_mainDiv}`}>
      <Link to='/home'>
        <button className={`${s.form_toHomeBtn}`}>Home</button>
      </Link>
      <h1>Create your activity</h1>

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
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>


          <form onSubmit={handleSubmit} >
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <HStack>

                  <Box >

                    <FormControl id="firstName" isRequired>
                      <FormLabel>Activity name</FormLabel>
                      <Input type="text"
                        value={input.name}
                        name='name'
                        onChange={handleChange} />
                      {inputError.name && (<p className={`${s.form_error}`}>{inputError.name}</p>)}
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Season</FormLabel>
                      <Select onChange={handleSeason} required>
                        <option value="" hidden>Select season</option>
                        {season.map(e => (
                          <option value={e} name="season" key={e} >{e}</option>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Duration</FormLabel>
                  <Select
                    value={input.duration}
                    name='duration' onChange={handleChange} >
                    {duration.map(e => (
                      <option value={e} name="duration" key={e} >{e}</option>
                    ))}
                  </Select>
                  {inputError.duration && (<p className={`${s.form_error}`}>{inputError.duration}</p>)}
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Difficulty</FormLabel>
                  <Input type='text'
                    value={input.difficulty}
                    name='difficulty'
                    onChange={handleChange} />
                  {inputError.difficulty && (<p className={`${s.form_error}`}>{inputError.difficulty}</p>)}

                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Countries</FormLabel>
                  <Select onChange={handleSelect}>Countries:

                    <option value="" name="countSelect" >Countries</option>
                    {countries?.map(e => {

                      return (
                        <option value={e.id} name="countries" key={e.id}>{e.name}</option>
                      )

                    })}

                  </Select>

                  {/* Renderizado de los countries seleccionados y su delete */}
                  <Box className={`${s.form_ul}`}>
                    <ul >
                      <li>{input.countries.map(el =>
                        <Box onClick={() => handleDelete(el)} key={el} className={`${s.form_ulLi}`}>
                          {el}
                        </Box>
                      )} </li>
                    </ul>
                  </Box>


                </FormControl>

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







    </div>
  )
}

export default Form