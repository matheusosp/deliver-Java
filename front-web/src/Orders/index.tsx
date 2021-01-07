import './styles.css';
import React, { useEffect, useState } from 'react';
import StepsHeader from './StepHeader';
import ProductsList from './ProductsList';
import { Product } from './types';
import { fetchProducts } from '../service';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
         fetchProducts()
         .then(response => setProducts(response.data))
         .catch(err => console.error(err))
    },[])

   return( 
    <div className="orders-container">
        <StepsHeader/>
        <ProductsList products={products}/>
    </div>
   );
}

export default Orders;