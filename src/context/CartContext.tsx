import { createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";
export interface CartItem extends Coffee{
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCoffeeQuantity:(coffeeId: number, type: 'increase' | 'decrease') => void;
    removeCoffeeFromCart: (coffeeId: number) => void;
    cartItemsTotal: number ;
    clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: React.ReactNode
}

const Coffee_Items_Storage_Key = 'CoffeeDelivery:cartItems';

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storageCartItems = localStorage.getItem(Coffee_Items_Storage_Key);

        if (storageCartItems) {
            return JSON.parse(storageCartItems);
        }
        return [];
    });
    
    const cartQuantity = cartItems.length;

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExists = cartItems.findIndex(
            (cartItem) => cartItem.id === coffee.id
        );

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExists < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeAlreadyExists].quantity += coffee.quantity
            }
        })

        setCartItems(newCart);
    }

    function removeCoffeeFromCart(coffeeId: number) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === coffeeId
            )
            if (coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
        })

        setCartItems(newCart);
    }

    function clearCart() {
        setCartItems([]);
    }

    useEffect(() => {
        localStorage.setItem(Coffee_Items_Storage_Key, JSON.stringify(cartItems))
    }, [cartItems]);
        
    
    function changeCoffeeQuantity(coffeeId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === coffeeId
            )
            if (coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart];
                draft[coffeeExistsInCart].quantity =
                    type === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItems(newCart);
    }
        
    

    return (
        <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity,changeCoffeeQuantity,removeCoffeeFromCart,cartItemsTotal,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}