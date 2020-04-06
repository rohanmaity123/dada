import React from 'react';
import {
    View, Image, Text, TouchableOpacity, Dimensions, TouchableWithoutFeedback
} from 'react-native';
import { Card } from 'native-base';
import NavigationService from '../../../Service/Navigation';
import groceryService from '../../../Service/groceryService';

class ShopCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopData: []
        }
    }
    async componentDidMount() {
        await this.shopDetails();
    }

    shopDetails = async () => {
        let shop = await groceryService.getshopdetails()
        console.log(shop)
        this.setState({
            shopData: shop.data,
        })
    }
    render() {
        const Width = Dimensions.get('screen').width;
        return (
                <View>                   
                {
                    this.state.shopData.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => NavigationService.navigate('ShopPage',{'shopData':item})}>
                            <Card style={{
                                    width: Width - 20, 
                                    alignSelf: 'center', 
                                    height: 130, 
                                    borderRadius: 3, 
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    borderRadius: 5 
                                 }}
                                 key={index}
                                 >
                                <View style={{ 
                                        width: '40%', 
                                        alignItems: 'flex-end', 
                                        justifyContent: 'center',
                                        height: '100%' 
                                    }}>
                                    <Image source={{uri:item.image}} style={{ width: '90%', height: '80%' }} />
                                </View>
                                <View style={{ width: '60%', height: '80%', paddingLeft: 10 }}>
                                    <View style={{ height: '50%', justifyContent: 'center', borderBottomWidth: 1, width: '90%', borderBottomColor: '#eaebeb' }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                    </View>
                                    <View style={{ height: '50%' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>* 3.15</Text>
                                            <Text style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Open</Text>
                                        </View>
                                        <TouchableOpacity style={{ marginTop: 5 }} onPress={() => NavigationService.navigate('GroceryReviewScreen')}>
                                            <Text style={{ color: 'red' }}>Show All Reviews</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>

        )
    }
}

export default ShopCard;