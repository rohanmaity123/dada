import React from 'react';
import {
    View, Image, Text, TouchableOpacity, Dimensions
} from 'react-native';
import { Card, CardItem } from 'native-base';
import Auth from '@Service/Auth';
import groceryService from '../../../Service/groceryService';

class GroceryOrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allOrders: []
        }
    }
    async componentDidMount() {
        await this.orderHistory()
    }
    orderHistory = async () => {
        let userData = await Auth.getAccount()
        console.log('userData', userData)
        let orderDetails = await groceryService.order(userData.phone);
        console.log('orderDetails', orderDetails);
        this.setState({
            allOrders: orderDetails.data
        })
    }
    render() {
        const Width = Dimensions.get('screen').width;
        return (
            <View>
                {
                    this.state.allOrders.map((item, index) => {
                        return (
                            <Card style={{ 
                                width: Width - 15, 
                                alignSelf: 'center', 
                                borderRadius: 5 
                                }}
                                key={index}
                            >
                                <CardItem header bordered>
                                    <Image source={require('@Assets/icons/history_car.png')} style={{ height: 20, width: 20 }} />
                                    <Text style={{ fontWeight: 'bold' }}>Your Grocery Booking History</Text>
                                </CardItem>
                                <CardItem>
                                    <Text style={{ fontWeight: 'bold' }}>Invoice No :</Text>
                                    <Text style={{ marginLeft: 3 }}>{item.invoice}</Text>
                                    <View style={{ flexDirection: 'row', marginLeft: Width - 342 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Date:</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{item.datet}</Text>
                                    </View>
                                </CardItem>
                                <CardItem>
                                    <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>Delivery Address :</Text>
                                    <Text style={{ flexShrink: 1, marginLeft: 10 }}>
                                        {item.town_city},
                                        {item.landmark},
                                        {item.state}
                                    </Text>
                                </CardItem>
                            </Card>
                        )
                    })
                }
            </View>

        )
    }
}

export default GroceryOrderHistory;