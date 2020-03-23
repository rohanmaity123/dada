import React from 'react';
import{
    View, ScrollView
}from 'react-native';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import FoodOrderHistory from '@Component/OrderHistory/Food/foodOrderHistory'

class EStoreOrder extends React.Component{
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
            <View style={{flex:1}}>
                <AllHeaderWithCart name="Shopping History"/>
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

export default EStoreOrder;