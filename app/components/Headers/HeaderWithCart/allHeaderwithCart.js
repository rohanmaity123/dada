import React from 'react';
import {
    View,Dimensions,TouchableOpacity,Text
}from 'react-native';
import { Icon,Badge } from 'native-base';
import NavigationService from '../../../Service/Navigation';

class AllHeaderWithCart extends React.Component{
    render(){
        const Width = Dimensions.get('screen').width;
        return(
            <View style={{height:55,width:Width,backgroundColor:'#f8bc06',alignItems: 'center',flexDirection:'row'}}>
                <TouchableOpacity style={{ width: 32, height: 32, marginHorizontal: 10, alignItems: 'center' }} onPress={()=>NavigationService.back()}>
                    <Icon type='Ionicons' name="ios-arrow-round-back" size={30} />
                </TouchableOpacity>

                <View style={{flex:2}}>
                    <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{this.props.name}</Text>
                </View>
                
                <TouchableOpacity style={{flex:1,justifyContent:'flex-end',right:25,flexDirection:'row',height:55,alignItems:'center'}} onPress={()=>NavigationService.navigate('Cart')}>
                    <Icon name="shopping-cart" type="MaterialIcons" style={{fontSize:25}}/>
                    <Badge style={{height:17,width:17,justifyContent:'center',backgroundColor:'#fff',position:'absolute',top:8,right:-5}}>
                        <Text style={{fontSize:9,fontWeight:'bold'}}>0</Text>
                    </Badge>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AllHeaderWithCart;