/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

// The "pseudocode" for the built-in Error class defined by JavaScript itself

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {

    //region private attributes
    #items = null;

    //endregion private attributes

    /**
     * @brief This method constructs a Cart Object
     * @param items : CartItem[] of cartItems
     */
    constructor(items = null){
        this.#items = items;
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get items() {
        if(this.#items === null){
            throw new EmptyCartException('Cart is empty');
        }
        return this.#items;
    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     * @return {number} : the total in CHF
     */
    get totalPrice() {
        if (this.#items == null){
            throw new EmptyCartException();
        }

        let total = 0;
        this.#items.forEach(item => {
            total += item.total;
        });
        return total;
    }

    /**
     * @brief This method returns the number of CartItems present in the Cart
     * @param distinct : boolean a distinct constraint
     * @returns {number} : number of CartItems
     */
    count(distinct = false){
        throw new Error();
    }

    /**
     * @brief This method compares the current cart content and update the items:
     *        Add new CartItem
     *        Update the quantity of an existing CartItem
     *        Remove an existing item if the new quantity to set is 0
     * @param items
     */
    updateCart(items){
        throw new Error();
    }

    /**
     * @brief This method remove CartItem from the Cart
     * @param itemsToRemove
     */
    removeCartItem(itemsToRemove){
        throw new Error();
    }

    emptyCart(){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    #exists(cartItemToFind){
        throw new Error();
    }

    #updateQuantity(cartItemToUpdate){
        throw new Error();
    }

    #removeCartItem(cartItemToRemove){
        throw new Error();
    }
    //endregion private methods
}