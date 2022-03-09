/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 */


const Cart = require('../Cart/Cart.js');
const CartItem = require("../CartItem/CartItem.js");
const EmptyCartException = require("../Cart/EmptyCartException.js");
const UpdateCartException = require("../Cart/UpdateCartException.js");

test('items_NominalCase_Success', () => {
    //given
    let cartItem1 = new CartItem(1,"Iphone 27", 1,10);
    let cartItem2= new CartItem(2,"Iphone 28",2,20);
    let expectedItems = [cartItem1, cartItem2];
    let actualItems = null;
    let cart = new Cart(expectedItems);

    //when
    actualItems = cart.items;

    //then
    for (let i = 0 ; i <= expectedItems.length ; i++)
    {
        expect(expectedItems[i]).toEqual(actualItems[i]);
    }
})

test('items_EmptyCart_ThrowException', () => {
    //given
    let cart = new Cart(null);

    //when
    expect(() => cart.items).toThrow(EmptyCartException);

    //then
    //Exception is thrown
})

test('getTotalCart_NominalCase_Success', () => {
    //given
    let cartItem1 = new CartItem(1,"Iphone 27",1,10);
    let cartItem2= new CartItem(2,"Iphone 28",2,20);
    let items = [cartItem1, cartItem2];
    let cart = new Cart(items);
    let totalPriceExpected = 50;

    //when
    //we call the property directly in assertion below

    //then
    expect(totalPriceExpected).toEqual(cart.totalPrice);
})

test('getTotalCart_EmptyCart_ThrowException', () => {
    //given
    let cart = new Cart(null);

    //when
    expect(() => cart.totalPrice).toThrow(EmptyCartException);

    //then
    //Exception is thrown
})

test('count_OnlySingleQuantityProduct_Success', () => {
    //given
    let cartItem1 = new CartItem(1,"Iphone 27",1,10);
    let cartItem2= new CartItem(2,"Iphone 28", 1,20);
    let items = [cartItem1, cartItem2];
    let cart = new Cart(items);
    let countExpected = 2;

    //when
    //we call the property directly in assertion below

    //then
    expect(countExpected).toEqual(cart.count());
})

test('count_MixSingleAndMultipleQuantityProductSuccess', () => {
    //given
    let cartItem1 = new CartItem(1,"Iphone 27",1,10);
    let cartItem2= new CartItem(2,"Iphone 28", 2,20);
    let items = [cartItem1, cartItem2];
    let cart = new Cart(items);
    let countExpected = 3;

    //when
    //we call the property directly in assertion below

    //then
    expect(countExpected).toEqual(cart.count());
})

test('count_MixSingleAndMultipleQuantityProductDistinct_Success', () => {
    //given
    let cartItem1 = new CartItem(1,"Iphone 27",1,10);
    let cartItem2= new CartItem(2,"Iphone 28", 2,20);
    let items = [cartItem1, cartItem2];
    let cart = new Cart(items);
    let countExpected = 2;

    //when
    //we call the property directly in assertion below

    //then
    expect(countExpected).toEqual(cart.count(true));
})

test('count_EmptyCart_ThrowException', () => {
    //given
    let cart = new Cart(null);

    //when
    expect(() => cart.count()).toThrow(EmptyCartException);

    //then
    //Exception is thrown
})


