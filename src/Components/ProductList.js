import React, { Component } from 'react'
import Title from "./Title";
import { storeProducts, detailProduct } from "../data"
import { ProductConsumer } from './Context';
import Product from "./Product"

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };

    render() {
        return (
            <React.Fragment>
                {/* console.log(storeProducts); */}
                <div className="py-5">
                    <div className="container">
                        <div className="row">

                            <Title name="Our " title="Products" />
                            <ProductConsumer>
                                {
                                    (hello) => {
                                        return (
                                            hello.products.map((product) => {
                                                return (
                                                    <Product key={product.id} product={product} />
                                                )
                                            })
                                        )
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
