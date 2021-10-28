import { Grid } from '@chakra-ui/layout';
import { React, useState, useEffect } from 'react'
import DataJSON from '../../assets/data.json'
import CardList from '../CardList/CardList'

function CardsContainer() {

    const [ListItems, setListItems] = useState(0);

    useEffect(() => {
        const dataItems = new Promise((resolve, reject) => {

            setTimeout(function () {
                resolve(DataJSON)
            }, 2000);

        });
        dataItems.then((response) => {
            setListItems(response);
        });
    }, []);

    return (
        <Grid paddingX={40} marginY={10} spacing="24px">
            <CardList items={ListItems} />
        </Grid>
    )

}

export default CardsContainer

