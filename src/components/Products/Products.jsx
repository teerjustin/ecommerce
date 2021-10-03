import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoes', description: 'Streetwear Shoes', price: '$170', image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606322077'},
    { id: 2, name: 'Macbook', description: 'Apple Laptop', price: '$1500', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-macbook-air-gold-select-201902?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1548454547923'},

]

const Products = ({ product }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => ( 
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>
    );
};

export default Products;