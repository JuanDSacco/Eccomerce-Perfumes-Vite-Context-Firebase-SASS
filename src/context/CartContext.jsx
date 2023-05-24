import React, {useContext, useState} from 'react';

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

const ContextProvider = ({children}) => {

    // Hooks

    const [mode, setMode] = useState(false); // DarkMode

    const [cart,setCart] = useState([]); // Productos
    
    // Funciones
    
    const totalPrice = () => {
        return cart.reduce((acc, data) => (acc =+ data.cantidad * data.precio),0)
    };

    const cantidadItem = () => {
        return cart.reduce((acc, data) => (acc += data.cantidad), 0);
    };

    const clearCart = () => setCart([]);

    const removeProduct = (id) => setCart(cart.filter((data) => data.id !== id));

    const eliminarPorUnidad = (id) =>
        setCart(
        cart.map((data) => {
            if (data.id === id) {
            return { ...data, cantidad: data.cantidad - 1 };
            } else {
            return data;
            }
        })
        );

        const isInCart = (id) => (cart.find((data) => data.id === id) ? true : false);

        const addProduct = (item, cantidad) => {
            if (isInCart(item.id)) {
                setCart(
                    cart.map((data) => {
                        return data.id === item.id ? 
                            { ...data, cantidad: data.cantidad + cantidad }
                            : 
                            data;
                        })
                    );
            } else {
                setCart([...cart, { ...item, cantidad }]);
                }
            };

    const ExportsContext = {
        mode:mode,
        setMode:setMode,
        cart:cart,
        totalPrice:totalPrice,
        clearCart:clearCart,
        cantidadItem:cantidadItem,
        removeProduct:removeProduct,
        eliminarPorUnidad:eliminarPorUnidad,
        addProduct:addProduct
    }

    return(
        <CartContext.Provider value={ExportsContext}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider;

