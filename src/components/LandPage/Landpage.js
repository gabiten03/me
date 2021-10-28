import React from 'react'
import { Text, Grid } from '@chakra-ui/react'
import { HStack, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import logo from '../../../src/AvatarMaker.svg'
import { useTranslation } from "react-i18next";
import "../../../src/translations/i18n";

function Landpage() {

    const { t } = useTranslation();
    return (
        <Grid >
            <HStack justifyContent="center">
                <Flex >
                    <Text paddingTop={10}
                        paddingX={5}
                        bgGradient={useColorModeValue("linear(9deg, rgba(108,101,226,1) 3%, rgba(78,78,221,1) 48%, rgba(143,165,210,1) 100%)", 'linear(9deg, rgba(198,195,236,1) 3%, rgba(139,139,218,1) 48%, rgba(143,165,210,1) 100%)')}
                        bgClip="text"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        align="center">
                        {t("title1")}
                    </Text>
                </Flex>
            </HStack>
            <HStack justifyContent="center">
                <Flex >
                    <Text paddingTop={2}
                        paddingX={5}
                        color={useColorModeValue("rgba(10, 10, 10, 0.9)", 'white')}
                        align="center"
                        fontSize="3xl"
                    >
                        {t("title2")}
                    </Text>
                </Flex>
            </HStack>

            <HStack justifyContent="center" paddingBottom={40}>
                <Flex paddingTop={40}
                >
                    <Image
                        borderRadius="full"
                        boxSize="200px"
                        src={logo}
                        alt=""
                    />
                </Flex>

            </HStack>
        </Grid>
    )
}

export default Landpage
