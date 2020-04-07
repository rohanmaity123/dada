import React from 'react';
import{
    View, ScrollView
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import GroceryOrderHistory from '../../../components/OrderHistory/Grocery/groceryOrderHistory';

class GroceryOrderScreen extends React.Component{
    render(){
        
        return(
            <View>
                <AllNormalHeader name="Grocery History"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <GroceryOrderHistory />
                </ScrollView>
            </View>
        )
    }
}

export default GroceryOrderScreen;