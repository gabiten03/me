import { Grid } from '@chakra-ui/layout';
import { React, useState, useEffect } from 'react'
<<<<<<< HEAD
import DataJSON from '../../assets/data.json'
import CardList from '../CardList/CardList'

=======

import DataJSON from '../../assets/data.json'

import CardList from '../CardList/CardList'


>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
function CardsContainer() {

    const [ListItems, setListItems] = useState(0);

    useEffect(() => {
        const dataItems = new Promise((resolve, reject) => {

            setTimeout(function () {
                resolve(DataJSON)
            }, 2000);

        });
<<<<<<< HEAD
        dataItems.then((response) => {
            setListItems(response);
        });
    }, []);

=======

        dataItems.then((response) => {
            setListItems(response);
        });

    }, []);


>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
    return (
        <Grid paddingX={40} marginY={10} spacing="24px">
            <CardList items={ListItems} />
        </Grid>
    )

}

export default CardsContainer

