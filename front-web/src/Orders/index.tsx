import './styles.css';
import React, { useEffect, useState } from 'react';
import StepsHeader from './StepHeader';
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../service';
import OrderLocation from './OrderLocation';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation,setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
         fetchProducts()
         .then(response => setProducts(response.data))
         .catch(err => console.error(err))
    },[])

   return( 
    <div className="orders-container">
        <StepsHeader/>
        <ProductsList products={products}/>
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
   );
}

export default Orders;