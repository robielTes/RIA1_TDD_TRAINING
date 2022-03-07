/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 */


let Cart = require('../Cart.js');
const CartItem = require("../CartItem.js");
const EmptyCartException = require("../exceptions/EmptyCartException.js");

test('getTotalCart_NominalCase_Success', () => {
    //given
    let cartItem1 = new CartItem(1,1,10);
    let cartItem2= new CartItem(2,2,20);
    let items = [cartItem1, cartItem2];
    let cart = new Cart(items);
    let totalPriceExcepted = 30;

    //when
    //we call the properties directly in assertion below

    //then
    expect(totalPriceExcepted).toEqual(cart.TotalPrice);
})

test('getTotalCart_EmptyCart_ThrowException', () => {
    //given
    let cart = new Cart(null);

    //when
    expect(() => cart.TotalPrice).toThrow(EmptyCartException);

    //then
    //Exception is thrown
})