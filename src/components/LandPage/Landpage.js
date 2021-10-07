import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { HStack, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import logo from '../../../src/AvatarMaker.svg'

function Landpage() {
    return (
        < >
            <HStack justifyContent="center">
                <Flex >
                    <Text paddingTop={10}

                        bgGradient={useColorModeValue("linear(9deg, rgba(108,101,226,1) 3%, rgba(78,78,221,1) 48%, rgba(143,165,210,1) 100%)", 'linear(9deg, rgba(198,195,236,1) 3%, rgba(139,139,218,1) 48%, rgba(143,165,210,1) 100%)')}
                        bgClip="text"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        align="center">


                        IT Specialist, Web Developer & IT Professor
                    </Text>




                </Flex>
            </HStack>
            <HStack justifyContent="center">
                <Flex >

                    <Text paddingTop={2}

                        color={useColorModeValue("rgba(10, 10, 10, 0.9)", 'white')}
                        align="center"
                        fontSize="3xl"
                    >
                        I help business to improve throught technology, and I love what I do.
                    </Text>


                </Flex>
            </HStack>

            <HStack justifyContent="center" >
                <Flex paddingTop={40}>
                    <Image

                        borderRadius="full"
                        boxSize="200px"
                        src={logo}
                        alt="Segun Adebayo"
                    />
                </Flex>
            </HStack>
        </>
    )
}

export default Landpage
