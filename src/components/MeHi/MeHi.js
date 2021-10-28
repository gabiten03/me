import React from 'react'
import { Box, Text, Grid } from '@chakra-ui/react'
import { HStack, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
import "../../../src/translations/i18n";



function MeHi() {
    const { t } = useTranslation();
    return (
        <Grid w="100%" >
            <Box bg={useColorModeValue('blue', 'white')} paddingY={10}>
                <HStack justifyContent="center" paddingTop={10}>
                    <Flex >
                        <Text

                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="3xl"
                            fontWeight="extrabold"
                            align="center"
                            paddingX={5}>

                            {t("hi")}

                        </Text>
                    </Flex>
                </HStack>
                <HStack justifyContent="center" paddingBottom={30}>
                    <Flex w="60%">
                        <Text paddingTop={8}
                            paddingX={5}
                            align="center"
                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="2xl"
                        >
                            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </Text>
                    </Flex>
                </HStack>
            </Box>
        </Grid>
    )
}

export default MeHi
