

import s from "./styles/activity.module.css"

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Center
} from '@chakra-ui/react'

/* Cartitas de actividades */

function ActivityCard({oneById}) {


 

/*     <div className={`${s.activity_actvMainDiv}`}>

      {oneById.activities?.map((e) => {

        return (
          <div className={`${s.activity_actvEachDiv}`} key={e.id}>
            <h4>Activity: </h4> <p>{e.name}</p>
            <p>Difficulty: {e.difficulty}</p>
            <p>Duration: {e.duration}</p>
            <p>Season: {e.season}</p>
          </div>)
      })}
    </div> */


return(
  <Center bg={"brand.100"} maxW='100vW' py= '1rem'>
   <Box bg="brand.400"  width= '50%' alignSelf={'center'} my='5rem'> 

<TableContainer   >
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Enjoy your activities!</TableCaption>
    <Thead  width= '50%'>
      <Tr>
        <Th textAlign={'center'}>Activity</Th>
        <Th textAlign={'center'}>Difficulty</Th>
        <Th textAlign={'center'}>Duration</Th>
        <Th textAlign={'center'}>Season</Th>
      </Tr>
    </Thead>
     
    {oneById.activities?.map((e) => {
      return(
       
   
      <Tr bg= "white"  >
        <Td  textAlign={'center'}>{e.name}</Td>
        <Td textAlign={'center'}>{e.difficulty}</Td>
        <Td textAlign={'center'}>{e.duration}</Td>
        <Td textAlign={'center'}>{e.season}</Td>
      </Tr>   
  
    
     )})}
    
  </Table>
</TableContainer>
</Box>
</Center>
)}
  


export default ActivityCard