import * as React from "react";
import { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link, Heading } from "@chakra-ui/react";
import { Flex, VStack, Spacer, Grid } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaLinkedin , FaWhatsapp} from 'react-icons/fa'
import { Us, Es } from 'react-flags-select';

import i18n from '../../translations/i18n'









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

                        <Link ml={8} href="https://wa.me/5491156571982" isExternal>
                            <IconButton icon={<FaWhatsapp />} isRound='true' ></IconButton>
                        </Link>

                        <Link ml={8} href="https://ar.linkedin.com/in/glorenzo" isExternal>
                            <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
                        </Link>
                        <IconButton ml={8} icon={isLang ? <Us /> : <Es />} isRound='true' onClick={handleOnclick}>
                        </IconButton>
                        <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                    </Flex>

                </VStack>

            </Grid>

   
        </>
    )
}

export default Header
