/**
 * @file      CartItem.js
 * @brief     This class is designed to manage a cart item.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

module.exports = class CartItem {

    //region private attributes
    articleId;
    quantity;
    price;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a CartItem Object
     * @param articleId
     * @param quantity
     * @param price (in CHF)
     * @exception InvalidArticleIdException is thrown when the article is smaller than 1.
     * @exception InvalidArticleQuantityException is thrown when the quantity is smaller than 1.
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    constructor(articleId, quantity, price) {
        this.articleId = articleId;
        this.quantity = quantity;
        this.price = price;
    }
    /**
     * @brief This property gets the article id
     */
    get ArticleId() {
        return this.articleId;
    }

    /**
     * @brief This property gets the quantity
     */
    get Quantity() {
        return this.quantity;
    }

    /**
     * @brief This property gets the price
     */
    get Price() {
        return this.price;
    }

    /**
     * @brief This property gets the total
     */
    get Total() {
        return this.quantity * this.price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}