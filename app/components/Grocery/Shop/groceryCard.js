import React from 'react';
import {
    View, Image, Text, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import { Card } from 'native-base';
import NavigationService from '../../../Service/Navigation';
import groceryService from '../../../Service/groceryService';

class GroceryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProduct: []
        }
    }
    async componentDidMount(){
        await this.productDetails()
    }
    productDetails = async () => {
        let Product = await groceryService.getproductdetails()
        console.log(Product)
        this.setState({
            allProduct: Product.data,
        })
    }

    render() {
        return (
            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:'3%'}} >
                {
                    this.state.allProduct.map((item, index) => {
                        return (
                            <View 
                                style={{ width: '50%', alignItems: 'center' }}
                                
                            >
                                <TouchableWithoutFeedback 
                                onPress={() => NavigationService.navigate('FoodSingleScreen',{'productData':item})}
                                key={index}
                                >
                                    <Card style={{ width: '90%', borderRadius: 5 }}>
                                        <Image source={{uri:item.image}} style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
                                        <View style={{ marginHorizontal: 13, marginVertical: 5 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.prd_name}</Text>
                                        <Text style={{ color: '#777' }}>{item.prd_descrip}</Text>
                                            <Text style={{ color: 'green' }}>{item.unit}</Text>
                                            <Text style={{ fontWeight: 'bold' }}>${item.orginal_price}</Text>
                                        </View>
                                    </Card>
                                </TouchableWithoutFeedback>
                             </View>
                        )
                    })
                }
            </View>

        )
    }
}

export default GroceryCard;