import React from 'react';
import{
    View, Text, Dimensions, Image
}from 'react-native';
import { Card } from 'native-base';

class OfferCard extends React.Component{
    render(){
        const Width = Math.round((Dimensions.get('window').width/2)-10);
        const Height = Math.round((Dimensions.get('window').height/4)-29)
        return(
            <Card style={{width:Width,height:Height}}>
                <Image source={require('@Assets/images/advertisement.jpg')} style={{height:Height,width:Width}}/>
                <View style={{backgroundColor:'#33ff99',height:33,width:90,marginTop:10,position:'absolute',flexDirection:'row',paddingHorizontal:10}}>
                    <Image source={require('@Assets/icons/img4_cab.png')} style={{marginTop:5}}/>
                    <View style={{marginLeft:5}}>
                        <Text style={{fontSize:12}}>DEALS</Text>
                        <Text style={{fontSize:12,color:'red'}}>FOOD</Text>
                    </View>
                </View>
                <View style={{position:'absolute',backgroundColor:'red',height:55,width:55,alignSelf:'flex-end',marginTop:Height-55,borderTopLeftRadius:35}}>
                    <Text style={{textAlign:'center',marginLeft:10,marginTop:7,fontSize:13,color:'#fff',fontWeight:'bold'}}>Up To 20% Off</Text>
                </View>
            </Card>
        )
    }
}

export default OfferCard;