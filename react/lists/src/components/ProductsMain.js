import React from 'react'
import { products } from '../productData'
import { ProductsView } from './ProductsView'


export const ProductsMain = () => {
    console.log(products[0])
    return (
        <div>
            <h2>PRODUCTS' LIST</h2>
            {products.map(({productID, name, description, price}) => <ProductsView 
            key={productID}
            name={name}
            description={description}
            price={price} />
            )}
        </div>
    )
}
