import React from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
// import AllHeaderWithCart from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Body, Button, Card } from 'native-base';

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                {/* <AllHeaderWithCart name="Account Screen" /> */}
                <View style={{ flex: 1, backgroundColor: '#dadada' }}>
                    <ScrollView>
                        <Text style={{ textAlign: 'center',fontWeight:'bold' }}>Freequent Rider Profile</Text>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                                <Text style={{ marginLeft: '6%', fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' }}>Rohan Maity</Text>
                                <Text style={{ color: 'orange', marginLeft: '26%', fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('EditDetailsScreen')}>Edit Details</Text>
                            </View>
                            <Text style={{ marginLeft: '6%', fontSize: 18, fontStyle: 'italic', marginTop: '5%', fontWeight: 'bold' }}>7001631885</Text>
                            <Text style={{ marginLeft: '6%', fontStyle: 'italic', fontSize: 18, marginTop: '5%',color:'#8c8c8c' }}>maityrohan420@gmail.com</Text>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Card style={{ height: 90 }}>
                                <Body>
                                    <Text style={{ textDecorationLine: 'underline', fontSize: 20, fontWeight: 'bold',color:'#8c8c8c' }}>YOUR TOTAL RIDE</Text>
                                    <Text style={{ fontSize: 40 }}>40 KM</Text>
                                </Body>
                            </Card>
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: '2%',color:'#8c8c8c' }}>View Your Passes And enjoy your Ride</Text>
                        <View style={{ marginTop: '2%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginLeft: '4%' }}>
                                    <Card style={{ width: 160, height: 100, backgroundColor: 'black' }}>
                                        <Body>
                                            <Text style={{ color: 'white' }}>DADA PASS FOR 50KM</Text>
                                            <Text style={{ color: 'white' }}>20% OFF OF</Text>
                                            <Text style={{ color: 'white' }}>2 RIDS</Text>
                                        </Body>
                                    </Card>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>WHEN YOU ACHIVE </Text>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>50KM</Text>
                                </View>
                                <View style={{ marginLeft: '1%' }}>
                                    <Card style={{ width: 160, height: 100, backgroundColor: 'black' }}>
                                        <Body>
                                            <Text style={{ color: 'white' }}>DADA PASS FOR 70KM </Text>
                                            <Text style={{ color: 'white' }}>40% OFF Of </Text>
                                            <Text style={{ color: 'white' }}>3 RIDS</Text>
                                        </Body>
                                    </Card>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>WHEN YOU ACHIVE </Text>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>50KM</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '8%' }}>
                                <View style={{ marginLeft: '4%' }}>
                                    <Card style={{ width: 160, height: 100, backgroundColor: 'black' }}>
                                        <Body>
                                            <Text style={{ color: 'white', fontSize: 13 }}>DADA PASS FOR 100KM</Text>
                                            <Text style={{ color: 'white' }}>50% OFF OF</Text>
                                            <Text style={{ color: 'white' }}>4 RIDS</Text>
                                        </Body>
                                    </Card>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>WHEN YOU ACHIVE </Text>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>50KM</Text>
                                </View>
                                <View style={{ marginLeft: '1%' }}>
                                    <Card style={{ width: 160, height: 100, backgroundColor: 'black' }}>
                                        <Body>
                                            <Text style={{ color: 'white' }}>DADA PASS FOR 70KM </Text>
                                            <Text style={{ color: 'white' }}>40% OFF OF</Text>
                                            <Text style={{ color: 'white' }}>10 RIDS</Text>
                                        </Body>
                                    </Card>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>WHEN YOU ACHIVE</Text>
                                    <Text style={{ textAlign: 'center',color:'#8c8c8c' }}>50KM</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default AccountScreen;