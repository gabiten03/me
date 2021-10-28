import React from 'react'
import { Stack } from '@chakra-ui/layout'

import CardItem from '../CardItem/CardItem'
import { Spinner } from '@chakra-ui/spinner'

function CardList({ items }) {


    return (
        < Stack direction={{ base: "column", lg: "row" }}>
            {Object.keys(items).length ? (
                items.map((elements, idx) => <CardItem props={elements} key={elements.id} />)) : (<Spinner animation="border" role="status"> </Spinner>)
            }
        </Stack>
    )
}

export default CardList

