import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Vegetable from './vegetables';
import Form from './form';

class App extends Component {

    constructor() {
        super();
        this.state = {
            vegs: [],
            currentProduct: null
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    componentDidMount() {
        fetch('/api/vegetables')
            .then(response => {
                return response.json();
            })
            .then(vegs => {
                this.setState({ vegs });
            });
    }

    renderProducts() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
        return this.state.vegs.map(vegs => {
            return (

                <li style={listStyle} onClick={
                    () =>this.handleClick(vegs)} key={vegs.id} >
                    { vegs.vegetable_name }
                </li>
            );
        })
    }

    handleClick(vegs) {
        this.setState({currentProduct:vegs});
    }

    handleAddProduct(vegs) {
        vegs.price = Number(vegs.vegetable_price);
        fetch( 'api/vegetables/', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(vegs)
        })
            .then(response => {
                return response.json();
            })
            .then( data => {

                this.setState((prevState)=> ({
                    vegs: prevState.vegs.concat(data),
                    currentProduct : data
                }))
            })
    }

    render() {

        const mainDivStyle =  {
            display: "flex",
            flexDirection: "row"
        }

        const divStyle = {

            justifyContent: "flex-start",
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '20px 8px 10px 20px'

        }

        return (
            <div>
                <div style= {mainDivStyle}>
                    <div style={divStyle}>
                        <h3> All Vegetables  </h3>
                        <ul>
                            { this.renderProducts() }
                        </ul>

                    </div>
                    <Vegetable vegs={this.state.currentProduct} />
                    {/*<Form onAdd={this.handleAddProduct} />*/}
                </div>

            </div>

        );
    }
}

export default App;
