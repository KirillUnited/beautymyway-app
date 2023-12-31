import React from 'react';

const ProductContext = React.createContext([]);
export default ProductContext;
export function ProductContextProvider({ allProducts, children }) {
    return (
        <ProductContext.Provider
            value={{ allProducts }}
        >
            {children}
        </ProductContext.Provider>
    )
}