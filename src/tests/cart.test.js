/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 *            08-03-2022 - update (Update Cart)
 */

 const Cart = require('../Cart/Cart.js');
 const CartItem = require("../CartItem/CartItem.js");
 const EmptyCartException = require("../Cart/EmptyCartException.js");
 const UpdateCartException = require("../Cart/UpdateCartException.js");
 const CartItemNotFoundException = require("../Cart/CartItemNotFoundException");
 
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
 
 //region updateCart
 test('updateCart_AddSingleCartItemInEmptyCart_Success', () => {
     //given
     //prepare initial cart
     let cart = new Cart(null);
 
     //prepare cart update
     let expectedTotalPrice = 10;
     let itemToAdd = new CartItem(1,"Iphone 27",1,expectedTotalPrice);
     let expectedItems = [itemToAdd];
 
 
     //when
     cart.updateCart(expectedItems);
 
     //then
     let actualItems = cart.items;
     for (let i = 0 ; i <= expectedItems.length ; i++)
     {
         expect(expectedItems[i]).toEqual(actualItems[i]);
     }
     expect(expectedTotalPrice).toEqual(cart.totalPrice);
 })
 
 test('updateCart_AddDifferentCartItemInNotEmptyCart_Success', () => {
     //given
     //prepare initial cart
     let item1 = new CartItem(1,"Iphone 27",2,10);
     let cart = new Cart([item1]);
 
     //prepare cart update
     let itemToAdd = new CartItem(2, "Iphone 28"  ,1,40);
     let expectedItems = [item1, itemToAdd];
     let expectedTotalPrice = 60;
 
     //when
     cart.updateCart(expectedItems);
 
     //then
     let actualItems = cart.items;
     for (let i = 0 ; i <= expectedItems.length ; i++)
     {
         expect(expectedItems[i]).toEqual(actualItems[i]);
     }
     expect(expectedTotalPrice).toEqual(cart.totalPrice);
 })
 
 test('updateCart_UpdateExistingCartItemQuantity_Success', () => {
     //given
     //prepare initial cart
     let item1 = new CartItem(1,"Iphone 27",2,10);
     let cart = new Cart([item1]);
 
     //prepare cart update
     let itemToUpdate = new CartItem(1, "Iphone 27"  ,1,10);
     let expectedItems = [itemToUpdate];
     let expectedTotalPrice = 10;
 
     //when
     cart.updateCart(expectedItems);
 
     //then
     let actualItems = cart.items;
     for (let i = 0 ; i <= expectedItems.length ; i++)
     {
         expect(expectedItems[i]).toEqual(actualItems[i]);
     }
     expect(expectedTotalPrice).toEqual(cart.totalPrice);
 })
 
 test('updateCart_AddEmptyItemsInEmptyCart_ThrowException', () => {
     //given
     let cart = new Cart(null);
     let items = null;
 
     //when
     expect(() => cart.updateCart(items)).toThrow(UpdateCartException);
 
     //then
     //Exception is thrown
 })
 
 test('updateCart_AddEmptyItemsInNotEmptyCart_ThrowException', () => {
     //given
     let item1 = new CartItem(1,"Iphone 27",2,10);
     let cart = new Cart([item1]);
     let items = null;
 
     //when
     expect(() => cart.updateCart(items)).toThrow(UpdateCartException);
 
     //then
     //Exception is thrown
 })
 //endregion UpdateCart
 
 //region RemoveCarItem
 test('RemoveCartItem_CartWithOneSpecificItem_Success', () => {
     //given
     let cartItemToRemove = new CartItem(1,1,10);
     let cartItemToKeep= new CartItem(2,2,20);
     let items = [cartItemToRemove, cartItemToKeep];
     let cart = new Cart(items);
 
     //when
     cart.removeCartItem([cartItemToRemove]);
     //then
     expect(cart.items).toEqual([cartItemToKeep]);
     expect(cart.totalPrice).toEqual(cartItemToKeep.total);
     //Exception is thrown
 })
 
 test('RemoveCartItem_CartWithOneSpecificItem_ThrowException', () => {
     //given
     let cartItemToRemove = new CartItem(1,1,10);
     let cartItemToKeep= new CartItem(2,2,20);
     let items = [cartItemToRemove, cartItemToKeep];
     let cart = new Cart(items);
     cart.removeCartItem([cartItemToRemove]);
 
     //when
     expect(() => cart.removeCartItem([cartItemToRemove])).toThrow(CartItemNotFoundException);
 
     //then
     //Exception is thrown
 })
 //endregion RemoveCartItem
 
 //region EmptyCart
 test('emptyCart_CartWithItems_Success', () => {
     //given
     let item1 = new CartItem(1,"Iphone 27",2,10);
     let cart = new Cart([item1]);
     const expectedItemsAmount = 0;
 
     //when
     cart.emptyCart();
 
     //then
     //TODO - review this assert
     expect(() => cart.totalPrice).toThrow(EmptyCartException);
 });
 
 test('emptyCart_CartWithoutItems_ThrowException', () => {
     //given
     let cart = new Cart();
     cart = new Cart();
 
     //when
     expect(() => cart.emptyCart()).toThrow(EmptyCartException);
 
     //then
     //Exception thrown
 });
 //endregion EmptyCart