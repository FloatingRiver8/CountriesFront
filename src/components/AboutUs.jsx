import React from 'react'
import Footer from './Footer'


import {
  Box, Text, Stack, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, SimpleGrid, Center, FormControl, FormLabel, Select, Button, Heading, Drawer, Image,

} from '@chakra-ui/react'
import NavBar from './NavBar'

function AboutUs() {

  return (


    <Box bg={"brand.100"}  w="100%" >

      <NavBar />

      <Stack
        /* bg={useColorModeValue('gray.50', 'gray.800')} */
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}>
        <Heading>Who are we?</Heading>

        <Text fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'6xl'}>At Your World Safari!, we believe that travel is about more than just seeing the sights. It's about experiencing new cultures, trying new things, and making memories that will last a lifetime.

          That's why we offer custom-made trips that are tailored to your individual interests and budget. We can help you plan a trip that includes everything from hiking in the Alps to snorkeling in the Caribbean.</Text>

        <Text>We know that everyone travels differently, so we take the time to get to know you and your travel goals. We'll work with you to create a trip that's perfect for you, whether you're looking for an adventure-filled vacation or a relaxing getaway.</Text>

        <Text>We're passionate about travel, and we want to help you make the most of your next trip. Contact us today to learn more about our custom-made trips.</Text>

        Our Services

        <Text>We offer a wide range of services to help you plan your perfect trip, including: </Text>

        <Text>Destination research
          Itinerary planning
          Flight and hotel booking
          Transportation and rental car arrangements
          Visa and passport assistance
          Tour and activity bookings
          Currency exchange
          Travel insurance
          We also offer a variety of add-on services, such as:

          Concierge services
          Personal shopping
          Private dining
          Car and yacht rentals
          Event planning </Text>


        <Heading>Our Team</Heading>

        <Text>Our team of experienced travel experts is here to help you plan your perfect trip. We have a deep knowledge of the world and we're passionate about helping people travel.

          We're committed to providing you with the best possible service and we're here to answer any questions you have. Contact us today to get started on planning your next trip.</Text>

        <Heading>Testimonials</Heading>


        <Text> Here are a few testimonials from our happy customers:

          {/*     "I had a wonderful time on my trip to Italy. [Travel Agency Name] did a great job of planning everything and making sure that I had a smooth trip. I would definitely recommend them to anyone planning a trip to Italy." - John Smith
        "I was so impressed with the service that I received from [Travel Agency Name]. They were so knowledgeable about the destination and they really took the time to understand what I was looking for in a trip. I would definitely use them again." - Jane Doe
        "I had the best time on my trip to Thailand. [Travel Agency Name] did a great job of planning everything and making sure that I had a safe and enjoyable trip. I would definitely recommend them to anyone planning a trip to Thailand." - Susan Jones */}

        </Text>



        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Perfect trip to Italy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              "I had a wonderful time on my trip to Italy. 'Your World Safari' did a great job of planning everything and making sure that I had a smooth trip. I would definitely recommend them to anyone planning a trip to Italy." - John Smith
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  About the service!
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              "I was so impressed with the service that I received from 'Your World Safari'. They were so knowledgeable about the destination and they really took the time to understand what I was looking for in a trip. I would definitely use them again." - Jane Doe
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  My dream come true in Thailand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              "I had the best time on my trip to Thailand. 'Your World Safari' did a great job of planning everything and making sure that I had a safe and enjoyable trip. I would definitely recommend them to anyone planning a trip to Thailand." - Susan Jones
            </AccordionPanel>
          </AccordionItem>
        </Accordion>


        <Heading>Contact Us </Heading>

        <Text>To learn more about our custom-made trips, please contact us today. We would be happy to answer any questions you have and help you plan your perfect trip.
        </Text>

      </Stack>

      <Footer> </Footer>
    </Box>


  )
}

export default AboutUs