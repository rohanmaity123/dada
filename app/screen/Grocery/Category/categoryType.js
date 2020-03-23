import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight,TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';

class GroceryCatagoryType extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AllHeaderWithCart name="Choose Category" />

                <View style={{ flexDirection: "row", marginTop: '5%', marginLeft: '5%' }}>
                    <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('EStoreHome')} >
                        <Card style={styles.container}  >
                            <Body >
                                <View>
                                    <Image
                                        source={{ uri: 'https://image.shutterstock.com/image-photo/supermarket-aisle-empty-red-shopping-260nw-418522381.jpg' }}
                                        style={{ height: 90, width: 130, marginTop: '4%' }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginTop: '8%', fontWeight: 'bold' }}>SHIRT</Text>
                                </View>
                            </Body>
                        </Card>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('EStoreHome')}>
                        <Card style={styles.container}>
                            <Body>
                                <View>
                                    <Image
                                        source={{ uri: 'https://image.shutterstock.com/image-photo/supermarket-aisle-empty-red-shopping-260nw-418522381.jpg' }}
                                        style={{ height: 90, width: 130, marginTop: '4%' }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginTop: '8%', fontWeight: 'bold' }}>SHOE</Text>
                                </View>
                            </Body>
                        </Card>
                    </TouchableNativeFeedback>

                </View>

                <View style={{ flexDirection: "row", marginTop: '5%', marginLeft: '5%' }}>
                    <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('EStoreHome')}>
                        <Card style={styles.container}>
                            <Body>
                                <View>
                                    <Image
                                        source={{ uri: 'https://image.shutterstock.com/image-photo/supermarket-aisle-empty-red-shopping-260nw-418522381.jpg' }}
                                        style={{ height: 90, width: 130, marginTop: '4%' }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginTop: '8%', fontWeight: 'bold' }}>SHAMPOO</Text>
                                </View>
                            </Body>
                        </Card>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('EStoreHome')}>
                        <Card style={styles.container}>
                            <Body>
                                <View>
                                    <Image
                                        source={{ uri: 'https://image.shutterstock.com/image-photo/supermarket-aisle-empty-red-shopping-260nw-418522381.jpg' }}
                                        style={{ height: 90, width: 130, marginTop: '4%' }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginTop: '8%', fontWeight: 'bold' }}>RAM</Text>
                                </View>
                            </Body>
                        </Card>
                    </TouchableNativeFeedback>
                    

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        backgroundColor: '#f8bc06',
        borderRadius: 10,
        marginRight: '5%'
    }
})
export default GroceryCatagoryType;