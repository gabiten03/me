import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link } from "@chakra-ui/react";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaEnvelope, FaLinkedin } from 'react-icons/fa'

import React from 'react'


function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <>
            <VStack p={5}>
                <Flex w="100%" margin={5}>
                    <Heading marginLeft={15}

                        ml="8" size="md" fontWeight='semibold' color="cyan.800">Gabriel Lorenzo

                    </Heading>


                    <Spacer></Spacer>

                    <Link ml={8} href="mailto://gabiten@gabiten.ga" isExternal>
                        <IconButton icon={<FaEnvelope />} isRound='true' ></IconButton>
                    </Link>
                    <Link ml={8} href="https://ar.linkedin.com/in/glorenzo" isExternal>
                        <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
                    </Link>


                    <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Flex>

            </VStack>
        </>
    )
}

export default Header
