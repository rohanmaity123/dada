import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Modal,
    Dimensions,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Card, Body, Icon, Button, ListItem, Left, Right, Radio } from 'native-base';

class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Elactronics: false,
            Fashion: false,
            Furniture: false,
            shortModal: false,

        }
    }
    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;

        return (
            <View style={{flex:1}}>
                <AllHeaderWithCart name="Live Ecommerce Product" />
                <ScrollView>
                    <View style={{ height: 45, borderBottomWidth: 1, }}>
                        <Text style={{ marginLeft: '5%', fontSize: 20, marginTop: '2%' }} >Electronics</Text>
                    </View>                   
                        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('LiveEcommerce')}>
                        <Card style={styles.container} >
                                <Body >
                                    <View>
                                        <Image
                                            source={{ uri: 'http://www.clarity-comms.co.uk/wp-content/uploads/2016/11/social-media-agency-birmingham-clarity-comms-facebook-live-post.jpg' }}
                                            style={{ height: 200, width: 170, borderRadius: 10 }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.title}>30-01-2019 11:30AM</Text>
                                        <Text style={{ fontWeight: 'bold', marginTop: '2%' }}>Royel Pass Season 11</Text>
                                        <Text style={{ marginTop: '2%', alignSelf: 'center' }}>25.55% OFF </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '15%', height: 80 }}>
                                        <Text style={{ fontWeight: 'bold', marginRight: '45%', fontSize: 20 }} >51 $</Text>
                                        <Icon type='MaterialCommunityIcons' name='shopping' />
                                    </View>
                                </Body>
                            </Card>
                        </TouchableNativeFeedback>                                          
                    <View style={{ marginTop: '15%' }}>
                        <Button style={styles.button} onPress={() => this.setState({ shortModal: true })}>
                            <Text style={{ fontWeight: 'bold', marginLeft: '10%' }}>CATEGORY</Text>
                        </Button>
                    </View>

                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.shortModal}
                    onRequestClose={() => this.setState({ shortModal: false })}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ height: '70%', width: Width }} onPress={() => this.setState({ shortModal: false })}>

                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#fff', height: '30%', width: '100%' }}>
                            <ListItem noBorder onPress={() => this.setState({ Elactronics: true, Fashion: false, Furniture: false })}>
                                <Left>
                                    <Text>Elactronics</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        selected={this.state.Elactronics}
                                    />
                                </Right>
                            </ListItem>

                            <ListItem noBorder onPress={() => this.setState({ Elactronics: false, Fashion: true, Furniture: false })}>
                                <Left>
                                    <Text>Fashion</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        selected={this.state.Fashion}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem noBorder onPress={() => this.setState({ Elactronics: false, Fashion: false, Furniture: true })}>
                                <Left>
                                    <Text>Furniture</Text>
                                </Left>
                                <Right>
                                    <Radio
                                        color={"#f0ad4e"}
                                        selectedColor={"#5cb85c"}
                                        selected={this.state.Furniture}
                                    />
                                </Right>
                            </ListItem>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: 170,
        marginTop: '5%',
        marginLeft: '3%',
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        backgroundColor: '#f8bc06',
        marginTop: '3%',
        borderRadius: 8,
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 35,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#f8bc06'
    },
    modal: {
        height: '20%',
        // width: 300,
        backgroundColor: 'white',
        // marginLeft: '8%',
        // marginTop: '50%',

    }
})
export default ProductScreen;