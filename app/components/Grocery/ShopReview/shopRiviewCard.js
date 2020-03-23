import React from 'react';
import {
    View,Image,Text
}from 'react-native';
import { Card } from 'native-base';
import StarRating from 'react-native-star-rating';

class ShopFeedbackCard extends React.Component{
    render(){
        return(
            <Card style={{width:'92%',borderRadius:5,alignSelf:'center'}}>
                <View style={{height:70,flexDirection:'row',alignItems:'center',marginHorizontal:10}}>
                    <View style={{width:60,height:60,borderWidth:1,borderRadius:50,borderColor:'#99999999',elevation:5}}>
                        <Image source={require('@Assets/images/dada1.png')} style={{width:58,height:58,borderRadius:50}}/>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Rohan Maity</Text>
                        <Text>4.2 Review</Text>
                    </View>
                </View>
                <View style={{height:20,width:'25%',marginHorizontal:10}}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        halfStarEnabled={true}
                        rating={3.5}
                        fullStarColor={'orange'}
                        starSize={15}
                    />
                </View>
                <View style={{minHeight:50,marginHorizontal:10}}>
                    <Text>GOOd GROCERY DELIVERED TO YOUR HOME GO ONLINE ON DADA</Text>
                </View>
            </Card>
        )
    }
}

export default ShopFeedbackCard;