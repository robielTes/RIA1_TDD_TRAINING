/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cartItem.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 */

"use strict";

let CartItem = require('../CartItem.js');

test('allGetters_NominalCase_Success', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let total = 200;

    //when
    //we call the getters directly in assertion below

    //then
    expect(articleId).toEqual(cartItem.ArticleId);
    expect(quantity).toEqual(cartItem.Quantity);
    expect(price).toEqual(cartItem.Price);
    expect(total).toEqual(cartItem.Total);
})