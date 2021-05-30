import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Runing shoes",
    price: "$5",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$5",
    image: "https://cdn.alzashop.com/Foto/f16/NL/NL244a1j.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main clasName={classes.content}>
      <div className={classes.toolbar} />
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
