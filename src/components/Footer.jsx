import { Link } from 'react-router-dom'
import {
    Box,
    chakra,
    Container,
    /* Link, */
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import logo1 from '../assets/Marian_M_Logo_for_World_Safari_travel_website_detailed_realisti_12de2200-fb0b-4107-8c10-9f7e323a9db6.png'
  
  const Logo = () => {
    return (
        <Link to='/home'>
        <Box boxSize='75px'  >
            <Image src={logo1} mr={12}></Image>
        </Box>
    </Link>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box alignSelf={'center'}>
              <Link to='/home'>
                <Logo color={useColorModeValue('gray.700', 'white')} />
                </Link>
              </Box>
              <Text fontSize={'sm'}>
                © 2023 YWS. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6} alignSelf={'center'}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
