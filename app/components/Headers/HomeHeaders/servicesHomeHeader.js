import React from 'react';
import {
    View, Dimensions,Text, TouchableOpacity
}from 'react-native';
import { Badge, Icon } from 'native-base';
import NavigationService from '../../../Service/Navigation';

class ServicesHomeHeader extends React.Component{
    render(){
        const Width = Dimensions.get('screen').width;
        return(
            <View style={{height:55,width:Width,backgroundColor:'#f8bc06',alignItems: 'center',flexDirection:'row'}}>
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

export default ServicesHomeHeader;