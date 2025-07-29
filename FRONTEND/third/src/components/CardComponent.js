import React, { Component } from "react";

class CardComponent extends Component {
    render() {
        const { title, price, discount, image, description } = this.props;

        return (
            <div className="card-component">
                <img src={image} alt={title} className="card-image" />

                <div className="card-info">
                    <h3 className="card-title">{title}</h3>

                    <div className="card-price-wrap">
                        {discount && <span className="card-discount">{discount}</span>}
                        <span className="card-price">   {price}</span>
                    </div>

                    <p className="card-desc">{description}</p>
                </div>
            </div>

        );
    }
}

export default CardComponent;
