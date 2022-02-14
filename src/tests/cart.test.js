/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 */


let Cart = require('../Cart.js');

test('getTotalCart_EmptyCart_Success', () => {
    //given
    let cart = new Cart(null);
    let actualTotalPrice;
    let expectedTotalPrice = 0;

    //when
    actualTotalPrice = cart.totalPrice;

    //then
    expect(actualTotalPrice).toEqual(expectedTotalPrice);
})