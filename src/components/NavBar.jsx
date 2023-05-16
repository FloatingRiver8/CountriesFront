import { Link } from 'react-router-dom'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    /* Link, */
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Image, Center, Spacer,HStack
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import logo1 from '../assets/World_Safari_travel_transparentLogo.gif'
/* import logo2 from '../assets/Marian_M_Logo_for_World_Safari_travel_website_detailed_realisti_f625f801-fd20-4512-b832-f4bbe3c78156.png'
import logo3 from '../assets/Marian_M_Logo_for_World_Safari_travel_website_jeep_in_color_pal_0258f0b8-ca4d-4e55-9da3-5656db6dcd79.png' */

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Center>
        <Box  mx='1rem'  w='100%'>
            <Flex
                bg={useColorModeValue('brand.100', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 1 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} >
                    <Link to='/home'>
                        <Box boxSize='75px'  >
                            <Image src={logo1} mr={12}></Image>
                        </Box>
                    </Link>
                
                    <Stack display={{ base: 'none', md: 'flex' }} justify={{ base: 'center', md: 'center' }} bg='brand.100' boxShadow='md' px='4rem' mx='2rem' w='100%' >
                    
                        <DesktopNav/>
                        
                    </Stack>
                    
                </Flex>

{/*                 <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
                    </Button>
                </Stack> */}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
        </Center>
       
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('brand.100', 'gray.800');

    return (
        <Center>
        <Flex direction={'row'} spacing={8} align="center" w='100%'>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} w='100%' h='10' >
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link  to={navItem.href ?? '#'}>
                            <Button
                                p={2}
                                bg='brand.100'
                                fontSize={'lg'}
                                fontWeight={500}                            
                                color={'brand.300'}
                                /* bg={'brand.400'} */
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                                </Button>
                            </Link>
                        </PopoverTrigger>

{/*                         {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Flex w='100%'>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                        
                                    ))}
                                   
                                </Flex>
                            </PopoverContent>
                        )} */}
                    </Popover>
                </Box>
                
            ))}
        </Flex>
        </Center>
    );
};

/* const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};
 */
const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link
                py={2}
                as={Link}
                to={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Link>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

/*  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }  */

const NAV_ITEMS = [

    {
        label: 'To landing',
        href: '/',



        /*     <NavItem href: '/'> </NavItem>   */
        /*         children: [
                    {
                        label: 'Explore Design Work',
                        subLabel: 'Trending Design to inspire you',
                        href: '#',
                    },
                    {
                        label: 'New & Noteworthy',
                        subLabel: 'Up-and-coming Designers',
                        href: '#',
                    },
                ], */
    },
    {
        label: 'About us',
        href: '/about'
        /*         children: [
                    {
                        label: 'Job Board',
                        subLabel: 'Find your dream design job',
                        href: '#',
                    },
                    {
                        label: 'Freelance Projects',
                        subLabel: 'An exclusive list for contract work',
                        href: '#',
                    },
                ], */
    },
    {
        label: 'Create activity',
        href: '/form',
    },
    /*     {
            label: 'Hire Designers',
            href: '#',
        }, */
];