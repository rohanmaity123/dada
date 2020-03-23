import React from 'react';
import {
    View, Dimensions, Text, ScrollView, TouchableOpacity, Modal, Image
} from 'react-native';
import AllNormalHeader from '../../../components/Headers/normalHeaders/allNormalHeader';
import AllHeaderWithCart from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Card, CardItem, Icon, Tabs, Tab, TabHeading, ScrollableTab, ListItem, Left, Right, Radio, Button, Body, CheckBox } from 'native-base';
import FoodCard from '@Component/Food/Restaurant/foodCard';
import MealCard from '@Component/Food/Restaurant/mealCard';

class SingleRestaurent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            LowToHigh:false,
            HighToLow:false,
            shortModal:false,

            catChinese:false,
            catMexican:false,
            catItalian:false,
            catContinental:false,
            catThaiFood:false,
            categoriModal:false
        }
    }
    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
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
            {
                name:''
            },
            {
                name:''
            },
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
        return (
            <View>
                <AllHeaderWithCart name="Product Item" />
                <ScrollView>
                    <Card style={{ width: Width }}>
                        <CardItem style={{ borderBottomWidth: 1, borderBottomColor: '#cacbcb' }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Dhaba</Text>
                                    <Text style={{ marginVertical: 5 }}>Bidhannagar,Kolkata,India</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <View style={{ backgroundColor: '#f8bc06', width: Width / 5, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>35 MIN</Text>
                                    </View>
                                </View>
                            </View>
                            <View></View>
                        </CardItem>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <CardItem style={{ width: '50%', borderRightWidth: 1, borderRightColor: '#cacbcb', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>this.setState({shortModal:true})}>
                                    <Icon name="down" type="AntDesign" style={{ fontSize: 15, width: 20 }} />
                                    <Text style={{ fontSize: 16 }}>Sort</Text>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem style={{ width: '50%', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>this.setState({categoriModal:true})}>
                                    <Icon name="filter" type="FontAwesome" style={{ fontSize: 15, width: 20 }} />
                                    <Text style={{ fontSize: 16 }}>Filter</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </View>
                    </Card>
                    <View style={{ height: Height / 1.3, backgroundColor: '#fff', elevation: 5 }}>
                        <Tabs>
                            <Tab heading={
                                <TabHeading style={{ backgroundColor: '#f8bc06', width: '50%' }}>
                                    <Text>REGULAR</Text>
                                </TabHeading>
                            }
                            >
                                <ScrollView style={{marginBottom:35}}>
                                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                        {
                                            arr.map((item,index)=>{
                                                return(
                                                    <FoodCard key={index}/>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                                
                            </Tab>
                            <Tab heading={
                                <TabHeading style={{ backgroundColor: '#f8bc06', width: '50%' }}>
                                    <Text>MEAL</Text>
                                </TabHeading>
                            }>
                                <ScrollView style={{marginBottom:35}}>
                                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                        {
                                            arr.map((item,index)=>{
                                                return(
                                                    <MealCard key={index}/>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                            </Tab>
                        </Tabs>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.shortModal}
                    onRequestClose={() => this.setState({shortModal:false})}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{height:'82%',width:Width}} onPress={()=>this.setState({shortModal:false})}>
                            
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#fff', height:'18%', width: '100%'}}>
                            <ListItem noBorder onPress={()=>this.setState({HighToLow:false,LowToHigh:true})}>
                                <Left>
                                    <Text>Price -- Low to High</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        selected={this.state.LowToHigh}
                                    />
                                </Right>
                            </ListItem>

                            <ListItem noBorder onPress={()=>this.setState({HighToLow:true,LowToHigh:false})}>
                                <Left>
                                    <Text>Price -- High to Low</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        selected={this.state.HighToLow}
                                    />
                                </Right>
                            </ListItem>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.categoriModal}
                    onRequestClose={() => this.setState({categoriModal:false})}
                >
                    <View style={{backgroundColor:'#000000ab',flex:1,justifyContent:'flex-end'}}>
                        <View></View>
                        <View style={{height:'50%',backgroundColor:'#fff'}}>
                            <View style={{height:'15%',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:19,marginHorizontal:15}}>All Categories</Text>
                            </View>

                            <View style={{height:'70%'}}>
                                <ListItem noBorder onPress={()=>this.setState({catChinese:!this.state.catChinese})}>
                                    <CheckBox color="#f8bc06" checked={this.state.catChinese}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>Chinese</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({catMexican:!this.state.catMexican})}>
                                    <CheckBox color="#f8bc06" checked={this.state.catMexican}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>Mexican</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({catItalian:!this.state.catItalian})}>
                                    <CheckBox color="#f8bc06" checked={this.state.catItalian}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>Italian</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({catContinental:!this.state.catContinental})}>
                                    <CheckBox color="#f8bc06" checked={this.state.catContinental}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>Continental</Text>
                                    </Body>
                                </ListItem>
                                <ListItem noBorder onPress={()=>this.setState({catThaiFood:!this.state.catThaiFood})}>
                                    <CheckBox color="#f8bc06" checked={this.state.catThaiFood}/>
                                    <Body style={{marginHorizontal:10}}>
                                        <Text>Thai food</Text>
                                    </Body>
                                </ListItem>
                            </View>

                            <View style={{height:'15%',flexDirection:'row'}}>
                                <View style={{width:'40%',justifyContent:'center',alignItems:'center'}}>
                                    <Button 
                                        transparent 
                                        style={{width:90,justifyContent:'center'}} 
                                        onPress={()=>this.setState({
                                            catChinese:false,
                                            catMexican:false,
                                            catItalian:false,
                                            catContinental:false,
                                            catThaiFood:false
                                        })}
                                    >
                                        <Text style={{color:'#f8bc06'}}>CLEAR ALL</Text>
                                    </Button>
                                </View>
                                <View style={{width:'60%',flexDirection:'row'}}>
                                    <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                                        <Button transparent style={{width:90,justifyContent:'center'}} onPress={()=>this.setState({categoriModal:false})}>
                                            <Text style={{color:'#f8bc06'}}>DISMISS</Text>
                                        </Button>
                                    </View>
                                    <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
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

export default SingleRestaurent;