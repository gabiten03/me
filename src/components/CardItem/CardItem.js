import React from 'react'
import { Heading, Spacer, Text, VStack, Box } from '@chakra-ui/layout'
import { useColorModeValue, Icon, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaCloud } from 'react-icons/fa'
import { CheckIcon } from '@chakra-ui/icons';

function CardItem(props) {
    const { title, action, toolsItems } = props.props
    return (
<<<<<<< HEAD
        <Box w="100%" paddingy={20} shadow="lg" borderWidth="1px" rounded={10}>
=======
        <Box w="100%" paddingy={20} shadow="lg" borderWidth="1px" rounded={10} >
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
            <VStack marginY={20} >
                <Icon as={FaCloud} w={75} h={75} justifyContent="center" color={useColorModeValue('blue.400', 'white')} />
                <Spacer />

                <Heading fontSize="xl"
                    paddingy={20}
                    color={useColorModeValue('rgba(10, 10, 10, 0.9)', 'white')}
                    align="center"
                >
                    {title}
                </Heading>
                <Text paddingTop={5}
                    color={useColorModeValue('rgba(10, 10, 10, 0.9)', 'white')}
                    align="center"
                    fontSize="2xl"> {action}
                </Text>
                <List spacing={3}>
<<<<<<< HEAD
                    {toolsItems.map((item, id) =>

                        <ListItem textAlign={'center'} key={id}>
=======
                    {toolsItems.map((item, keyi) =>

                        <ListItem textAlign={'center'}>
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
                            <ListIcon as={CheckIcon} color="green.400" />
                            {item}
                        </ListItem>
                    )}

                </List>





            </VStack >
        </Box>

    )
}

export default CardItem
