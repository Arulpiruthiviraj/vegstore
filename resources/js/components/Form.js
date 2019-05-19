import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newData:{
                vegetable_name: '',
                vegetable_price: '',
                vegetable_description: '',
                vegetable_supplier: '',
                stock_available:false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(key, e) {
        const checkValue=e.target.type==='checkbox'? e.target.checked:e.target.value;
        var state = Object.assign({}, this.state.newData);
        state[key] = e.target.value;
        state[key] = checkValue;
        this.setState({newData: state });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post('/api/vegetables',this.state.newData )
            .then(response => {
                console.log(response);
                this.setState({
                    tasks: [response.data, ...this.state.newData]
                });
                this.setState({
                    newData: {}
                });
            });
    }
    render() {
        return (
            <div className={"col-md-10"}>
                <form onSubmit={this.handleSubmit}>
                    <div className={"form-row"}>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable">Vegetable</label>
                                <input type="vegetable_name" className="form-control" id="vegetable_name"
                                       placeholder="Vegetable Name"
                                       onChange={(e)=>this.handleInput('vegetable_name',e)}
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-2">
                            <div className="form-group">
                                <label htmlFor="vegetable_price">Price</label>
                                <input type="number" className="form-control" id="vegetable_price"
                                       placeholder="Price"
                                       onChange={(e)=>this.handleInput('vegetable_price',e)}
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable_description">Description</label>
                                <input type="text" className="form-control" id="vegetable_description"
                                       placeholder="Description"
                                       onChange={(e)=>this.handleInput('vegetable_description',e)}

                                />
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable_supplier">Supplier Name</label>
                                <input type="text" className="form-control" id="vegetable_supplier"
                                       placeholder="Vegetable Supplier"
                                       onChange={(e)=>this.handleInput('vegetable_supplier',e)}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="stock_available"
                               value={this.state.newData.stock_available.checked}
                               onChange={(e)=>this.handleInput('stock_available',e)}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Available
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">ADD</button>
                </form>
            </div>
        );
    }
}

export default Form;
