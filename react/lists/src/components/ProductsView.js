import React from 'react'


export const ProductsView = ({ name, description, price}) => {
    return (
        <div style={{padding: "5px"}}>
            <p><strong>name:</strong>{name}</p>
            <p><strong>description:</strong> {description}</p>
            <p><strong>price:</strong>{price}</p>
        </div>
    )
}
