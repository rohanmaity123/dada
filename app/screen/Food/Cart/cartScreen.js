import React from 'react';
import {
    View,Text, Image, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput, StyleSheet
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import { Card, Button,ListItem,Left,Body,Radio,Right } from 'native-base';
import CartCard from '../../../components/Cart/cartCard';

class CartScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addressModal:false,
            netBanking:false,
            cod:false,
            wallet:false,

            paymentModal:false
        }
    }

    render(){
        const arr = [
            {
                name:''
            },
            {
                name:''
            },
            {
                name:''
            },
            
        ]
        const Width = Dimensions.get('screen').width;
        const Height = Dimensions.get('window').height;
        return(
            <View style={{flex:1}}>
                <AllNormalHeader name="Food Delivery"/>
                
                <ScrollView >
                    <View style={{alignItems:'center',marginVertical:10}}>
                        <View>
                            <Text style={{fontSize:18}}>My Cart</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center'}}>
                        {
                            arr.map((item,index)=>{
                                return(
                                    <CartCard key={index}/>
                                )
                            })
                        }
                        
                    </View>
                </ScrollView>
                <View style={{position:'absolute',bottom:20,width:Width,alignItems:'center'}}>
                    <Text style={{marginVertical:10,fontWeight:'bold',fontSize:18}}>TOTAL $15</Text>
                    <Button style={{width:180,justifyContent:'center',backgroundColor:'#000',borderRadius:8}} onPress={()=>this.setState({addressModal:true})}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>CONTINUE PURCHASE</Text>
                    </Button>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.addressModal}
                    onRequestClose={() => this.setState({addressModal:false})}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{height:'40%',width:Width}} onPress={()=>this.setState({addressModal:false})}>
                            
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#fff', height:'60%', width: '100%',alignItems:'center'}}>
                            <View style={{borderWidth:0.5,width:'93%',marginTop:10,borderRadius:8}}>
                                <TextInput placeholder="Full Name" style={styles.modalInput}/>
                                <TextInput placeholder="Deliver Mobile Number" style={styles.modalInput}/>
                                <TextInput placeholder="Town/City" style={styles.modalInput}/>
                                <TextInput placeholder="State" style={styles.modalInput}/>
                                <TextInput placeholder="Flat,House no,Building,Company,Apartment" style={styles.modalInput}/>
                                <TextInput placeholder="Area, Colony, Street, Sector, Village" style={styles.modalInput}/>
                                <TextInput placeholder="Zip Code" style={styles.modalInput}/>
                                <TextInput placeholder="Landmark e.g." style={styles.modalLastInput}/>
                            </View>
                            <View style={{width:'100%',alignItems:'center',marginVertical:10}}>
                                <Button style={{width:'93%',borderRadius:8,justifyContent:'center',backgroundColor:'#f8bc06',borderWidth:0.5}} onPress={()=>this.setState({paymentModal:true,addressModal:false})}>
                                    <Text style={{color:'#fff',fontSize:18}}>Deliver to this Address</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.paymentModal}
                    onRequestClose={() => this.setState({paymentModal:false})}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{height:'40%',width:Width}} onPress={()=>this.setState({paymentModal:false})}>
                            
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#fff', height:'35%', width: '100%',alignItems:'center'}}>
                            <View style={{borderWidth:0.5,width:'93%',marginTop:10,borderRadius:8}}>
                                <ListItem noBorder onPress={()=>this.setState({cod:false,netBanking:true,wallet:false})}>
                                    <Left style={{maxWidth:40}}>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={this.state.netBanking}
                                        />
                                    </Left>
                                    <Body>
                                        <Text>Online Banking</Text>
                                    </Body>
                                </ListItem>

                                <ListItem noBorder onPress={()=>this.setState({cod:true,netBanking:false,wallet:false})}>
                                    <Left style={{maxWidth:40}}>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={this.state.cod}
                                        />
                                    </Left>
                                    <Body>
                                        <Text>Cash on Delivery(COD)</Text>
                                    </Body>
                                </ListItem>

                                <ListItem noBorder onPress={()=>this.setState({cod:false,netBanking:false,wallet:true})}>
                                    <Left style={{maxWidth:40}}>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={this.state.wallet}
                                        />
                                    </Left>
                                    <Body>
                                        <Text>Wallet</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View style={{width:'100%',alignItems:'center',marginVertical:10}}>
                                <Button style={{width:'93%',borderRadius:8,justifyContent:'center',backgroundColor:'#f8bc06',borderWidth:0.5}}>
                                    <Text style={{color:'#fff',fontSize:18}}>Deliver to this Address</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalInput:{
        height:45,
        borderBottomWidth:1,
        borderBottomColor:'#cacbcb',
        paddingLeft:15
    },
    modalLastInput:{
        height:45,
        paddingLeft:15
    }
})

export default CartScreen;