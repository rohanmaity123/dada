import React from 'react';
import {
    View,Image,Text,TouchableOpacity,Dimensions, TouchableWithoutFeedback
}from 'react-native';
import { Card } from 'native-base';
import NavigationService from '../../../Service/Navigation';

class ResturentCard extends React.Component{
    render(){
        const Width = Dimensions.get('screen').width;
        return(
            <TouchableWithoutFeedback onPress={()=>NavigationService.navigate('SingleShopPage')}>
                <Card style={{width:Width-20, alignSelf:'center',height:130,borderRadius:3,flexDirection:'row',alignItems:'center',borderRadius:5}}>
                    <View style={{width:'40%',alignItems:'flex-end',justifyContent:'center',height:'100%'}}>
                        <Image source={require('@Assets/images/slider_food.png')} style={{width:'90%',height:'80%'}}/>
                    </View>
                    <View style={{width:'60%',height:'80%',paddingLeft:10}}>
                        <View style={{height:'50%',justifyContent:'center',borderBottomWidth:1,width:'90%',borderBottomColor:'#eaebeb'}}>
                            <Text style={{fontWeight:'bold'}}>Dhaba</Text>
                        </View>
                        <View style={{height:'50%'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text>* 3.15</Text>
                                <Text style={{marginLeft:20,color:'green',fontWeight:'bold'}}>Open</Text>
                            </View>
                            <TouchableOpacity style={{marginTop:5}} onPress={()=>NavigationService.navigate('FoodShopReviewScreen')}>
                                <Text style={{color:'red'}}>Show All Reviews</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </TouchableWithoutFeedback>
        )
    }
}

export default ResturentCard;