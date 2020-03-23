import React from 'react';
import {
    View, Text, Image, Dimensions, Modal
} from 'react-native';
import AllHeaderWithCart from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Card, CardItem, Button, Icon, ListItem, CheckBox, Body } from 'native-base';

class SingleMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sunday:false,
            monday:false,
            tuesday:false,
            wednessday:false,
            thursday:false,
            friday:false,
            saturday:false,

            dayModal:false
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
                        <Image source={require('@Assets/images/slider_food.png')} style={{ width: '100%', height: Height / 4 }} />
                        <View style={{marginHorizontal:5,marginVertical:5}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>Fishs</Text>
                                </View>
                                <View style={{width:'50%',alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:16}}>Price:$6</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%'}}>
                                    <Text>Chinese</Text>
                                </View>
                                <View style={{width:'50%',alignItems:'center'}}>
                                    <Image source={require('@Assets/icons/share.png')}/>
                                </View>
                            </View>
                            <View>
                                <Text>Veg</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height:'45%',marginHorizontal:10,marginVertical:8}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Product Details</Text>
                    <Text style={{marginVertical:5}}>nnsd cdlcndsncsdc sdlcnscnsd csdnfvjdv rfhrf hfvfnvj vhfcdsncjfv vhvsncdsjb vshcdncjd cdhscdncjbjvcs cjdshdncjsdbcsd csdjkhcdncsdbcsd cjhcdncds csckdc sjcs jc zjdcjkncjsdc sdjdcc sdjbjcnd sjb s</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Button style={{width:'90%',justifyContent:'center',backgroundColor:'#f8bc06',borderRadius:3 }}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Add To Cart</Text>
                    </Button>
                </View>

                <View style={{position:'absolute',bottom:70,flexDirection:'row',marginLeft:'35%'}}>
                    <Button style={{backgroundColor:'#f8bc06',width:50,height:50,borderRadius:50,marginHorizontal:5,justifyContent:'center'}} onPress={()=>this.setState({dayModal:true})}>
                        <Icon name="perm-contact-calendar" type="MaterialIcons" style={{fontSize:25,marginLeft:13,color:'#000'}}/>
                    </Button>
                    <Button style={{backgroundColor:'#f8bc06',width:50,height:50,borderRadius:50,marginHorizontal:5}}>
                        <Icon name="clock" type="EvilIcons" style={{fontSize:27,marginLeft:11,color:'#000'}}/>
                    </Button>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.dayModal}
                    onRequestClose={() => this.setState({dayModal:false})}
                >
                    <View style={{backgroundColor:'#000000ab',flex:1,justifyContent:'flex-end'}}>
                        <View></View>
                        <View style={{height:'65%',backgroundColor:'#fff'}}>
                            <View style={{height:'15%',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:19,marginHorizontal:15}}>Select Days</Text>
                            </View>

                            <View style={{height:'70%'}}>
                                <ListItem noBorder onPress={()=>this.setState({sunday:!this.state.sunday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.sunday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>SunDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({monday:!this.state.monday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.monday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>MonDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({tuesday:!this.state.tuesday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.tuesday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>TuesDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({wednessday:!this.state.wednessday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.wednessday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>WednessDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({thursday:!this.state.thursday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.thursday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>ThursDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({friday:!this.state.friday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.friday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>FriDay</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({saturday:!this.state.saturday})}>
                                    <CheckBox color="#f8bc06" checked={this.state.saturday}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>SaturDay</Text>
                                    </Body>
                                </ListItem>
                            </View>

                            <View style={{height:'15%',flexDirection:'row'}}>
                                <View style={{width:'40%',justifyContent:'center',alignItems:'center'}}>
                                    <Button transparent style={{width:90,justifyContent:'center'}} onPress={()=>this.setState({dayModal:false})}>
                                        <Text style={{color:'#f8bc06'}}>CANCEL</Text>
                                    </Button>
                                </View>
                                <View style={{width:'60%',flexDirection:'row'}}>
                                    
                                    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                                        <Button transparent style={{width:90,justifyContent:'center'}}>
                                            <Text style={{color:'#f8bc06'}}>APPLY</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default SingleMeal;