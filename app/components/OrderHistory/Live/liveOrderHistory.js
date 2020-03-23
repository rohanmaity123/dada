import React from 'react';
import{
    View,Image,Text,TouchableOpacity,Dimensions
}from 'react-native';
import { Card, CardItem } from 'native-base';

class LiveOrderHistory extends React.Component{
    render(){
        const Height = Dimensions.get('screen').height; 
        const Width = Dimensions.get('screen').width;
        return(
            <Card style={{width:Width-15,alignSelf:'center',borderRadius:5}}>
                <CardItem header bordered>
                    <Image source={require('@Assets/icons/history_car.png')} style={{height:20,width:20}}/>
                    <Text style={{fontWeight:'bold'}}>Your Live Booking History</Text>
                </CardItem>
                <CardItem>
                    <Text style={{fontWeight:'bold'}}>Invoice No :</Text>
                    <Text style={{marginLeft:3}}>160120095335445</Text>
                    <View style={{flexDirection:'row',marginLeft:Width-342}}>
                        <Text style={{fontWeight:'bold'}}>Date:</Text>
                        <Text style={{fontWeight:'bold'}}>14.10.2019</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <Text style={{alignSelf:'flex-start',fontWeight:'bold'}}>Delivery Address :</Text>
                    <Text style={{flexShrink:1,marginLeft:10}}>Paikpara, Kolkata, West Bengal, India</Text>
                </CardItem>
            </Card>
        )
    }
}

export default LiveOrderHistory;