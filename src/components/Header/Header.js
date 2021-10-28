<<<<<<< HEAD
import * as React from "react";
import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link, Heading } from "@chakra-ui/react";
import { Flex, VStack, Spacer, Grid } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { Us, Es } from 'react-flags-select';
=======

import { useColorMode } from "@chakra-ui/color-mode";

import { FaSun, FaMoon } from 'react-icons/fa'
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8

import i18n from '../../translations/i18n'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

<<<<<<< HEAD
import { Box, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, Modal, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl
} from "formik-chakra-ui";



import * as Yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const initialValues = {
    name: "",


    notes: "",

};
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),
    notes: Yup.string()
        .max(250, 'Demasiado Largo!')
        .required('Requerido'),
    email: Yup.string().email('Mail Invalido').required('Requerido'),

});

function Header() {
    let value;
    const [language, setLanguage] = useState('es');

    const handleOnclick = (e) => {
        e.preventDefault();
        if (language === 'es') { value = 'en' } else { value = 'es' }
        setLanguage(value);
        i18n.changeLanguage(language);
    }
    const isLang = language === "en";
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>
            <Grid>
                <VStack p={5}>
                    <Flex w="100%" margin={5}>
                        <Heading marginLeft={15}
                            ml="8" size="md" fontWeight='semibold' color="cyan.800">
                            <Link ml={8} href="/" isExternal>
                                Gabriel Lorenzo
                            </Link>
                        </Heading>
                        <Spacer></Spacer>

                        <IconButton onClick={onOpen} icon={<FaEnvelope />} isRound='true' ></IconButton>


                        <Link ml={8} href="https://ar.linkedin.com/in/glorenzo" isExternal>
                            <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
                        </Link>
                        <IconButton ml={8} icon={isLang ? <Es /> : <Us />} isRound='true' onClick={handleOnclick}>
                        </IconButton>
                        <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                    </Flex>

                </VStack>

            </Grid>

            <Modal isOpen={isOpen} onClose={onClose} size="full"  >
                <ModalOverlay />
                <ModalContent>

                    <ModalCloseButton size="lg" color="#4e4edd" />
=======
export default function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
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
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        ClickDigital
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>


                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
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

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
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
            </Flex>

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

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        children: [
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
        ],
    },
    {
        label: 'Find Work',
        children: [
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
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];

/* function Header() {

    return (
        <Grid>
            <VStack p={5}>
                <Flex w="100%" margin={5}>
                    <Heading marginLeft={15}
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8

                    <ModalBody marginTop={20}>


                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {({ handleSubmit, values, errors }) => (
                                <Box

                                    maxWidth={800}
                                    p={6}
                                    m="10px auto"
                                    as="form"
                                    onSubmit={handleSubmit}
                                >
                                    <Heading>Estaría feliz de escuchar de vos !!!</Heading>
                                    <InputControl marginY={3} name="name" label="Nombre" />
                                    <InputControl marginY={3} name="email" label="Email" />
                                    <TextareaControl marginY={3} name="notes" label="Mensaje" />
                                    <ModalFooter>
                                        <SubmitButton colorScheme="blue" marginY={8} marginX={6}>Enviar</SubmitButton>

                                        <Button colorScheme="blue" onClick={onClose} variant="outline">Cerrar</Button>

                                    </ModalFooter>

<<<<<<< HEAD
                                </Box>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
=======

                </Flex>

            </VStack>
        </Grid>
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
    )
}

export default Header */
