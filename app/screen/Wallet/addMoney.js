import React from 'react';
import {
    View,Dimensions, Text,Image
}from 'react-native';
import { Card, CardItem, Item, Input, Button } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AllNormalHeader from '../../components/Headers/normalHeaders/allNormalHeader';

class AddMoney extends React.Component{
    render(){
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        return(
            <View style={{flex:1,alignItems:'center'}}>
                <AllNormalHeader name="Add Money"/>
                <View style={{width:Width-40,marginTop:20}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'70%'}}>
                            <Text style={{fontSize:17}}>Add money to</Text>
                            <Text style={{fontWeight:'bold',fontSize:17}}>Dada Wallet</Text>
                        </View>
                        <View style={{width:'30%',alignItems:'flex-end'}}>
                        <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#F9D004',alignItems:'center',justifyContent:'center' }}>
                                <Image source={require('@Assets/icons/wallet_new.png')} style={{height:30,width:30}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text>Available Balance: $150</Text>
                    </View>
                    <View style={{marginVertical:30}}>
                        <Item>
                            <FontAwesome name="dollar" size={25}/>
                            <Input/>
                        </Item>
                        <Button style={{backgroundColor:'#FFBD39',justifyContent:'center',marginVertical:20}}>
                            <Text>PROCEED TO ADD MONEY</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default AddMoney;