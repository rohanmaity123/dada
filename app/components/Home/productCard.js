import React from 'react';
import {
    View, Dimensions, Image
}from 'react-native';
import { Card } from 'native-base';

class ProductCard extends React.Component{
    render(){
        const Width = Math.round((Dimensions.get('window').width/3)-8);
        const Height = Math.round((Dimensions.get('window').height/5)-20);
        return(
            <Card style={{width:Width,height:Height}}>
                <Image source={require('@Assets/images/img1_car.png')} style={{height:Height,width:Width}}/>
            </Card>
        )
    }
}

export default ProductCard;