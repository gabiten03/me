import React from 'react'
import { Stack } from '@chakra-ui/layout'

import CardItem from '../CardItem/CardItem'
import { Spinner } from '@chakra-ui/spinner'

function CardList({ items }) {

<<<<<<< HEAD
=======
    console.log(items)


>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8

    return (
        < Stack direction={{ base: "column", lg: "row" }}>
            {Object.keys(items).length ? (
<<<<<<< HEAD
                items.map((elements, idx) => <CardItem props={elements} key={elements.id} />)) : (<Spinner animation="border" role="status"> </Spinner>)
=======
                items.map((elements, idx) => <CardItem props={elements} key={idx} />)) : (<Spinner animation="border" role="status"> </Spinner>)
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
            }
        </Stack>
    )
}

export default CardList

