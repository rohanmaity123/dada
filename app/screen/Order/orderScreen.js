import React from 'react';
import {
    View, TouchableOpacity, Text,ScrollView, Dimensions, Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tabs, Tab, TabHeading, Card, CardItem,ScrollableTab } from 'native-base';
import CarOrderHistory from '@Component/OrderHistory/Car/carOrderHistory';
import FoodOrderHistory from '@Component/OrderHistory/Food/foodOrderHistory';
import GroceryOrderHistory from '@Component/OrderHistory/Grocery/groceryOrderHistory';
import EcomOrderHistory from '@Component/OrderHistory/Ecom/ecomOrderHistory';
import LiveOrderHistory from '@Component/OrderHistory/Live/liveOrderHistory';
import AllNormalHeader from '../../components/Headers/normalHeaders/allNormalHeader';

class OrderScreen extends React.Component {
    render() {
        const Height = Dimensions.get('screen').height; 
        const Width = Dimensions.get('screen').width;
        return (
            <View style={{height:Height,width:Width}}>
                <AllNormalHeader name="User History"/>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                            <Text>CAR</Text>
                        </TabHeading>
                    }>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CarOrderHistory/>
                        </ScrollView>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                            <Text>FOOD</Text>
                        </TabHeading>
                    }>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <FoodOrderHistory/>
                        </ScrollView>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                            <Text>GROCERY</Text>
                        </TabHeading>
                    }>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <GroceryOrderHistory/>
                        </ScrollView>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                            <Text>LIVE</Text>
                        </TabHeading>
                    }>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <LiveOrderHistory/>
                        </ScrollView>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#f8bc06' }}>
                            <Text>ECOM</Text>
                        </TabHeading>
                    }>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <EcomOrderHistory/>
                        </ScrollView>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}

export default OrderScreen;