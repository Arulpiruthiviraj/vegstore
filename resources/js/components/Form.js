import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className={"form-row"}>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable">Vegetable</label>
                                <input type="text" className="form-control" id="vegetale_name"
                                       placeholder="Vegetable Name"/>
                            </div>
                        </div>
                        <div className="form-group col-md-2">
                            <div className="form-group">
                                <label htmlFor="vegetable_price">Price</label>
                                <input type="text" className="form-control" id="vegetale_price"
                                       placeholder="Price"/>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable_description">Description</label>
                                <input type="text" className="form-control" id="vegetale_description"
                                       placeholder="Description"/>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className="form-group">
                                <label htmlFor="vegetable_supplier">Supplier Name</label>
                                <input type="text" className="form-control" id="vegetale_supplier"
                                       placeholder="Vegetable Supplier"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="supplier_available"/>
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
