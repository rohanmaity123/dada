import React from 'react';
import{
    View, ScrollView
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import FoodOrderHistory from '@Component/OrderHistory/Food/foodOrderHistory'

class GroceryOrderScreen extends React.Component{
    render(){
        const orderHistory = [
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
            {
                orderId:''
            },
        ]
        return(
            <View>
                <AllNormalHeader name="Grocery History"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        orderHistory.map((item,index)=>{
                            return(
                                <FoodOrderHistory key={index}/>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

export default GroceryOrderScreen;