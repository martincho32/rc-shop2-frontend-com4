import React from 'react';
import Axios from 'axios';

class PageDetail extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            product: null
        };
    }
       

    async componentDidMount() {
        const res = await Axios.get(`/api/products/?${this.props.match.params.id}`);
        console.log(res.data);
        this.setState({ product: res.data })
    };


    render() {
        let product = this.state.product;

        let htmlProductsWithMap = [];
        if (product !== null) {
        htmlProductsWithMap = product.map(p => <div key={p._id}>Brand: { p.brand } and Model: { p.model }</div>)  
        }


        return (
            // <h1>
            //     {this.props.match.params.id}
            // </h1>
            <h1>
                {htmlProductsWithMap}
            </h1>

        )
    }
};

export default PageDetail;