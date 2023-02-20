import React from 'react'
import { ContactUsCard } from '../ContactUsCard';
import { OrdersCard } from './OrdersCard';

export const MyOrders = () => {
    
    return (
        <div className='myorders__container'>
            <div className='myorders__heading'>MY ORDERS</div>
            <div className='myorders__body'>
            <ContactUsCard/>
                <OrdersCard/>
            </div>
        </div>
    );
}