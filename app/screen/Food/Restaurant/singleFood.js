import React from 'react';
import {
    View, Text, Image, Dimensions
} from 'react-native';
import AllHeaderWithCart from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Card, CardItem, Button } from 'native-base';

class SingleFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData:this.props.navigation.getParam('productData',{}),
            allProduct: []
        }
    }
    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        return (
            <View style={{flex:1}}>
                <AllHeaderWithCart name="Regular Item" />
                <View style={{ width: Width,borderBottomWidth:1,borderBottomColor:'#ccc' }}>
                    <View style={{ margin: 5 }}>
                        <Image source={{uri:this.state.productData.image}} style={{ width: '100%', height: Height / 4 }} />
                        <View style={{marginHorizontal:5,marginVertical:5}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>{this.state.productData.prd_name}</Text>
                                </View>
                                <View style={{width:'50%',alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:16}}>Price:${this.state.productData.orginal_price}</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%'}}>
                                    <Text>{this.state.productData.categories}</Text>
                                </View>
                                <View style={{width:'50%',alignItems:'center'}}>
                                    <Image source={require('@Assets/icons/share.png')}/>
                                </View>
                            </View>
                            <View>
                                <Text>{this.state.productData.select_item}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height:240,marginHorizontal:10,marginVertical:8}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Product Details</Text>
                    <Text style={{marginVertical:5}}>{this.state.productData.prd_descrip}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Button style={{width:'90%',justifyContent:'center',backgroundColor:'#f8bc06',borderRadius:3 }}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Add To Cart</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default SingleFood;