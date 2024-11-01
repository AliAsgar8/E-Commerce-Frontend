import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    // When we click on the add to cart button the product should come in an object that why we create cardItem in an object empty
    const [cartItems, setCartItems] = useState({});


    const currency = "$"
    const delivery_fee = 10


    const addToCart = async (itemId, size) => {

        // It will create the cardItems clone same as it is
        let cartData = structuredClone(cartItems);

        // If size is empty
        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        // If my cartData is present and itemId is also present then this condition will work
        if (cartData[itemId]) {

            // If my ItemID and size is same the we will increment the it  
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {

                // If itemId is present but size is different the we will create the size and give it value 1
                cartData[itemId][size] = 1
            }
        } else {

            // If my cardData is empty or the product is not there then we will create a new object of that product 
            cartData[itemId] = {};

            // After that we asign the size = 1
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);


    }

    const getCount = () => {
        let totalCount = 0;


        // Example
        // let cartItems = {
        //     1: { 'M': 2, 'L': 1 },  
        //     2: { 'S': 1 },         
        //     3: { 'XL': 3 }       
        //   };


        for (let items in cartItems) {   // This is for Outer loop 
            for (let item in cartItems[items]) {  //This is for inner loop for size
                try {
                    if (cartItems[items][item] > 0) {    //For size 'M': cartData[1]['M'] = 2, so totalCount += 2 (total count becomes 2).
                        totalCount += cartItems[items][item]  //For size 'L': cartData[1]['L'] = 1, so totalCount += 1 (total count becomes 3).
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }


    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getTotalAmount =  () => {
        let totalAmount = 0;

        for (let items in cartItems) {
            let itemPrice = products.find((product) => product._id === items);
            for (let item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemPrice.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    useEffect(() => {
        console.log(cartItems);

    }, [cartItems])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCount, updateQuantity, getTotalAmount, navigate
    }

    return (
        <>
            <ShopContext.Provider value={value}>
                {props.children}

            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider

