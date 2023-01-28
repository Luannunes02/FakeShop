import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productAction";

export default function ProductDetail() {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => console.log(err));

        dispatch(selectedProducts(response.data))

    };

    useEffect(() => {
        if (productId && product !== '') fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId])

    const { category, description, id, image, price, rating, title } = product;

    return (
        <div className="ui grid container" id="productDetailContainer">
            {Object.keys(product).length === 0 ? (
                <div id="loading">
                    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                        <div class="wheel"></div>
                        <div class="hamster">
                            <div class="hamster__body">
                                <div class="hamster__head">
                                    <div class="hamster__ear"></div>
                                    <div class="hamster__eye"></div>
                                    <div class="hamster__nose"></div>
                                </div>
                                <div class="hamster__limb hamster__limb--fr"></div>
                                <div class="hamster__limb hamster__limb--fl"></div>
                                <div class="hamster__limb hamster__limb--br"></div>
                                <div class="hamster__limb hamster__limb--bl"></div>
                                <div class="hamster__tail"></div>
                            </div>
                        </div>
                        <div class="spoke"></div>
                    </div>
                    <br />
                    <div>
                        <h1 className="loadingText">     Loading ...</h1>

                    </div>
                </div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                            <div className="eight wide column">
                                <img className="ui fluid image" src={image} width={300} />
                            </div>
                            <div className="eight wide column">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}