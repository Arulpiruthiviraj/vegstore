import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Vegetable = ({vegs}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px 10px 30px'
    }

    if(!vegs) {

        return(<div style={divStyle}><h2>  No Selection </h2> </div>);
    }

    //Else, display the product data
    return(
        <div style={divStyle}>
            <h2> {vegs.vegetable_name} </h2>
            <p> {vegs.vegetable_price} </p>
            <h3> Status {vegs.stock_available ? 'Available' : 'Out of stock'} </h3>
            <h3> Supplier : {vegs.vegetable_supplier} </h3>
        </div>
    )
}

export default Vegetable ;
