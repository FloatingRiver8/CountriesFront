import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getAllCountries, postActivity } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import s from './styles/form.module.css'

import { MdArrowBackIosNew } from "react-icons/md";

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
  ListItem,
  Icon
  /* Link, */
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


let wordAtLeastOneLetter = new RegExp('^[a-zA-Z]{3,}$')
/* let regOneToFive = new RegExp('^[1-5]$') */
let regOneToTen = new RegExp('^[1-24]$')



const validateForm = (input) => {
  let inputError = {}

  if (!wordAtLeastOneLetter.test(input.name)) {
    inputError.name = "Name required"
  } else { inputError.name = "" }
  if (!inputError.difficulty) {

    inputError.difficulty = "Choose difficulty"
  } else if (
    inputError.difficulty) {
    inputError.difficulty = "ya esta"
  }
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
  const handleAlertAndHome = () => {
    toast.dismiss()
    history.push('/home')
  }
  const alertAndHome = () => toast(() => (

    <Box >
      Get prepared, {input.name} is on the list!
      <Button my='0.7rem' onClick={handleAlertAndHome}>
        close
      </Button>
    </Box>


  ), {

    duration: Infinity
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)

    if (input.name && input.difficulty && input.duration && input.season && input.countries !== "") {

      dispatch(postActivity(input))

      alertAndHome()
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
    <Box bg="brand.100" h='100vh' >


      <div   >
        <Toaster toastOptions={{
          className: '',
          style: {
            padding: '16px',
            backgroundColor: "#FEEBC8",
          }
        }} gutter={24} />
      </div>


      <Box  >
        <Stack direction={'row'} py='1rem' pl='3rem'  >
          <Link to={"/home"}>
            <Icon
              as={MdArrowBackIosNew}
              color="orange.400"
              boxSize={5}
              className={`${s.scale_up_left}`}
              _hover={{
                color: "grey",
                /* boxSize: "7", */

              }}
            />
            <Icon

              as={MdArrowBackIosNew}
              color="orange.400"
              boxSize={5}
              className={`${s.scale_up_left}`}
              _hover={{
                color: "grey",
                /*  boxSize: "7", */

              }}
            />
            <Button
              className={`${s.anim_button}`}
              fontFamily={"body"}
              bg="base.green.100"
              color={"grey"}
              _hover={{
                color: "orange.400",
              }}>
              {" "}
              Home
            </Button>
          </Link>
        </Stack>
      </Box>
      <Flex
        /* h='3vh'    */
        /* pt='6rem' */

        align={'center'}
        justify={'center'}
        bg={useColorModeValue('brand.100', 'gray.800')}>
        <Stack spacing={4} /* mx={'auto'} maxW={'lg'} */  >
          <Stack align={'center'} pt='0rem'>
            <Heading fontSize={'4xl'} textAlign={'center'} color="brand.300">
              Create your activity!
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              In the mood for... ✌️
            </Text>
          </Stack>


          <form onSubmit={handleSubmit} >
            <Box
              className={`${s.scale_up_center_form}`}
              rounded={'lg'}
              bg={useColorModeValue('brand.400', 'gray.700')}
              boxShadow={'lg'}
              p={8}>

              <HStack>
                <Box>
                  <FormControl id="activity" isRequired>
                    <FormLabel textAlign={'center'} color="brand.300">Activity name</FormLabel>
                    <Input type="text"
                      value={input.name}
                      name='name'
                      onChange={handleChange} />
                    {inputError.name && (<p className={`${s.form_error}`}>{inputError.name}</p>)}
                  </FormControl>
                </Box>

                <Box w='50%'>
                  <FormControl id="season" isRequired>
                    <FormLabel textAlign={'center'} color="brand.300">Season</FormLabel>
                    <Select onChange={handleSeason}>
                      <option value="" hidden></option>
                      {season.map(e => (
                        <option value={e} name="season" key={e} >{e}</option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </HStack>

              <HStack py='2'>
                <FormControl id="duration" isRequired>
                  <FormLabel textAlign={'center'} color="brand.300">Duration in hours</FormLabel>
                  <Select
                    value={input.duration}
                    name='duration' onChange={handleChange} >
                    <option value="" hidden></option>
                    {duration.map(e => (
                      <option value={e} name="duration" key={e} >{e}</option>
                    ))}
                  </Select>
                  {inputError.duration && (<p className={`${s.form_error}`}>{inputError.duration}</p>)}
                </FormControl>
                <FormControl id="difficulty" isRequired>
                  <FormLabel textAlign={'center'} color="brand.300">Difficulty</FormLabel>

                  <Select
                    value={input.difficulty}
                    name='difficulty' onChange={handleChange} >
                    <option value="" hidden></option>
                    {difficulty.map(e => (
                      <option value={e} name="difficulty" key={e} >{e}</option>
                    ))}
                  </Select>
                  {inputError.difficulty && (<p className={`${s.form_error}`}>{inputError.difficulty}</p>)}
                </FormControl>
              </HStack>

              <FormControl id="countries" isRequired>
                <FormLabel textAlign={'center'} color="brand.300">Countries</FormLabel>
                <Select onChange={handleSelect}>
                  <option value="" hidden name="countSelect" ></option>
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

                        <ListItem onClick={() => handleDelete(el)} key={el} className={`${s.form_ulLi}`}  >
                          {el}
                        </ListItem>

                      )}
                    </SimpleGrid>

                  </UnorderedList>
                </Box>
              </Center>
              {/* </Box> */}




              <Stack spacing={10} pt={5}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'brand.400'}
                  color={'brand.300'}
                  borderWidth='2px'
                  borderColor="brand.100"
                  _hover={{
                    borderColor: 'orange.300'

                  }}>

                  Create
                </Button>
              </Stack>



            </Box>
          </form>


        </Stack>
      </Flex>







    </Box>
  )
}

export default Form