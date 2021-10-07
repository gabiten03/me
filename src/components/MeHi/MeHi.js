import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { HStack, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

function MeHi() {
    return (
        <>
            <Box position='absolute' marginTop="85" bg={useColorModeValue('blue', 'white')} w="100%" height={400}>
                <HStack justifyContent="center">
                    <Flex >
                        <Text paddingTop={10}
                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="3xl"
                            fontWeight="extrabold"
                            align="center">

                            Hi, I’m Gabriel. Nice to meet you.

                        </Text>




                    </Flex>
                </HStack>
                <HStack justifyContent="center">
                    <Flex w="40%">

                        <Text paddingTop={8}
                            align="center"


                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="2xl"
                        >
                            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </Text>


                    </Flex>
                </HStack>


            </Box>
        </>
    )
}

export default MeHi
