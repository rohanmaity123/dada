import React from 'react';
import {
    View,Image,Text,TouchableOpacity, TouchableWithoutFeedback
}from 'react-native';
import { Card } from 'native-base';
import NavigationService from '../../../Service/Navigation';

class MealCard extends React.Component{
    render(){
        return(
            <View style={{width:'50%',alignItems:'center'}}>
                <TouchableWithoutFeedback onPress={()=>NavigationService.navigate('MealSingleScreen')}>
                    <Card style={{width:'90%',borderRadius:5}}>
                        <Image source={require('@Assets/images/slider_food.png')} style={{width:'100%',height:100,borderTopLeftRadius:5,borderTopRightRadius:5}} />
                        <View style={{marginHorizontal:13,marginVertical:5}}>
                            <Text style={{fontWeight:'bold',fontSize:15}}>Fishs</Text>
                            <Text style={{color:'#777'}}>Chinese</Text>
                            <Text style={{color:'green'}}>Veg</Text>
                            <Text style={{fontWeight:'bold'}}>$6</Text>
                        </View>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default MealCard;