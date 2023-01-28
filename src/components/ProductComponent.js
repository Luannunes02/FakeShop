import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product

        return (
            <div className="four column wide" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards" id="card">
                        <div className="card">
                            <div id="imageDetail" >
                                <img width="200" height="240"  src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div id='productsList'>{renderList}</div>
    )
}