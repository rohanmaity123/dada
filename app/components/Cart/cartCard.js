import React from 'react';
import {
    View,Image,Text,TouchableOpacity
}from 'react-native';
import { Card } from 'native-base';

class CartCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qty:1
        }
    }

    qtyHandler = () =>{
        if(this.state.qty==1){
            return false;
        }else{
            this.setState({
                qty: (this.state.qty-1)
            })
        }
    }

    render(){
        
        return(
            <Card style={{width:'90%',flexDirection:'row',height:110}}>
                <View style={{flex:1,height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('@Assets/images/slider_food.png')} style={{width:'85%',height:'85%'}}/>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',marginVertical:2}}>Fish Fry</Text>
                    <Text style={{fontWeight:'bold',marginVertical:2}}>Veg</Text>
                    <Text style={{fontWeight:'bold',marginVertical:2}}>Chinese</Text>
                    <Text style={{fontWeight:'bold',marginVertical:2}}>Price:$7</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <View style={{flex:1,justifyContent:'center',marginRight:20}}>
                        <Image source={require('@Assets/icons/bin.png')}/>
                    </View>
                    <View style={{flex:1,alignItems:'center',marginRight:20,flexDirection:'row'}}>
                        <Text>Qty.</Text>
                        <View style={{borderWidth:1,height:25,flexDirection:'row',flex:1,alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1,alignItems:'center'}} onPress={()=> this.setState({qty: (this.state.qty+1)})}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text>{this.state.qty}</Text>
                            </View>
                            <TouchableOpacity style={{flex:1,alignItems:'center'}} onPress={()=> this.qtyHandler()}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>
        )
    }
}

export default CartCard;