import React from 'react';
import {
    View, TouchableOpacity, Text, Dimensions, Image, TextInput, ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Button, Tabs, Tab, TabHeading, CardItem,ScrollableTab } from 'native-base';
import TransactionCard from '@Component/Wallet/transactionCard';
import AllNormalHeader from '../../components/Headers/normalHeaders/allNormalHeader';

class WalletScreen extends React.Component {
    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        const carTrans = [
            {
                name:''
            },{
                name:''
            },{
                name:''
            },{
                name:''
            },{
                name:''
            },{
                name:''
            },{
                name:''
            },{
                name:''
            },
        ]
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <AllNormalHeader name="User Payment"/>
                <View style={{ marginLeft: 11, height: Height / 14, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Add Money to your Accounts</Text>
                </View>
                <Card style={{ width: Width - 20, alignSelf: 'center', flexDirection: 'row', height: Height / 10, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
                    <CardItem button onPress={()=>this.props.navigation.navigate('AddMoney')}>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 10 }}>
                            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#F9D004',alignItems:'center',justifyContent:'center' }}>
                                <Image source={require('@Assets/icons/wallet_new.png')} style={{height:30,width:30}}/>
                            </View>
                        </View>
                        <View style={{ flex: 4 }}>
                            <Text>Dada Wallet</Text>
                            <Text>Available Balance: $150</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons name="ios-arrow-forward" size={30} />
                        </View>
                    </CardItem>
                </Card>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput elevation={5} placeholder="Enter Amount" style={{ paddingLeft: 10, backgroundColor: '#fff', height: Height / 17.5, width: Width / 1.5, borderWidth: 0.5, marginLeft: 10, marginTop: 10, borderRadius: 5, borderColor: '#ccc' }} />
                    <Button elevation={5} style={{ marginTop: 10, borderRadius: 5, backgroundColor: '#F9D004', width: Width /3.75, marginLeft: 5, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Withdraw</Text>
                    </Button>
                </View>
                <View style={{ width: Width, height: Height / 1.5, marginTop: 5 }}>
                    <Tabs renderTabBar={() => <ScrollableTab />}>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                                <Text>CAR</Text>
                            </TabHeading>
                        }>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    carTrans.map((item,index)=>{
                                        return(
                                            <TransactionCard key={index}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                                <Text>FOOD</Text>
                            </TabHeading>
                        }>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    carTrans.map((item,index)=>{
                                        return(
                                            <TransactionCard key={index}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                                <Text>GROCERY</Text>
                            </TabHeading>
                        }>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    carTrans.map((item,index)=>{
                                        return(
                                            <TransactionCard key={index}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                                <Text>LIVE</Text>
                            </TabHeading>
                        }>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    carTrans.map((item,index)=>{
                                        return(
                                            <TransactionCard key={index}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                                <Text>ECOM</Text>
                            </TabHeading>
                        }>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    carTrans.map((item,index)=>{
                                        return(
                                            <TransactionCard key={index}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </View>
            </View>
        )
    }
}

export default WalletScreen;